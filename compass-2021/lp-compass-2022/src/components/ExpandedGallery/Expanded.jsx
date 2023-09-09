import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as images from '../../assets';
import { GalleryContext } from '../../context/Gallery/GalleryContext';
import {
  ExpandedDiv,
  Photo,
  SwiperContainer,
  Close,
} from './styles';

const Expanded = () => {
  const { isExpand, setExpand, versionSelected, indexPhoto } =
    useContext(GalleryContext);

  console.log(versionSelected);
  return (
    <>
      {isExpand && (
        <ExpandedDiv id="modal-gallery">
          {/* <p color="white">teste </p>
        <button onClick={() => setExpand(false)}>CLOSE</button> */}

          <SwiperContainer>
            <Swiper
              initialSlide={indexPhoto - 1}
              slidesPerView={1}
              navigation
              centeredSlides={true}
              allowTouchMove={false}
              simulateTouch={false}
              pagination={{ clickable: false }}
              onInit={() => {
                document
                  .querySelector('#modal-gallery .swiper-slide')
                  .classList.add('swiperSlide');

                document
                  .querySelector(
                    '#modal-gallery .swiper-button-prev',
                  )
                  .classList.add('swiperButtonPrev');

                document
                  .querySelector(
                    '#modal-gallery .swiper-button-prev',
                  )
                  .addEventListener('click', () =>
                    DataLayer.push(
                      'CustomTrack',
                      'click',
                      'conteudo',
                      'destaques-4xe',
                      'icone',
                      'anterior',
                    ),
                  );

                document
                  .querySelector(
                    '#modal-gallery .swiper-button-next',
                  )
                  .addEventListener('click', () =>
                    DataLayer.push(
                      'CustomTrack',
                      'click',
                      'conteudo',
                      'destaques-4xe',
                      'icone',
                      'proximo',
                    ),
                  );
                document
                  .querySelector(
                    '#modal-gallery .swiper-button-next',
                  )
                  .classList.add('swiperButtonNext');
              }}
            >
              {versionSelected.gallery.map(item => (
                <SwiperSlide key={`modal-${item.photoId}`}>
                  <Close
                    alt="fechar galeria"
                    src={images.closeModal}
                    onClick={() => setExpand(false)}
                  />
                  <Photo src={item.photos} alt={`Galeria`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperContainer>
        </ExpandedDiv>
      )}
    </>
  );
};

export default Expanded;
