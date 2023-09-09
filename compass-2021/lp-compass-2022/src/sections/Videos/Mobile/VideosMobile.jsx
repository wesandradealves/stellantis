import { SwiperReact, SwiperSlide, Swiper } from 'swiper/react';
import { useState, useEffect } from 'react';
import styles from './VideosMobile.module.scss';
import iconplayer from '../../../assets/play-video.svg';
import { DataPlayers } from '../../../mocks/DataPlayers';
import ModalMobile from '../../../pages/Modal/Mobile';
import getClientXFromDifferentEvents from '../../../NewTrack/getClientXFromDifferentEvents';
import NewDataLayer from '../../../NewTrack/NewDataLayer';
import { DataLayer } from '../../../components/Track/DataLayer/DataLayer';

const DataPlay = DataPlayers;

export default function Videos() {
  const [getIndex, setIndex] = useState(0);
  const [controller, setController] = useState();
  const [indexSlide, setIndexSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [touchLocation, setTouchLocation] = useState();
  const [pageX, setPageX] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setPageX(window?.innerWidth);
    };
    window?.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const percentage = (DataPlayers.length * getIndex) / 3;

  function renderModal() {
    return (
      <ModalMobile
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        setInitialSlide={indexSlide}
      />
    );
  }
  return (
    <section id="videosMobile" className={styles.mainSection}>
      {modalOpen === true ? renderModal() : null}
      <h1 className={styles.title}>
        INOVAÇÃO QUE ENCHE OS OLHOS
      </h1>

      <div className={styles.containerVideos}>
        <Swiper
          id="compass-2022"
          initialSlide={1}
          simulateTouch={false}
          allowTouchMove={true}
          className={styles.Swiper}
          onSwiper={s => setController(s)}
          pagination={{
            clickable: false,
            type: 'bullets',
          }}
          // LARGURA DA JANELA / (LARGURA DO THUMB  *  QUANTIDADE DE SLIDES)
          slidesPerView={Math.ceil((pageX - 100) / 160)}
          slidesOffsetAfter={30}
          slidesOffsetBefore={35}
          onInit={() => {
            document
              .querySelector('#compass-2022 .swiper-pagination')
              .classList.add(styles.swiperPagination);
          }}
          onSlideChange={param => {
            setIndex(param.activeIndex);
          }}
          onTouchStart={(_, event) => {
            const clientX = getClientXFromDifferentEvents(event);
            setTouchLocation(clientX);
          }}
          onTouchEnd={(_, event) => {
            const clientX = getClientXFromDifferentEvents(event);

            if (clientX !== touchLocation) {
              DataLayer.push(
                'CustomTrack',
                'slide',
                'conteudo',
                'inovacao-que-enche-os-olhos',
                'slide',
                touchLocation > clientX ? 'proximo' : 'anterior',
              );
            }
          }}
        >
          {DataPlayers.map(item => (
            <SwiperSlide
              key={`videos-mobile-${item.id}`}
              className={styles.swiperSlide}
              onClick={() => {
                DataLayer.push(
                  'CustomTrack',
                  'play',
                  'conteudo',
                  'inovacao-que-enche-os-olhos',
                  'card',
                  `video-${item.name}`,
                );
                setIndexSlide(item.id);
                setModalOpen(true);
              }}
            >
              <div
                id={`miniplayer-${item.id}`}
                style={{ backgroundImage: `url(${item.thumb})` }}
                className={styles.containerMiniPlayer}
              >
                <img
                  alt="play"
                  className={styles.iconplayer}
                  src={iconplayer}
                />
                <h2 className={styles.timerMiniPlayer}>
                  {item.timer}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
