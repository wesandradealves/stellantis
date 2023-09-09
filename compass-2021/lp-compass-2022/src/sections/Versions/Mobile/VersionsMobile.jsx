import { useLocation } from 'react-router-dom';
import React, {
  useContext,
  useEffect,
  useMemo,
  useState,
  useRef,
  useCallback,
} from 'react';
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
import { GalleryContext } from '../../../context/Gallery/GalleryContext';
import * as images from '../../../assets';
import {
  ArrowBox,
  BoxSection,
  Car,
  InfosWrraper,
  NewCta,
  Content,
  Gallery,
  Image,
  Details,
  BtnContainer,
  Infos,
  Model,
  Swiper,
  TitleSection,
  ImageMobile,
  GalleryContainer,
  SwiperThumbs,
  PrevArrow,
  NextArrow,
} from './styles';
import { Button } from '../../../components';
import { Colors } from '../../../styles';
import Magnifying from '../../../components/SvgComponents/Magnifying';

SwiperCore.use([Navigation, Pagination, A11y]);

const VersionsMobile = ({ data }) => {
  const [likes, setLikes] = useState([]);
  const [scrollTop, setScrollTop] = useState();
  const [onBlock, setOnBlock] = useState(false);
  const [afterBlock, setAfterBlock] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [apiData, setApiData] = useState({});
  const [integer, setInteger] = useState(0);
  const { setExpand, setVersion, setIndexPhoto } =
    useContext(GalleryContext);
  const [photoSource, setPhotoSource] = useState(
    data[0].gallery[0],
  );
  const [swiperIndex, setSwiperIndex] = useState(0);

  const [swiperInstance, setSwiperInstance] = useState();
  const [flagVersions, setflagVersions] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const jeepLikes = localStorage.getItem('@jeep:likes');

    if (jeepLikes) {
      setLikes(JSON.parse(jeepLikes));
    }
  }, []);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };

    window.addEventListener('scroll', onScroll);

    const boxVersions =
      document.querySelector('#versions').offsetTop;
    const heightVersions =
      document.querySelector('#versions').offsetHeight;

    const checkAfterBlock =
      scrollTop > boxVersions + heightVersions - 700;

    const checkOnBlock =
      scrollTop >= boxVersions - 30 && !checkAfterBlock;

    setOnBlock(checkOnBlock);
    setAfterBlock(checkAfterBlock);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  const handleLikes = value => {
    const checkItem = likes.some(like => like.id === value);

    if (!checkItem) {
      setLikes(old => [...old, { id: value }]);
    }

    localStorage.setItem('@jeep:likes', JSON.stringify(likes));
  };

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
    swiperInstance?.slideTo(flagVersions ? 8 : 8);
  }, [swiperInstance]);

  const handleSwiper = realIndex => {
    if (realIndex === 8) {
      setPhotoSource(data[7].gallery[0]);
    } else if (realIndex >= 0) {
      setPhotoSource(data[realIndex - 1].gallery[0]);
    }
  };

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div id="versoes">
      <TitleSection>
        <span>
          CONHEÇA A VERSÃO <br />
          DO JEEP COMPASS 4XE
        </span>
      </TitleSection>
      <Swiper
        ref={sliderRef}
        id="versions"
        loop
        pagination={{ clickable: false }}
        afterblock={afterBlock ? 'true' : 'false'}
      >
        {data.map((item, ind) => (
          <SwiperSlide key={`versions-mobile-swiper-${ind}`}>
            <Content
              key={item.id}
              width={item.presentation.width}
              bg={item.presentation.bg}
            >
              <BoxSection
                data-model={`${item.version}`.toLowerCase()}
              >
                <span
                  style={{ display: 'none' }}
                  className="titleSubtitle"
                >
                  {`${item.presentation.title}-${item.presentation.subtitle}`.toLowerCase()}
                </span>
                <p className="boxTlt">
                  JEEP COMPASS {item.presentation.year}
                </p>
                <h1>
                  {item.presentation.title}
                  {` ${item.presentation.subtitle}`}
                  <br />
                </h1>
              </BoxSection>

              <Car
                src={item.presentation.imageMobile}
                alt={item.presentation.imageAlt}
                title={item.presentation.title}
              />
            </Content>
            {/* <Cards>
              {item.details.map((detail, index) => (
                <Infos
                  key={`versions-mobile-info-detail${index}`}
                >
                  <img
                    src={detail.bgMobile}
                    alt={detail.imageAlt}
                    onClick={handleOpen}
                  />

                  <span>{detail.text}</span>
                </Infos>
              ))}
            </Cards> */}

            <Details>
              <InfosWrraper>
                {item.details.map((detail, index) => (
                  <Infos
                    key={`versions-desktop-info-detail${index}`}
                  >
                    <img
                      src={detail.bgMobile}
                      alt={detail.imageAlt}
                      title={detail.imageAlt}
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
                      `${
                        item.id === 5
                          ? 'monte-o-seu'
                          : 'monte-o-seu'
                      }`,
                    )
                  }
                  target={'_blank'}
                  href={
                    item.id === 5
                      ? 'https://www.jeep.com.br/compass-4xe/monte.html'
                      : `https://www.jeep.com.br/compass/monte.html`
                  }
                >
                  {/* <span className={styles.container}> */}
                  <BtnContainer>
                    Monte o seu
                    <img alt="seta" src={images.menuArrow} />
                  </BtnContainer>
                </Button>
                <Button
                  height={50}
                  width={220}
                  to={`https://www.jeep.com.br/compass-4xe/solicite.html`}
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
                    <img alt="seta" src={images.menuArrow} />
                  </BtnContainer>
                </Button>
              </NewCta>
            </Details>
            <Model hasSub={item.presentation.gallerySub}>
              <div>
                <h4 id="galeria">
                  <span>Todas as fotos do Compass</span>
                  <br />
                  {item.presentation.gallery}
                </h4>
              </div>
              <GalleryContainer>
                <Gallery>
                  <div className={'mainImage'}>
                    <button
                      className={'expandIcon'}
                      onClick={() => {
                        setIndexPhoto(photoSource.photoId);
                        setVersion(item);
                        setExpand(true);
                      }}
                    >
                      <Magnifying
                        className={'expandIconButton'}
                      />
                    </button>
                    <Image
                      key={`versions-mobile-photo-${photoSource.id}`}
                      mini={photoSource?.mini}
                      src={photoSource?.photosMobile}
                      alt={photoSource?.imageAlt}
                      onClick={() => {
                        setIndexPhoto(photoSource.photoId);
                        setVersion(item);
                        // setExpand(true);
                      }}
                    />
                  </div>
                </Gallery>
                <div className={'thumbs'}>
                  <SwiperThumbs
                    observer
                    observeParents
                    parallax
                    spaceBetween={10}
                    slidesPerView={4.7}
                    onSwiper={setSwiperInstance}
                  >
                    {item.gallery.map((photo, index) => (
                      <SwiperSlide
                        key={`gallery-thumb-${index}-${index}`}
                        className={'swiperSlideThumb'}
                      >
                        <button className={'swiperSlideButton'}>
                          <ImageMobile
                            className={
                              photoSource.photoId ===
                              photo.photoId
                                ? 'active'
                                : ''
                            }
                            key={`versions-mobile-photo-${index}`}
                            mini={photo.mini}
                            src={photo.photosMobile}
                            alt={photo.imageAlt}
                            onClick={() => {
                              setIndexPhoto(photo.photoId);
                              setVersion(item);
                              console.log(
                                'array da photo',
                                photo,
                              );
                              console.log(
                                'O photo source',
                                photoSource,
                              );
                              setPhotoSource(photo);
                            }}
                          />
                        </button>
                      </SwiperSlide>
                    ))}
                  </SwiperThumbs>
                </div>
              </GalleryContainer>
              {item.presentation.gallerySub && (
                <h5>{item.presentation.alert}</h5>
              )}
              {/* <Cta
                style={
                  item.presentation.gallerySub
                    ? { top: '-2rem' }
                    : { top: '3rem' }
                }
              >
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
                      : `https://www.jeep.com.br/compass/agende.html `
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
            </Model>
          </SwiperSlide>
        ))}
        <PrevArrow className="prev-arrow" onClick={handlePrev} />
        <NextArrow className="next-arrow" onClick={handleNext} />
      </Swiper>
    </div>
  );
};
export default VersionsMobile;
