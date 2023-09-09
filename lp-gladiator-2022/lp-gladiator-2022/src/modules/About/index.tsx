import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Swiper, {Navigation, Pagination, History, Keyboard} from "swiper";
import {useInView} from "react-intersection-observer";
import {SwiperButton, AboutItem, Button, Image} from "../../components";
import {Details} from "./content";
import {dataLayer} from "../../libs/gtm";
import {replaceUrl, getPath, slugify, getQueryParams} from "../../utils";
import {AboutProps, AboutItemProps, itemMenuProps} from "../../interfaces";
import {aboutData, menuData} from "../../api";
import icoArrowBottom from "../../assets/ico-arrow-bottom.svg";
import icoArrowBottomActive from "../../assets/ico-arrow-bottom-active.svg";
import styles from "./styles.module.scss";

const About = ({
                 setSwiperAbout,
                 accordionAbout,
                 setShowModalForm,
                 aboutActive,
               }: AboutProps) => {
  const [data, setData] = useState<AboutItemProps[]>(aboutData);
  const [dataMenu, setDataMenu] = useState<any>({});
  const [itemActive, setItemActive] = useState<number>(0);
  const [menuActive, setMenuActive] = useState<string>("");
  const [menuLabelActive, setMenuLabelActive] = useState<string>("");
  const [swiper, setSwiper] = useState<Swiper>();
  const [queryParams, setQueryParams] = useState<string>(getQueryParams());
  const [idxAbout, setIdxAbout] = useState<number>(0);

  const router = useRouter();
  const {ref, inView, entry} = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      const idx = aboutData.findIndex(
          (item) =>
              item.categorySlug === aboutActive[0] && item.slug === aboutActive[1]
      );
      if (idx >= 0) swiper?.slideTo(idx);
    }
  }, [aboutActive]);

  useEffect(() => {

    if (inView) {
      let items = {};
      if (accordionAbout && dataMenu) {
        items = dataMenu[accordionAbout].items;
      }
      handleSetAccordion(accordionAbout, items);
      setMenuLabelActive(accordionAbout);
    }
    setMenuLabelActive(accordionAbout);
  }, [accordionAbout]);

  useEffect(() => {
    const elSwiper = new Swiper(".swiper-about", {
      modules: [Navigation, Pagination, History, Keyboard],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // history: {
      //   key: "sobre",
      //   replaceState: true,
      //   root: "/",
      // },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      grabCursor: true,
      on: {
        slideChangeTransitionEnd: (e) => {
          setItemActive(e.activeIndex);
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
    setSwiperAbout(elSwiper);

    const groupMenu = groupDataByCategory(data);
    setDataMenu(groupMenu);
    setMenuLabelActive(data[0].categorySlug); //FUNCIONA SEM DEEP LINK
  }, []);

  useEffect(() => {
    if (inView) {
      const item = data[itemActive];
      if (item) {
        // setMenuActive(item.categorySlug);
        const url = String(`${item.categorySlug}/${item.slug}`);
        document
            .getElementById("wrapperAbout")
            ?.setAttribute(
                "data-history",
                url
            );
        replaceUrl(url, queryParams, router);
      }
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

  useEffect(() => {
    const activeRouter = getPath(router).split('/')[1];

    if (activeRouter === "performance") {
      setMenuLabelActive("performance");
    } else if (activeRouter === "versatilidade") {
      setMenuLabelActive("versatilidade");
    } else if (activeRouter === "capacidade-off-road") {
      setMenuLabelActive("capacidade-off-road");

    } else if (activeRouter === "tecnologias") {
      setMenuLabelActive("tecnologias");
    } else if (activeRouter === "conforto") {
      setMenuLabelActive("conforto");

    } else if (activeRouter === "seguranca") {
      setMenuLabelActive("seguranca");
    } else if (activeRouter === "acessorios") {
      setMenuLabelActive("acessorios");
    } else if (activeRouter === "servicos-garantia") {
      setMenuLabelActive("servicos-garantia");
    }


  }, [router]);

  const handleOnSetSwiper = (position: number) => {
    // console.log(data[position].categorySlug, position);
    if (data[position]?.categorySlug) {
      // setMenuActive(data[position].categorySlug);
      setMenuLabelActive(data[position].categorySlug);
    }
    swiper?.slideTo(position);
  };

  const handleSetAccordion = (accordion: string, item: any) => {
    if (accordion === menuActive) {
      setMenuActive("");
      return;
    }
    if (item.length > 0) {
      setTimeout(() => {
        document
            .getElementById("wrapperAbout")
            ?.setAttribute(
                "data-history",
                String(`${item[0].categorySlug}/${item[0].slug}`)
            );
        replaceUrl(String(entry?.target.getAttribute("data-history")), queryParams, router);
        document
            .getElementById(`accordion${accordion}`)
            ?.scrollIntoView({behavior: "smooth"});
      }, 0);
    }
    setMenuLabelActive(accordion);
    setMenuActive(accordion);
  };


  const groupDataByCategory = (data: AboutItemProps[]) => {
    return data.reduce((r: any, a: any) => {
      r[a.categorySlug] = r[a.categorySlug] || {};
      r[a.categorySlug]["title"] = a.category;
      r[a.categorySlug]["items"] = r[a.categorySlug]["items"] || [];
      r[a.categorySlug]["items"].push(a);
      return r;
    }, Object.create(null));
  };

  const handleDataLayer = ({...args}) => {
    dataLayer({
      path: getPath(router),
      event: "interaction",
      brand: "jeep",
      segment: "landing-page",
      product: "gladiator",
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
      <div id="sobre" className="root">
        <div
            ref={ref}
            id="wrapperAbout"
            data-history="performance/motor-36l"
            className={styles.container}
        >
          <div className="desktop desktop-mobile">
            <div className={`${styles.wrapper}`}>
              <h2>
                <span>SAIBA TUDO SOBRE</span><br/>
                O NOVO JEEP GLADIATOR
              </h2>

              <div className={`${styles.listGroup} wrapper-general`}>
                <button
                    className={`${menuLabelActive === "performance" && styles.active}`}
                    onClick={() => {
                      handleDataLayer({
                        element: slugify("Performance"),
                      });
                      handleOnSetSwiper(0);
                    }}
                >
                  Performance
                </button>
                <button
                    className={`${menuLabelActive === "versatilidade" && styles.active}`}
                    onClick={() => {
                      handleDataLayer({
                        element: slugify("Versatilidade"),
                      });
                      handleOnSetSwiper(2);
                    }}
                >
                  Versatilidade
                </button>
                <button
                    className={`${menuLabelActive === "capacidade-off-road" && styles.active}`}
                    onClick={() => {
                      handleDataLayer({
                        element: slugify("Capacidade Off Road"),
                      });
                      handleOnSetSwiper(9);
                    }}
                >
                  Capacidade <br/> off-road
                </button>
                <button
                    className={`${menuLabelActive === "tecnologias" && styles.active}`}
                    onClick={() => {
                      handleDataLayer({
                        element: slugify("Tecnologias"),
                      });
                      handleOnSetSwiper(15);
                    }}
                >
                  Tecnologias
                </button>
                <button
                    className={`${menuLabelActive === "conforto" && styles.active}`}
                    onClick={() => {
                      handleDataLayer({
                        element: slugify("Conforto"),
                      });
                      handleOnSetSwiper(20);
                    }}
                >
                  Conforto
                </button>
                <button
                    className={`${menuLabelActive === "seguranca" && styles.active}`}
                    onClick={() => {
                      handleDataLayer({
                        element: slugify("Segurança"),
                      });
                      handleOnSetSwiper(23);
                    }}
                >
                  Segurança
                </button>
                <button
                    className={`${menuLabelActive === "acessorios" && styles.active}`}
                    onClick={() => {
                      handleDataLayer({
                        element: slugify("Acessórios"),
                      });
                      handleOnSetSwiper(28);
                    }}
                >
                  Acessórios
                </button>
                <button
                    className={`${menuLabelActive === "servicos-garantia" && styles.active}`}
                    onClick={() => {
                      handleDataLayer({
                        element: slugify("servicos-garantia"),
                      });
                      handleOnSetSwiper(35);
                    }}
                >
                  Serviços <br/>e Garantia
                </button>
              </div>

              <div className="swiper swiper-about">
                <div className={`swiper-wrapper ${styles.swiperWrapper}`}>
                  {data &&
                  data.map((item: AboutItemProps, key: number) => {
                    return (
                        <div
                            className="swiper-slide"
                            data-history={`${item.categorySlug}-${item.slug}`}
                            key={`about-${item.categorySlug}-${item.slug}-${key}`}
                        >
                          <AboutItem data={item}/>
                        </div>
                    );
                  })}
                </div>
                <div className={styles.wrapperNavigation}>
                  <div className={styles.fake}>&nbsp;</div>
                  <div className={styles.contentNavigation}>
                    <div className={styles.navigation}>
                      {data &&
                      data.map((item: AboutItemProps, key: number) => {
                        if (item.categorySlug === menuActive) {
                          return (
                              <div
                                  className={`${styles.bullet} ${
                                      itemActive === key && styles.active
                                  }`}
                                  onClick={() => {
                                    handleOnSetSwiper(key);
                                    handleDataLayer({
                                      element: `item:${item.idx}`,
                                      elementCategory: "icone",
                                      pageSection: "tudo-sobre",
                                      pageSubsection: menuActive,
                                    });
                                  }}
                                  key={`navigation-about-${key}`}
                              >
                                &nbsp;
                              </div>
                          );
                        }
                      })}
                    </div>
                    <div className={styles.pagination}>
                      <div className={styles.wrapper}>
                        <SwiperButton kind="brown" isPrev onClick={async () => {
                          handleDataLayer({
                            element: "anterior",
                            elementCategory: "icone",
                            pageSubsection: data[idxAbout].categorySlug,
                          });
                        }}/>
                        <SwiperButton kind="brown" isNext onClick={() => {
                          handleDataLayer({
                            element: "proximo",
                            elementCategory: "icone",
                            pageSubsection: data[idxAbout].categorySlug,
                          });
                        }}/>
                      </div>
                      {/* {data[itemActive + 1] && (
                      <div className={styles.description}>
                        <h5>Próximo:</h5>
                        <p dangerouslySetInnerHTML={{ __html: data[itemActive + 1].title }} />
                      </div>
                    )} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile">
            <div className={styles.container}>
              <div className={styles.wrapper}>
                <h2>
                  <span>SAIBA TUDO SOBRE</span><br/>
                  O NOVO JEEP GLADIATOR
                </h2>
                <div className={styles.wrapperAccordion}>
                  {dataMenu &&
                  Object.keys(dataMenu).map((slug: string, key: number) => {
                    return (
                        <div
                            id={`accordion${slug}`}
                            className={styles.itemAccordion}
                            key={`accordion-mobile-${key}`}
                        >
                          <div
                              className={styles.header}
                              onClick={() => {
                                handleDataLayer({
                                  element: slugify(slug),
                                });

                                handleSetAccordion(slug, dataMenu[slug].items);
                              }}
                          >
                            <h5 className={`${menuActive === slug && styles.active}`}>
                              {dataMenu[slug].title}
                              <div
                                  className={`${styles.icon} ${
                                      menuActive === slug && styles.invert
                                  }`}
                              >
                                {menuActive === slug ? (
                                    <Image
                                        src={icoArrowBottomActive.src}
                                        alt=""
                                    />
                                ) : (
                                    <Image
                                        src={icoArrowBottom.src}
                                        alt=""
                                    />
                                )}

                              </div>
                            </h5>
                          </div>
                          {menuActive === slug && (
                              <div className={styles.content}>
                                <Details data={dataMenu[slug]}/>
                              </div>
                          )}
                        </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.listMenu}>
                {menuData &&
                menuData.map((item: itemMenuProps, key: number) => (
                    <div
                        onClick={() => {
                          handleDataLayer({
                            elementCategory: "cta",
                            interactionType: "clique",
                            element: slugify(item.title),
                            pageSection: "footer",
                            pageSubsection: "ctas",
                          });
                          item.form && setShowModalForm(true);
                        }}
                        key={`sidebar-cta-${key}`}
                    >
                      <Button to={item.link} target="_blank">
                        {item.title}
                      </Button>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
