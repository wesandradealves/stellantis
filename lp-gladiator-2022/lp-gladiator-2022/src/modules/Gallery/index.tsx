import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import { SwiperButton, Image } from "../../components";
import { ModalGallery } from "../";
import { dataLayer } from "../../libs/gtm";
import { replaceUrl, getPath, getQueryParams } from "../../utils";
import { itemGalleryProps } from "../../interfaces";
import { galleryData } from "../../api";
import coverPreview from "../../assets/img-cover-preview.png";
import icoPreview from "../../assets/ico-preview.png";
import icoGallery from "../../assets/ico-gallery.png";
import styles from "./styles.module.scss";
import Swiper, { Navigation, Pagination } from "swiper";

const Gallery = () => {
  const [data, setData] = useState(galleryData);
  const [preview, setPreview] = useState("");
  const [title, setTitle] = useState("");
  const [alt, setAlt] = useState("");
  const [swiper, setSwiper] = useState<Swiper>();
  const [bulletActive, setBulletActive] = useState(0);
  const [col1, setCol1] = useState<itemGalleryProps[]>([]);
  const [col2, setCol2] = useState<itemGalleryProps[]>([]);
  const [showModalGallery, setShowModalGallery] = useState<boolean>(false);
  const [queryParams, setQueryParams] = useState<string>(getQueryParams());

  const router = useRouter();
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    const elSwiper : Swiper = new Swiper(".swiper-gallery", {
      modules: [Navigation, Pagination],
      // modules: [Navigation, Pagination, History],
      navigation: {
        nextEl: ".swiper-gallery-button-next",
        prevEl: ".swiper-gallery-button-prev",
      },
      // history: {
      //   key: "galeria",
      //   replaceState: true,
      //   root: "/",
      // },
      preloadImages: true,
      lazy: true,
      centeredSlides: true,
      slidesPerView: 2.3,
      on: {
        click: (e) => {
          setBulletActive(e.activeIndex);
          // data.length > 0 && changeImageGallery(data[e.activeIndex]["preview"], e.activeIndex);
        },
        slideChange: (e) => {
          console.log(e);
        },
        slideChangeTransitionEnd: (e) => {
          setBulletActive(e.activeIndex);
          // data.length > 0 && changeImageGallery(data[e.activeIndex]["preview"], e.activeIndex);
        },
      },
    });
    setSwiper(elSwiper);
    // setPreview(data[0]["preview"]);
    // setTitle(data[0]['title_seo']);
    // setTitle(data[0]['alt_seo']);
    // normalizeGallery(data);
  }, []);

  useEffect(() => {
    if (inView) {
      replaceUrl(String(entry?.target.getAttribute("data-history")), queryParams, router);
    }
  }, [inView]);

  // useEffect(() => {
  //   swiper?.update();
  //   swiper?.slideTo(position);
  // }, [swiper]);

  useEffect(() => {
    if (inView) {
      setPreview(data[bulletActive].preview);
      setTitle(data[bulletActive].title_seo);
      setAlt(data[bulletActive].alt_seo);
      normalizeGallery(data);
    }

  }, [bulletActive, inView]);

  const changeImageGallery = (img: string, key?: number) => {
    // console.log(img);
    if(img){
      setPreview(img);
    }
    if(key) {
      setBulletActive(key)
    }
  };

  const normalizeGallery = (gallery: itemGalleryProps[]) => {
    const col1: itemGalleryProps[] = [];
    const col2: itemGalleryProps[] = [];
    gallery &&
      gallery.map((item: any, key: number) => {
        if (key % 2 === 1) {
          col2.push({ idx: key, ...item });
        } else {
          col1.push({ idx: key, ...item });
        }
      });
    setCol1(col1);
    setCol2(col2);
  };

  const handleDataLayer = ({ ...args }) => {
    dataLayer({
      path: getPath(router),
      event: "interaction",
      brand: "jeep",
      segment: "landing-page",
      product: "gladiator",
      elementCategory: "icone",
      interactionType: "clique",
      pageSection: "conteudo",
      pageSubsection: "galeria",
      selectedValue: null,
      ...args,
    });
  };

  return (
    <>
      <div id="galeria" className="root">
        <div
          id="wrapperGallery"
          ref={ref}
          data-history="/galeria"
          className={styles.container}
        >
          <div className={styles.wrapper}>
            <div className={styles.contentTitle}>
              <h2 className={styles.title}>
                Galeria
              </h2>
              <p className={styles.subTitle}>
                AVENTURA EM TODOS OS ÂNGULOS
                <span className={styles.ico}>
                  <Image src={icoGallery.src} alt="Galeria" />
                </span>
              </p>
            </div>
            <div className={`${styles.gallery} wrapper-general`}>
              <div className={styles.preload} onClick={() => {
                    handleDataLayer({
                      element: `amplia-foto:${bulletActive + 1}`,
                    });
                    document.body.style.overflow = "hidden";
                    setShowModalGallery(true);
                  }}>
                  <button
                    onClick={() => {
                      handleDataLayer({
                        element: `amplia-foto:${bulletActive + 1}`,
                      });
                      document.body.style.overflow = "hidden";
                      setShowModalGallery(true);
                    }}
                  >
                    <Image src={icoPreview.src} alt="Ampliar" />
                  </button>
                <div
                  className={styles.preview}
                  style={{
                    backgroundImage: `url(${preview})`,
                  }}
                >
                  <Image
                    src={coverPreview.src}
                    alt={alt}
                    title={title}
                    className={`${styles.preload} swiper-lazy-preloader`}
                  />
                </div>
              </div>
              <div className={`${styles.desktop} ${styles.listThumb}`}>
                <div>
                  {col1.map((item: itemGalleryProps, key: number) => (
                    <ThumbDesktop
                      item={item}
                      onClick={(e) => {
                        replaceUrl(
                          String(e.currentTarget.getAttribute("data-history")),
                          queryParams,
                          router
                        );
                        if (item.idx) {
                          handleDataLayer({
                            element: `foto:${item.idx + 1}`,
                            elementCategory: "image",
                          });
                        }
                        changeImageGallery(item.preview, item.idx);
                      }}
                      bulletActive={bulletActive}
                      key={`gallery-left-${key}`}
                    />
                  ))}
                </div>
                <div>
                  {col2.map((item: itemGalleryProps, key: number) => (
                    <ThumbDesktop
                      item={item}
                      onClick={(e) => {
                        replaceUrl(
                          String(e.currentTarget.getAttribute("data-history")),
                          queryParams,
                          router
                        );
                        if (item.idx) {
                          handleDataLayer({
                            element: `foto:${item.idx + 1}`,
                            elementCategory: "image",
                          });
                        }
                        changeImageGallery(item.preview, item.idx);
                      }}
                      bulletActive={bulletActive}
                      key={`gallery-left-${key}`}
                    />
                  ))}
                </div>
              </div>

              <div className={`mobile ${styles.listThumbMobile}`} >
                <div className="swiper swiper-gallery">
                  <div className="swiper-wrapper">
                    {data &&
                      data.map((item: itemGalleryProps, key: any) => (
                        <div
                          className="swiper-slide"
                          data-history={item.slug || 'xxx'}
                          key={`version-thumb-${key}`}
                        >
                          <div
                            className={`${styles.thumb} ${
                              key === bulletActive ? styles.active : ""
                            }`}
                            onClick={() => {
                              handleDataLayer({
                                element: `item:${key + 1}`,
                              });
                              changeImageGallery(item.preview, key);
                            }}
                            key={`gallery-left-${key}`}
                          >
                            <img src={item.mobile} alt={item.alt_seo} title={item.title_seo} />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className={styles.swiperWrapperNavigation}>
                  <SwiperButton isPrev className={`swiper-gallery-button-prev ${styles.swiperButton}`} onClick={() => {
                    handleDataLayer({
                      element: "anterior",
                    })}} 
                  />
                  <div className={styles.swiperPagination}>
                    {data &&
                      data.map((item: itemGalleryProps, key: any) => (
                        <span
                          className={key === bulletActive ? styles.active : ""}
                          onClick={() => {
                            handleDataLayer({
                              element: `item:${key + 1}`,
                            });
                            changeImageGallery(item.preview, key);
                          }}
                          key={`version-thumb-bullet-${key}`}
                        >
                          &nbsp;
                        </span>
                      ))}
                  </div>
                  <SwiperButton isNext className={`swiper-gallery-button-next ${styles.swiperButton}`} onClick={() => {
                    handleDataLayer({
                      element: "proximo",
                    })
                  }} />
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>

      {showModalGallery && (
        <ModalGallery
          data={data}
          position={bulletActive}
          setShowModalGallery={setShowModalGallery}
          // gallerySwiper={swiper}
          setBulletActive={setBulletActive}
        />
      )}
    </>
  );
};

export default Gallery;

interface ThumbDesktopProps {
  item: itemGalleryProps;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  bulletActive: number;
}

const ThumbDesktop = ({ item, onClick, bulletActive }: ThumbDesktopProps) => (
  <div
    className={`${styles.thumb} ${item.idx === bulletActive && styles.active}`}
    onClick={onClick}
    data-history={`/galeria/${item.slug}`}
    style={{ backgroundImage: `url(${item.thumb})` }}
  >
    <img src={`/assets/images/gallery/cover-gallery-${item.idx}.png`} alt={item.alt_seo || ''} title={item.title_seo || ''} />
  </div>
);
