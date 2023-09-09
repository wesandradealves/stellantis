import React, { useState, useEffect } from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { SwiperSlide } from 'swiper/react';
import { useSwipeable } from 'react-swipeable';
import Youtube from 'react-youtube';
import { DataLayer } from '../../../components/Track/DataLayer/DataLayer';
import { Swiper } from './styles';
import { DataPlayers } from '../../../mocks/DataPlayers';
import scss from './ModalMobile.module.scss';
import iconclose from '../../../assets/close-modal.svg';

SwiperCore.use([Navigation, Pagination, A11y]);

// const Video = ({ item }) => {
//   return (
//     <iframe
//       allowTransparency={true}
//       allowTouchMove={true}
//       frameBorder={0}
//       allowFullScreen
//       className={scss.ytbframe}
//       id={`video-${item.id}`}
//       // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       src={`http://www.youtube.com/embed/${item.videoId}?controls=0&showinfo=0&modestbranding=1&autoplay=0&playsinline=0&fs=0&origin=http://compass.jeep.com.br/`}
//     />
//   );
// };

export default function ModalMobile({
  isOpen,
  setInitialSlide,
  setIsOpen,
}) {
  const [getIndex, setIndex] = useState(0);

  const optionsYtb = {
    playerVars: {
      origin: 'http://compass.jeep.com.br/',
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      autoplay: 0,
      playinline: 1,
      fs: 0,
      rel: 0,
      autohide: 1,
      enablejsapi: 1,
    },
  };

  return (
    <>
      <div
        className={[scss.main, isOpen ? scss.open : ''].join(
          ' ',
        )}
      >
        <button
          id="closeModal"
          className={scss.closeModal}
          onClick={() => {
            DataLayer.push(
              'CustomTrack',
              'click',
              'conteudo',
              'inovacao-que-enche-os-olhos',
              'icone',
              'fechar',
            );
            setIsOpen(false);
          }}
        >
          <img src={iconclose} alt={'close-modal'} />
        </button>
        <div className={scss.container}>
          <Swiper
            id="veja-os-videos"
            initialSlide={setInitialSlide}
            simulateTouch={true}
            allowTouchMove={true}
            navigation
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
            pagination={{
              clickable: false,
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
              <SwiperSlide key={`modal-mobile-${item.id}`}>
                <div className={scss.conteudo}>
                  <button className={scss.buttonLeft} />
                  <button className={scss.buttonRight} />
                  <iframe
                    id={`video-${item.id}`}
                    width="854"
                    height="480"
                    src={`https://www.youtube.com/embed/${item.videoId}?&enablejsapi=1&rel=0&origin=https://compass.jeep.com.br`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      )
    </>
  );
}
