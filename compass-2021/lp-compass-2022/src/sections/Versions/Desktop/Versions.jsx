import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SwiperCore, {
  A11y,
  Navigation,
  Pagination,
} from 'swiper';
import { SwiperSlide } from 'swiper/react';
import * as images from '../../../assets';
import {
  Button,
  Gallery as GalleryComponent,
} from '../../../components';
import { Colors } from '../../../styles';
import { DataLayer } from '../../../components/Track/DataLayer/DataLayer';
import {
  BoxSection,
  Car,
  Content,
  Cta,
  NewCta,
  Details,
  InfosWrraper,
  BtnContainer,
  GallerySubtitle,
  Infos,
  Model,
  Swiper,
  Text,
} from './styles';

SwiperCore.use([Navigation, Pagination, A11y]);

const VersionsDesktop = ({ data }) => {
  const [swiperInstance, setSwiperInstance] = useState();
  const [flagVersions, setflagVersions] = useState(false);

  const [scrollTop, setScrollTop] = useState();
  const [afterBlock, setAfterBlock] = useState(false);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };

    window.addEventListener('scroll', onScroll);

    const boxVersions =
      document.querySelector('#versoes').offsetTop;

    const heightVersions =
      document.querySelector('#versoes').offsetHeight;

    const checkAfterBlock =
      scrollTop > boxVersions + heightVersions - 1000;

    const checkOnBlock =
      scrollTop >= boxVersions + 100 && !checkAfterBlock;

    /* setOnBlock(checkOnBlock); */
    setAfterBlock(checkAfterBlock);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === '/4xe/versoes' ||
      location.pathname === '/4xe/versoes'
    ) {
      setflagVersions(true);
    }
  }, []);

  useEffect(() => {
    // swiperInstance?.slideTo(flagVersions ? 3 : 9);
    swiperInstance?.slideTo(flagVersions ? 0 : 8);
  }, [swiperInstance]);

  return (
    <>
      <Swiper
        id="versoes"
        navigation={false}
        loop
        pagination={false}
        simulateTouch={false}
        allowTouchMove={false}
        afterblock={afterBlock ? 'true' : 'false'}
        initialSlide={9}
        onSwiper={setSwiperInstance}
        // prettier-ignore
        onSlideChange={(parameter) => {
          let i = 1;
          const isopen = $('img[alt="logo-menu"]').parent().first().css("left") === "0px";
          // eslint-disable-next-line func-names
          $($(".swiper-container")[2]).find($('.swiper-wrapper')).find(".swiper-slide").each(function (index) {

            if ($(this).hasClass("swiper-slide-active")) {
              const elementSwipper = $($(".swiper-container")[2]).find($('.swiper-wrapper'))
              let dest = - window.screen.width * (parameter.activeIndex) + (204.8 * parameter.activeIndex)

              if (isopen === false) {
                dest = - window.screen.width * parameter.activeIndex
              }
              // prettier-ignore
              /* eslint-disable */
              // elementSwipper.css('transform', 'translateX(' + dest + 'px)'); // eslint-disable-line;
            }
            i++;
          });
          setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
          }, 400);
        }}
      >
        {data.map(item => (
          <SwiperSlide
            key={`versions-desktop-swiper-${item.id}`}
            id="conteudo-galeria"
          >
            <Content
              hibrido={true}
              key={item.id}
              width={item.presentation.width}
            >
              <h1 className="versionsTlt">
                CONHEÇA A VERSÃO DO JEEP COMPASS 4XE
              </h1>
              <BoxSection>
                <div>
                  <Text>
                    <span
                      style={{ display: 'none' }}
                      className="titleSubtitle"
                    >
                      {`${item.presentation.title}-${item.presentation.subtitle}`.toLowerCase()}
                    </span>

                    <h2 className={'presentation-year'}>
                      JEEP COMPASS {item.presentation.year}
                    </h2>
                    <p className="textTlt">
                      {item.presentation.title}
                    </p>
                    <p>{item.presentation.subtitle}</p>
                  </Text>

                  <Details>
                    <InfosWrraper>
                      {item.details.map((detail, index) => (
                        <Infos
                          key={`versions-desktop-info-detail${index}`}
                        >
                          <img
                            src={detail.bg}
                            alt={detail.text}
                            title={detail.text}
                          />

                          <span>{detail.text}</span>
                        </Infos>
                      ))}
                    </InfosWrraper>

                    <NewCta>
                      <Button
                        datalayer={'TodasAsVersoes_ClicouCTA'}
                        datalayername={'monte-o-seu'}
                        datalayerversionname={item.version
                          .replace(/\s/g, '-')
                          .normalize('NFD')
                          .replace(/[\u0300-\u036f]/g, '')
                          .toLocaleLowerCase()}
                        height={50}
                        width={220}
                        bg={Colors.primary}
                        color={Colors.light}
                        onClick={() =>
                          DataLayer.push(
                            'CustomTrack',
                            'click',
                            'conteudo',
                            'fotos',
                            'cta',
                            `monte-o-seu`,
                          )
                        }
                        target={'_blank'}
                        href='https://www.jeep.com.br/compass/monte.html'
                      >
                        {/* <span className={styles.container}> */}
                        <BtnContainer>
                          Monte o seu
                          <img alt="Seta Botão" src={images.menuArrow} />
                        </BtnContainer>
                      </Button>
                      <Button
                        height={50}
                        width={220}
                        href='https://www.jeep.com.br/4xe/solicite.html'
                        datalayer={'TodasAsVersoes_ClicouCTA'}
                        datalayername={'compre-o-seu'}
                        color={Colors.light}
                        bg={Colors.secondary}
                        onClick={() =>
                          DataLayer.push(
                            'CustomTrack',
                            'click',
                            'conteudo',
                            'fotos',
                            'cta',
                            'compre-o-seu',
                          )
                        }
                      >
                        <BtnContainer>
                          Compre o seu
                          <img alt="Seta Botão" src={images.menuArrow} />
                        </BtnContainer>
                      </Button>
                    </NewCta>
                  </Details>
                </div>

                <Car
                  src={item.presentation.image}
                  alt={item.presentation.imageAlt}
                  title={item.presentation.title}
                />
              </BoxSection>
            </Content>
            <Model>
              <h4>
                VEJA TODAS AS FOTOS DO JEEP COMPASS SÉRIE S 4XE
              </h4>
              <img
                src={images.chevronBotton}
                alt="Seta para baixo"
              />
            </Model>
            <div>
              {/* {setTimeout(() => renderGallery(item), 1000)} */}
              {/* {renderGallery(item)} */}

              {/* <Tabs> */}
              <GalleryComponent
                data={item.gallery}
                itemFull={item}
                id={item.id}
                versionName={`${item.presentation.title}-${item.presentation.subtitle}`.toLowerCase()}
              />
            </div>
            {/* <Cta>
              <Button
                datalayer={'TodasAsVersoes_ClicouCTA'}
                datalayername={'monte-o-seu'}
                datalayerversionname={item.version
                  .replace(/\s/g, '-')
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLocaleLowerCase()}
                height={50}
                width={220}
                bg={Colors.primary}
                color={Colors.lightDark}
                onClick={() =>
                  DataLayer.push(
                    'CustomTrack',
                    'click',
                    'conteudo',
                    'fotos',
                    'cta',
                    `${
                      item.id === 5
                        ? 'monte-o-seu'
                        : 'monte-o-seu'
                    }`,
                  )
                }
                target={item.target ?? '_blank'}
                href={
                  item.id === 5
                    ? 'https://www.jeep.com.br/compass-4xe/monte.html'
                    : `https://www.jeep.com.br/compass/monte.html`
                }
              >
                Monte o seu
              </Button>
              <Button
                height={50}
                width={220}
                // to={
                //   item.id === 5
                //     ? 'https://www.jeep.com.br/compass-4xe/agende.html?utm_source=receptiva_compass&utm_medium=versoes_section_serie_s_4xe&utm_campaign=receptiva_compass'
                //     : `/agende${
                //         window.location?.search ??
                //         `?utm_source=receptiva_compass&utm_medium=versoes_section_${item.presentation.title
                //           .replace(/ /g, '_')
                //           .toLowerCase()}&utm_campaign=receptiva_compass`
                //       }`
                // }
                to={
                  item.id === 5
                    ? 'https://www.jeep.com.br/compass-4xe/agende.html'
                    : `https://www.jeep.com.br/compass/agende.html`
                }
                datalayer={'TodasAsVersoes_ClicouCTA'}
                datalayername={'compre-o-seu'}
                color={Colors.lightDark}
                bg={Colors.secondary}
                onClick={() =>
                  DataLayer.push(
                    'CustomTrack',
                    'click',
                    'conteudo',
                    'fotos',
                    'cta',
                    'compre-o-seu',
                  )
                }
              >
                Compre o seu
              </Button>
            </Cta> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default VersionsDesktop;
