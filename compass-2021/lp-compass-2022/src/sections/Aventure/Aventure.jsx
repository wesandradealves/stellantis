import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { Img } from '../../components';
import { Container, Box, Swiper, ButtonCta } from './styles';
import { DataLayer } from '../../components/Track/DataLayer/DataLayer';
import Button from '../../components/Button';
import { Colors } from '../../styles';

SwiperCore.use([Navigation, Pagination, A11y]);

const Aventure = ({ data, show }) => {
  const seletor = $('#all-compass h3').text();
  return (
    <Swiper
      show={show}
      navigation
      slidesPerView={1}
      allowTouchMove={false}
      onSlideNextTransitionEnd={e =>
        DataLayer.push(
          'Conteudo_ClicouNextAllCompass',
          data[0].index.toLowerCase(),
          $(
            `#all-compass .swiper-container-initialized .swiper-wrapper`,
          )[0]
            .children[e.activeIndex - 1].querySelector('h3')
            .innerText.replace(/\s/g, '-')
            .toLocaleLowerCase(),
        )
      }
      onSlidePrevTransitionEnd={e =>
        DataLayer.push(
          'Conteudo_ClicouPrevAllCompass',
          data[0].index.toLowerCase(),
          $(
            `#all-compass .swiper-container-initialized .swiper-wrapper`,
          )[0]
            .children[e.activeIndex + 1].querySelector('h3')
            .innerText.replace(/\s/g, '-')
            .toLocaleLowerCase(),
        )
      }
      // prettier-ignore
      onSlideChange={(parameter) => {
      let iLast = 1;
      const isopen = $('img[alt="logo-menu"]').parent().first().css( "left" ) === "0px";
        // prettier-ignore
      // eslint-disable-next-line func-names
      $($(".swiper-container")[3]).find($('.swiper-wrapper')).find(".swiper-slide").each(function(index ) {
      if ($(this).hasClass("swiper-slide-active")){
        const elementSwipper = $($(".swiper-container")[3]).find($('.swiper-wrapper'))
        let dest = ''
        if (!isopen){
          dest =  - (window.screen.width * iLast) + (188*iLast)
        }
        // prettier-ignore
        /* eslint-disable */
        elementSwipper.css('transform', 'translateX(' + dest + 'px)'); // eslint-disable-line;
      }
      iLast++;
      });
    }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={`aventure-slide-${index}`}>
          <Container key={item.id}>
            <Box>
              <Img
                imageAlt={item.imageAlt}
                title={item.imageTitle}
                lg={item.image}
              />

              <div className="infoBox">
                <h2>{item.index}</h2>

                <h3 className="tlt" id={item.index}>
                  {`${item.title}
                  ${item.subtitle}`}
                </h3>
                {!!item?.description && (
                  <>
                    <p
                      className="infoBoxText"
                      dangerouslySetInnerHTML={{
                        __html: item?.description,
                      }}
                    />

                    {item.legend && <p className='legend-text-box'>{item.legend}</p>}
                  </>
                )}

                {item.index === 'Acessórios' ? (
                  <Button
                    color={Colors.light}
                    width={220}
                    height={35}
                    fs={16}
                    key={item.id}
                    to={item.link}
                    download
                    jc={'space-between'}
                  >
                    {item.ctaTitle}

                    <MdKeyboardArrowRight
                      style={{
                        width: '25px',
                        height: '30px',
                        marginRight: '10px',
                      }}
                    />
                  </Button>
                ) : (
                  <>
                    {/*{item.index === 'Serviços' && (*/}
                    {/*  <Button*/}
                    {/*    color={Colors.light}*/}
                    {/*    width={220}*/}
                    {/*    height={35}*/}
                    {/*    fs={16}*/}
                    {/*    key={item.id}*/}
                    {/*    to={item.link}*/}
                    {/*    jc={'space-between'}*/}
                    {/*    target={'_blank'}*/}
                    {/*  >*/}
                    {/*    {item.ctaTitle}*/}

                    {/*    <MdKeyboardArrowRight*/}
                    {/*      style={{*/}
                    {/*        width: '25px',*/}
                    {/*        height: '30px',*/}
                    {/*        marginRight: '10px',*/}
                    {/*      }}*/}
                    {/*    />*/}
                    {/*  </Button>*/}
                    {/*)}*/}
                  </>
                )}
              </div>
            </Box>
          </Container>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Aventure;
