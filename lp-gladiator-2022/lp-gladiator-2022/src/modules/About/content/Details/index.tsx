import React, { useEffect, useState } from "react";
import Swiper, { Navigation, Pagination, History } from "swiper";
import { useRouter } from "next/router";

import { SwiperButton, Button, Image } from "../../../../components";

import { dataLayer } from "../../../../libs/gtm";
import { replaceUrl, getQueryParams, slugify, getPath } from "../../../../utils";

import styles from "./styles.module.scss";

const Details = ({ data }: any) => {
  const [swiper, setSwiper] = useState<Swiper>();
  const [itemActive, setItemActive] = useState<number>(0);
  const [queryParams, setQueryParams] = useState<string>(getQueryParams());
  const [idxAbout, setIdxAbout] = useState<number>(0);

  const router = useRouter();
  const swiperClass = `swiper-about-${slugify(data.title)}`;

  useEffect(() => {
    const elSwiper = new Swiper(`.${swiperClass}`, {
      modules: [Navigation, Pagination, History],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      history: {
        replaceState: true,
        root: "/",
      },
      on: {
        slideChangeTransitionEnd: (e) => {
          setItemActive(e.activeIndex);
          let item = data.items[e.activeIndex];
          replaceUrl(String(`${item.categorySlug}/${item.slug}`), queryParams, router);
          document
            .getElementById("wrapperAbout")
            ?.setAttribute(
              "data-history",
              String(`${item.categorySlug}/${item.slug}`)
            );
        },
        slideNextTransitionEnd: (e) => {
          setIdxAbout(e.activeIndex);
        },
        slidePrevTransitionEnd: (e) => {
          setIdxAbout(e.activeIndex);
        },
      },
    });
    setSwiper(elSwiper);
  }, []);

  const handleOnSetSwiper = (position: number) => {
    swiper?.slideTo(position);
  };

  const handleDataLayer = ({ ...args }) => {
    dataLayer({
      path: getPath(router),
      event: "interaction",
      brand: "fiat",
      segment: "landing-page",
      product: "argo",
      elementCategory: "botao",
      interactionType: "clique",
      pageSection: "conteudo",
      pageSubsection: "tudo-sobre",
      selectedValue: null,
      element: "compre-o-seu",
      ...args,
    });
  };

  return (
    <div className={styles.container}>
      <div className={`swiper ${swiperClass}`}>
        <div className="swiper-wrapper">
          {data.items.map((item: any, key: number) => (
            <div
              className="swiper-slide"
              data-history={item.slug}
              key={`carousel-item-${key}`}
            >
              <div className={styles.image}>
                <Image src={item.image} alt={item.title} />
              </div>
              <div className={styles.content}>
              <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
                <p>{item.description}</p>
              </div>
              <div className={styles.wrapperButton}>
                {item.link && <Button to={item.link}>{item.labelLink}</Button>}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.swiperWrapperNavigation}>
          <SwiperButton kind="brown" isPrev className={styles.swiperButton} onClick={() => {
            handleDataLayer({
              element: "anterior",
              elementCategory: "icone",
              pageSubsection: data.items[idxAbout].categorySlug,
            })
          }} />
          <div className={`${styles.swiperPagination}`}>
            {data.items.map((item: any, key: number) => (
              <div
                onClick={() => {
                  handleOnSetSwiper(key);
                  handleDataLayer({
                    element: `item:${item.idx}`,
                    elementCategory: "icone",
                    pageSection: "tudo-sobre",
                    pageSubsection: slugify(data.title),
                  });
                }}
                className={`${styles.swiperPaginationBullet} ${
                  itemActive === key && styles.active
                }`}
                key={`swiper-pagination-bullet-${key}`}
              >
                &nbsp;
              </div>
            ))}
          </div>
          <SwiperButton kind="brown" isNext className={styles.swiperButton} onClick={() => {
            handleDataLayer({
              element: "proximo",
              elementCategory: "icone",
              pageSubsection: data.items[idxAbout].categorySlug,
            });
          }} />
        </div>
      </div>
    </div>
  );
};

export default Details;
