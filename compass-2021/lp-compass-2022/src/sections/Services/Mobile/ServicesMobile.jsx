import SwiperCore, {
  A11y,
  Navigation,
  Pagination,
} from 'swiper';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { DataLayer } from '../../../components/Track/DataLayer/DataLayer';
import { BoxSection, Container, Swiper, Title } from './styles';

SwiperCore.use([Navigation, Pagination, A11y]);

const ServicesMobile = ({ data }) => {
  return (
    <Container id="destaques">
      {/* <Title>DETALHES ELETRIZANTES</Title> */}

      <Swiper
        navigation
        onInit={() => {
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
        }}
        loop
        pagination={{ clickable: false }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={`destaques-mobile-slide-${index}`}>
            <BoxSection key={item.id}>
              <div>
                <img
                  src={item.imageMobile}
                  alt={item.imageAlt}
                />
                <div>
                  <h1>
                    {item?.header?.map(title =>
                      title.bold ? (
                        <strong
                          key={`destaques-mobile-title-${title.text}`}
                        >
                          {title.text}
                        </strong>
                      ) : (
                        title.text
                      ),
                    )}
                  </h1>

                  {!!item?.description && (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item?.description,
                      }}
                    />
                  )}
                  <span
                    style={{ display: 'none' }}
                    className="titleSubtitle"
                  >
                    {`${item.textLayer}`.toLowerCase()}
                  </span>
                </div>
              </div>
            </BoxSection>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
export default ServicesMobile;
