import SwiperCore, {
  A11y,
  Navigation,
  Pagination,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import DataServices from '../../../mocks/DataServices';
import styles from './ServiceDesktop.module.scss';
import { DataLayer } from '../../../components/Track/DataLayer/DataLayer';

SwiperCore.use([Navigation, Pagination, A11y]);

const Services = () => {
  return (
    <section id="destaques" className={styles.container}>
      <div className={styles.maxWidth}>
        <Swiper
          observer
          observeParents
          parallax
          slidesPerView={1}
          navigation
          onInit={() => {
            document
              .querySelector('#destaques .swiper-button-prev')
              .classList.add(styles.swiperButtonPrev);

            document
              .querySelector('#destaques .swiper-button-prev')
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
              .querySelector('#destaques .swiper-button-next')
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
              .querySelector('#destaques .swiper-button-next')
              .classList.add(styles.swiperButtonNext);
          }}
        >
          <div className={styles.content}>
            {DataServices.map(slide => (
              <SwiperSlide key={`${slide.id}`}>
                <div className={styles.resource}>
                  <div>
                    <h1 className={styles.servicetitle}>
                      DETALHES ELETRIZANTES
                      <br />
                      <strong>DO JEEP COMPASS 4XE</strong>
                    </h1>
                    {/* Titulo */}
                    <h2 className={styles.tltSwipper}>
                      {slide.textLayer}
                    </h2>

                    {/* Descrição */}
                    <p className={styles.slideDescription}>
                      {slide.description}
                    </p>
                  </div>

                  {/* Imagem do Display */}
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    title={slide.imageAlt}
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
