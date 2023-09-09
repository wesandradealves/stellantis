import React, { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import AccordionItem from './AccordionItem';
import {
  BoxSection,
  Container,
  Swiper,
  Design,
  Infos,
  TitleBox,
  Background,
} from './styles';
import { DataLayer } from '../Track/DataLayer/DataLayer';
import Button from '../Button';
import { Colors } from '../../styles';

SwiperCore.use([Navigation, Pagination, A11y]);

const Accordion = ({ data, color, children }) => {
  const [itemOpen, setItemOpen] = useState(null);

  const toggleItemOpen = brand => {
    setItemOpen(itemOpen === brand ? null : brand);
  };

  return (
    <Container color={color} id="all-compass">
      {children}
      <TitleBox>
        <h2 className="tltAcordion">Tudo do Jeep Compass 4XE</h2>
      </TitleBox>

      {/* DO NOT USE "INDEX with "X" */}
      {data.map((item, indx) => (
        <AccordionItem
          title={item.productDetailsName}
          key={`accordion-item${indx}-${item.brand}`}
          isActive={itemOpen === item.brand}
          handleOnClick={() => {
            toggleItemOpen(item.brand);
            DataLayer.push(
              'TudoDoCompass_ClicouFeature',
              item.brand.toLowerCase(),
            );
          }}
        >
          <Swiper
            navigation
            pagination={{ clickable: true }}
            allowTouchMove={false}
            onSlideNextTransitionEnd={e =>
              DataLayer.push(
                'Conteudo_ClicouNextAllCompass',
                item.brand.toLowerCase(),
                item.data[e.activeIndex - 1].title
                  .replace(/\s/g, '-')
                  .toLowerCase(),
              )
            }
            onSlidePrevTransitionEnd={e =>
              DataLayer.push(
                'Conteudo_ClicouPrevAllCompass',
                item.brand.toLowerCase(),
                item.data[e.activeIndex + 1].title
                  .replace(/\s/g, '-')
                  .toLowerCase(),
              )
            }
            // prettier-ignore
            onSlideChange={(parameter) => {
              const isopen = $('img[alt="logo-menu"]').parent().first().css( "left" ) === "0px";
                // prettier-ignore
              // eslint-disable-next-line func-names
              $($(".swiper-container")[3]).find($('.swiper-wrapper')).find(".swiper-slide").each(function(index ) {
                if ($(this).hasClass("swiper-slide-active")){
                  const elementSwipper = $($(".swiper-container")[3]).find($('.swiper-wrapper'))
                  let dest = 0;
                  if (!isopen){
                    dest =  - (window.screen.width * parameter.activeIndex);
                  }
                  // prettier-ignore
                  /* eslint-disable */
                  elementSwipper.css('transform', 'translateX(' + dest + 'px)'); // eslint-disable-line;
                }
              });
            }}
          >
            {item.data.map((content, index) => (
              <SwiperSlide
                key={`accordion-swiperslide${index}-${content.title}`}
              >
                <BoxSection>
                  <Background />
                  <Design>
                    <img
                      src={content.imageMobile}
                      alt="Design"
                    />
                  </Design>
                  <Infos>
                    <h2>{content.title}</h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: content.description,
                      }}
                    />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: content.description2,
                      }}
                    />
                    {content.legend && (
                      <p className="legend-text-box">
                        {content.legend}
                      </p>
                    )}
                    {item.id === 8 ? (
                      <Button
                        color={Colors.light}
                        width={280}
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
                        {item.id === 9 && (
                          <Button
                            color={Colors.light}
                            width={280}
                            height={35}
                            fs={16}
                            key={item.id}
                            to={content.link}
                            jc={'space-between'}
                            target={'_blank'}
                          >
                            <p style={{ color: 'black' }}>
                              {item.ctaTitle}
                            </p>

                            <MdKeyboardArrowRight
                              style={{
                                width: '25px',
                                height: '30px',
                                marginRight: '10px',
                              }}
                            />
                          </Button>
                        )}
                      </>
                    )}
                  </Infos>
                </BoxSection>
              </SwiperSlide>
            ))}
          </Swiper>
        </AccordionItem>
      ))}
    </Container>
  );
};

export default Accordion;
