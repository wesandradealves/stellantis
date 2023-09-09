/* eslint-disable one-var */
import React, { useEffect, useState } from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
} from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import $ from 'jquery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { DataLayer } from '../../components/Track/DataLayer/DataLayer';

import * as images from '../../assets';
import {
  Swiper,
  Image,
  Brand,
  Jeep,
  Title,
  New,
  Infos,
  Container,
  ArrowBox,
  ChevronDown,
  ArrowText,
} from './styles';
import SwitchMotorVersion from '../../components/SwitchMotorVersion';
import { Colors } from '../../styles';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function Hero({ data, open }) {
  const [belowHero, setBelowHero] = useState(false);
  const duration = 0.4;
  gsap.registerPlugin(Flip);

  const switchFixedRelative = () => {
    // now make our changes
    const element = document.querySelector(
      '#switch-motor-version',
    );
    const state = Flip.getState(element);

    if (element) {
      element.classList.remove('fixed');
      // Flip.from(state, {
      //   duration: 0.2,
      //   ease: 'power2.in',
      // });
    }
  };
  const switchRelativeToFixed = () => {
    // now make our changes
    const element = document.querySelector(
      '#switch-motor-version',
    );
    const state = Flip.getState(element);

    if (element) {
      element.classList.add('fixed');
      // "FLIP" animate from that previous state.
      Flip.from(state, {
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  window.addEventListener(
    'scroll',
    e => {
      const hero = document.querySelector('#compass-2022');
      const rect = hero.getBoundingClientRect().bottom;

      if (rect < 10) {
        setBelowHero(true);
        switchRelativeToFixed();
      } else {
        switchFixedRelative();
        setBelowHero(false);

        window.removeEventListener('scroll');
      }
    },
    false,
  );
  return (
    <Container>
      <nav></nav>
      <Swiper
        id="compass-2022"
        navigation
        simulateTouch={false}
        allowTouchMove={false}
        pagination={{ clickable: true }}
        // prettier-ignore
        onSlideChange={(parameter) => {
          let i = 1;
          const isopen = $('img[alt="logo-menu"]').parent().first().css("left") === "0px";
          // prettier-ignore
          // eslint-disable-next-line func-names
          $($(".swiper-container")[0]).find($('.swiper-wrapper')).find(".swiper-slide").each(function (index) {
            if ($(this).hasClass("swiper-slide-active")) {
              const elementSwipper = $($(".swiper-container")[0]).find($('.swiper-wrapper'))
              let dest = - document.body.clientWidth * (parameter.activeIndex) + (188 * parameter.activeIndex)
              if (!isopen) {
                dest = - document.body.clientWidth * parameter.activeIndex
              }
              // prettier-ignore
              /* eslint-disable */
              elementSwipper.css('transform', 'translateX(' + dest + 'px)'); // eslint-disable-line;
            }
            i++;
          });

        }}
      >
        {/* <Brand src={images.LogoJeep2x} alt="logo" /> */}
        {data.map(item => (
          <SwiperSlide key={`hero-swiper-${item.id}`}>
            <Image
              src={item.image}
              data-src={item.image}
              alt={item.imageAlt}
              title={item.head.title}
              className="swipe-image lazyload"
              onClick={() => {
                DataLayer.push('Menu_ClicouAbrir');
              }}
            />

            {item.id === 1 ? (
              <New>
                <Title></Title>
              </New>
            ) : (
              <Infos>
                <span
                  style={{ display: 'none' }}
                  className="titleSubtitle"
                >
                  {`${item.head.title}`.toLowerCase()}
                </span>
                <h1>{item.head.title}</h1>
                <p className="descriptionSubtitle">
                  {item.head.subtitle}
                </p>
                {!!item?.description && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.description.text,
                    }}
                  />
                )}
              </Infos>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <SwitchMotorVersion belowHero={belowHero} />
      <ArrowBox>
        <ArrowText>
          Navegue para saber mais sobre o Jeep Compass 4xe
        </ArrowText>
        <ChevronDown color={Colors.primary} />
      </ArrowBox>
    </Container>
  );
}
