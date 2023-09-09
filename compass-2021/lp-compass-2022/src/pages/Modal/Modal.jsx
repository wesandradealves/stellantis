import { useEffect, useState } from 'react';
import SwiperCore, {
  A11y,
  Navigation,
  Pagination,
} from 'swiper';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import iconclose from '../../assets/close-modal.svg';
import { DataLayer } from '../../components/Track/DataLayer/DataLayer';
import { DataPlayers } from '../../mocks/DataPlayers';
import scss from './Modal.module.scss';
import { Swiper } from './styles';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function Modal({
  isOpen,
  setInitialSlide,
  setIsOpen,
}) {
  const [getIndex, setIndex] = useState(0);

  return (
    <>
      <div
        id="modal"
        className={[scss.main, isOpen ? scss.open : ''].join(
          ' ',
        )}
      >
        <button
          className={scss.closeModal}
          onClick={() => {
            setIsOpen(false);
            DataLayer.push(
              'CustomTrack',
              'click',
              'conteudo',
              'inovacao-que-enche-os-olhos',
              'icone',
              'fechar',
            );
          }}
        >
          <img src={iconclose} alt={'close-modal'} />
        </button>
        <div className={scss.container}>
          <Swiper
            initialSlide={setInitialSlide}
            id="veja-os-videos"
            navigation
            allowTouchMove={false}
            simulateTouch={false}
            pagination={{ clickable: false }}
            onInit={() => {
              document
                .querySelector(
                  '#veja-os-videos .swiper-button-prev',
                )
                .addEventListener('click', () =>
                  DataLayer.push(
                    'CustomTrack',
                    'click',
                    'conteudo',
                    'inovacao-que-enche-os-olhos',
                    'icone',
                    'anterior',
                  ),
                );

              document
                .querySelector(
                  '#veja-os-videos .swiper-button-next',
                )
                .addEventListener('click', () =>
                  DataLayer.push(
                    'CustomTrack',
                    'click',
                    'conteudo',
                    'inovacao-que-enche-os-olhos',
                    'icone',
                    `proximo-${DataPlayers[setInitialSlide]?.name}`,
                  ),
                );
            }}
            onSlideChange={param => {
              const iframeTag = document.querySelector(
                `#video-${getIndex}`,
              );

              const tag = iframeTag?.src;
              iframeTag.setAttribute('src', tag);

              setIndex(param.activeIndex);
            }}
          >
            {DataPlayers.map(item => (
              <SwiperSlide key={`modal-${item.id}`}>
                <iframe
                  id={`video-${item.id}`}
                  width="854"
                  height="480"
                  src={`https://www.youtube.com/embed/${item.videoIdDesktop}?&enablejsapi=1&rel=0&origin=https://compass.jeep.com.br`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
