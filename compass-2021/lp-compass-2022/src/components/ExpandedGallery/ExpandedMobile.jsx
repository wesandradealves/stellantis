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

const ExpandedMobile = () => {
  const { isExpand, setExpand, versionSelected, indexPhoto } =
    useContext(GalleryContext);

  console.log(versionSelected);
  return (
    <>
      {isExpand && (
        <ExpandedDiv id="modal-gallery-mobile">
          {/* <p color="white">teste </p>
        <button onClick={() => setExpand(false)}>CLOSE</button> */}

          <SwiperContainer>
            <Swiper
              initialSlide={indexPhoto - 1}
              slidesPerView={1}
              navigation={false}
              centeredSlides={true}
              allowTouchMove={true}
              simulateTouch={true}
              pagination={{ clickable: false }}
            >
              {versionSelected.gallery.map(item => (
                <SwiperSlide key={`modal-${item.photoId}`}>
                  <Close
                    alt="fechar galeria"
                    src={images.closeModal}
                    onClick={() => setExpand(false)}
                  />
                  <Photo
                    src={item.photosMobile}
                    alt={`Galeria`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperContainer>
        </ExpandedDiv>
      )}
    </>
  );
};

export default ExpandedMobile;
