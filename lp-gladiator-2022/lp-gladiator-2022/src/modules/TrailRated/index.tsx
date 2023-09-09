import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Swiper, { Navigation, Pagination, History, Keyboard } from "swiper";
import { useInView } from "react-intersection-observer";

import { Button, SwiperButton, TrailRatedItem } from "../../components";
import { Modal } from "../";

import { dataLayer } from "../../libs/gtm";
import { replaceUrl, getPath, slugify, getQueryParams, handleChangeSection } from "../../utils";
import { AboutItemProps, TrailRatedProps } from "../../interfaces";

import { trailRatedData } from "../../api";

import styles from "./styles.module.scss";

const TrailRated = ({ showModalForm, setShowModalForm }: TrailRatedProps) => {
  const [data, setData] = useState<AboutItemProps[]>(trailRatedData);
  const [itemActive, setItemActive] = useState<number>(0);
  const [menuActive, setMenuActive] = useState<string>("design");
  const [swiper, setSwiper] = useState<Swiper>();
  const [queryParams, setQueryParams] = useState<string>(getQueryParams());

  const router = useRouter();
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    const elSwiper = new Swiper(".swiper-trail-rated", {
      modules: [Navigation, Pagination, History, Keyboard],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      history: {
        key: "trail-rated",
        replaceState: true,
        root: "/",
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      grabCursor: true,
      on: {
        slideChangeTransitionEnd: (e) => {
          setItemActive(e.activeIndex);
        },
      },
    });
    setSwiper(elSwiper);
  }, []);

  useEffect(() => {
    let item = data[itemActive];
    if (item) {
      const url = String(`${item.slug}`);
      document
        .getElementById("wrapperTrailRated")
        ?.setAttribute(
          "data-history",
          url
        );
      replaceUrl(url, queryParams, router);
    }
  }, [itemActive]);

  useEffect(() => {
    if (inView) {
      replaceUrl(
        String(entry?.target.getAttribute("data-history")),
        queryParams,
        router
      );
    }
  }, [inView]);

  const handleOnSetSwiper = (position: number) => {
    swiper?.slideTo(position);
  };

  const handleDataLayer = ({ ...args }) => {
    dataLayer({
      path: getPath(router),
      event: "interaction",
      brand: "jeep",
      segment: "landing-page",
      product: "gladiator",
      elementCategory: "botao",
      interactionType: "clique",
      pageSection: "conteudo",
      pageSubsection: "trail-rated",
      selectedValue: null,
      element: "",
      ...args,
    });
  };

  return (
    <>
    <div id="trailRated" className="root">
      <div
        ref={ref}
        id="wrapperTrailRated"
        data-history="trail-rated/primeira-picape-trailrated"
        className={styles.container}
      >
        <div className={`${styles.wrapper}`}>
          <div className="swiper swiper-trail-rated">
            <div className={styles.wrapperNavigation}>
              <div className={styles.contentNavigation}>
                <div className={styles.navigation}>
                  {data &&
                    data.map((item: AboutItemProps, key: number) => (
                      <div
                        className={`${styles.bullet} ${
                          itemActive === key && styles.active
                        }`}
                        onClick={() => {
                          handleOnSetSwiper(key);
                          handleDataLayer({
                            element: `item:${key}`,
                            elementCategory: "icone",
                            pageSection: "trail-rated",
                            pageSubsection: menuActive,
                          });
                        }}
                        key={`navigation-trail-rated-${key}`}
                      >
                        &nbsp;
                      </div>
                    ))}
                </div>
                <div className={styles.pagination}>
                  <div className={styles.wrapper}>
                    <SwiperButton isPrev onClick={() => {
                      handleDataLayer({
                        element: "anterior",
                      });
                    }}/>
                    <SwiperButton isNext onClick={() => {
                      handleDataLayer({
                        element: "proximo",
                      });
                    }} />
                  </div>
                </div>
              </div>
            </div>
            <div className={`swiper-wrapper ${styles.swiperWrapper}`}>
              {data &&
                data.map((item: AboutItemProps, key: number) => {
                  return (
                    <div
                      className="swiper-slide"
                      data-history={`${item.categorySlug}-${item.slug}`}
                      key={`about-${item.categorySlug}-${item.slug}-${key}`}
                    >
                      <TrailRatedItem data={item} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      {showModalForm && <Modal setShowModal={setShowModalForm} />}
    </div>
    <div className={styles.moreInfo}>
      <div className={styles.wrapperMoreInfo}>
        <h3> Quer saber mais sobre a autêntica<br /> capacidade Off-Road da Jeep?</h3>
        <div className={styles.containerButton}>
          <Button to="https://www.jeep.com.br/trail-rated.html" target="_blank" onClick={() => { handleDataLayer({
            element: 'conheca-trail-rated',
            elementCategory: 'cta'
          })}}>
            <span className={styles.labelButton}>Conheça o <strong>Trail Rated</strong></span>
          </Button>
        </div>
      </div>
    </div>
    </>
  );
};

export default TrailRated;
