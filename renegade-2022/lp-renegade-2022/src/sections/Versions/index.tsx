import React, { FC, useEffect, useRef, useState } from 'react';
import ExpandedGallery from '../Gallery/ExpandedGallery';
import {
  ArrowButton,
  Conditional,
  CTAButton,
  ResponsiveLazyImage,
  SectionElement,
} from '@/components';
import styles from './Versions.module.scss';
import { metaTags } from '@/constants';
import {
  COMPRE_TITLE,
  dataMenuLabel,
  links,
  MONTE_TITLE,
} from '@/mocks/menu';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, Keyboard, Thumbs } from 'swiper';
import {
  backgroundVersions,
  brand,
  versions,
  versionsDetails,
  versionsThumbs,
} from '@/assets';
import { dataVersions } from '@/mocks/versions';
import scssStyles from '@/utils/scssStyles';
import { IVersion } from '@/models';
import { useOnScreen } from '@/hooks';
import RenegadeStore from '@/store/RenegadeStore';
import { useMobxStores } from '@/store';
import { observer } from 'mobx-react-lite';
import DataLayer from '@/utils/DataLayer';
import getClientXFromDifferentEvents from '@/utils/getClientXFromDifferentEvents';
import { AnimatePresence, motion } from 'framer-motion';
import Galleries from '../Galleries';

SwiperCore.use([A11y, Keyboard, Thumbs]);

const reference = dataMenuLabel().find(
  (c) => c.slug === 'versoes',
);

interface VersionSlideProps {
  version: IVersion;
  load: boolean;
}

const pageSubsection = 'versoes';

const Button: FC<{
  version: IVersion;
  index: number;
  currentIndex: number;
  swiperController: SwiperCore | undefined;
  animateStartNumber: number;
  animateEndNumber: number;
}> = observer(
  ({
    version,
    index,
    currentIndex,
    swiperController,
    animateStartNumber,
    animateEndNumber,
  }) => {
    const [pRef, setPRef] = useState<HTMLButtonElement | null>(
      null,
    );

    return (
      <button
        key={`thumb-version-${version.id}`}
        title={version.name}
        className={scssStyles([
          currentIndex === index ? styles.active : '',
        ])}
        ref={(ref) => {
          setPRef(ref);
        }}
        onClick={() => {
          DataLayer.clickEvent({
            element: version.name,
            elementCategory: 'card',
            pageSection: 'conteudo',
            pageSubsection,
          });
          swiperController?.slideTo(index);
        }}
      >
        {currentIndex === index && (
          <>
            <Conditional notOn={'mobile'}>
              <motion.div
                animate={{ x: 0 }}
                initial={{ x: animateStartNumber }}
                exit={{ x: animateEndNumber }}
                transition={{ duration: 0.15 }}
                layout
                style={{
                  width: (pRef?.clientWidth ?? 30) - 35,
                  height: (pRef?.clientWidth ?? 30) / 1.4 - 35,
                }}
                className={styles.activeBg}
              />
            </Conditional>
            <Conditional notOn={'desktop'}>
              <motion.div
                animate={{ x: 0 }}
                initial={{ x: animateStartNumber }}
                exit={{ x: animateEndNumber }}
                transition={{ duration: 0.15 }}
                layout
                style={{
                  width: (pRef?.clientWidth ?? 30) - 1,
                  height: (pRef?.clientWidth ?? 30) / 1.4 - 1,
                }}
                className={styles.activeBg}
              />
            </Conditional>
          </>
        )}

        <ResponsiveLazyImage
          alt={version.fullName}
          containerClassName={styles.thumbImageContainer}
          src={versionsThumbs()[version.id].fullPath}
          onLoad={() => {
            setPRef(null);
          }}
        />
        <p>
          <span
            className={styles.outline}
            style={{
              backgroundColor: version.hex,
            }}
          />
          <span className={styles.name}>{version.short}</span>
        </p>
      </button>
    );
  },
);

const VersionSlide: FC<VersionSlideProps> = observer(
  ({ version, load }) => {
    const [isOnScreen, setIsOnScreen] = useState(false);
    // const [refRight, setRefRight] = useState<HTMLPictureElement | null>(null);
    const [, updater] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const refRight = useRef<HTMLDivElement | null>(null);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
      //RERENDER TO UPDATE ELEMENTS POSITIONS
      const updateDom = () => {
        updater((u) => !u);
      };
      window?.addEventListener('resize', updateDom);

      return () => {
        window?.removeEventListener('resize', updateDom);
      };
    }, []);

    return (
      <div
        className={scssStyles([
          styles.aligner,
          isVisible ? styles.isActive : '',
        ])}
        ref={ref}
      >
        <div className={styles.row}>
          <Conditional notOn={'desktop'}>
            <div className={styles.buttonHolder}>
              <CTAButton
                text={COMPRE_TITLE}
                className={styles.cta}
                title={COMPRE_TITLE}
                href={links.reserve}
                handleClick={() => {
                  DataLayer.clickEvent({
                    element: `${COMPRE_TITLE}: ${version.name}`,
                    elementCategory: 'cta',
                    pageSection: 'conteudo',
                    pageSubsection,
                  });
                }}
                handleAuxClick={() => {
                  DataLayer.clickEvent({
                    element: `${COMPRE_TITLE}:${version.name}`,
                    elementCategory: 'cta',
                    pageSection: 'conteudo',
                    pageSubsection,
                  });
                }}
              />
              <CTAButton
                text={MONTE_TITLE}
                className={styles.cta}
                title={MONTE_TITLE}
                href={links.monte}
                handleClick={() => {
                  DataLayer.clickEvent({
                    element: `${MONTE_TITLE}: ${version.name}`,
                    elementCategory: 'cta',
                    pageSection: 'conteudo',
                    pageSubsection,
                  });
                }}
                handleAuxClick={() => {
                  DataLayer.clickEvent({
                    element: `${MONTE_TITLE}:${version.name}`,
                    elementCategory: 'cta',
                    pageSection: 'conteudo',
                    pageSubsection,
                  });
                }}
              />
            </div>

            <div className={styles.details}>
              {version.details.map((detail, index) => (
                <div
                  key={`detail-${version.id}-${index}`}
                  className={styles.cardsDetails}
                >
                  <div className={styles.cardsImg}>
                    <img
                      alt={detail.titleDescription}
                      src={
                        versionsDetails(detail.photo)[version.id]
                          .fullPath
                      }
                    />
                  </div>
                  <div className={styles.cardsText}>
                    <p>{detail.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </Conditional>

          <div className={styles.carInfo}>
            <ResponsiveLazyImage
              className={scssStyles([
                styles.productImage,
                isOnScreen ? styles.isVisible : '',
              ])}
              containerClassName={styles.productImageContainer}
              alt={version.fullName}
              forceLoad={load}
              width="100%"
              onScreen={(b) => setIsOnScreen(b)}
              src={versions()[version.id].fullPath}
              src2={versions()[version.id].fullPath2x}
              src3={versions()[version.id].fullPath3x}
            />
          </div>

          <div className={styles.right} ref={refRight}>
            <div className={styles.rightBox}>
              <Conditional notOn={'mobile'}>
                <div className={styles.versionText}>
                  <div className={styles.versionTextlogo}>
                    <img
                      src={brand.logoProduct}
                      alt={metaTags.brandName}
                      className={styles.brand}
                    />
                    <h2>RENEGADE</h2>
                  </div>
                  <div>
                    <h2 className={styles.versionTextName}>
                      {version.name.toUpperCase()}
                    </h2>
                  </div>
                  <div>
                    {/*<h2 className={styles.subText}>&quot;LIBERDADE PARA VER {<br/>}*/}
                    {/*  <strong>O MUNDO DO TOPO&quot;</strong>*/}
                    {/*</h2>*/}
                  </div>
                </div>
                <div className={styles.details}>
                  {version.details.map((detail, index) => (
                    <div
                      key={`detail-${detail.title}-${index}`}
                      className={styles.cardsDetails}
                    >
                      <div className={styles.cardsImg}>
                        <img
                          alt={`detalhe ${detail.title}`}
                          src={
                            versionsDetails(detail.photo)[
                              version.id
                            ].fullPath
                          }
                        />
                      </div>
                      <div className={styles.cardsText}>
                        <p>{detail.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Conditional>

              <Conditional notOn={'desktop'}>
                <div className={styles.versionText}>
                  <div className={styles.versionTextlogo}>
                    <img
                      src={brand.logoProduct}
                      alt={metaTags.brandName}
                      className={styles.brand}
                    />
                    <h2>RENEGADE</h2>
                  </div>
                  <h2 className={styles.versionTextName}>
                    {version.name.toUpperCase()}
                  </h2>
                </div>

                {/*<div className={styles.subTextMobile}>*/}
                {/*  <p>&quot;LIBERDADE PARA VER <strong>O MUNDO DO TOPO&quot;</strong></p>*/}
                {/*</div>*/}
              </Conditional>

              <Conditional notOn="mobile">
                <div className={styles.buttonHolder}>
                  <CTAButton
                    text={COMPRE_TITLE}
                    className={styles.cta}
                    title={COMPRE_TITLE}
                    href={links.reserveVersion}
                    handleClick={() => {
                      DataLayer.clickEvent({
                        element: `${COMPRE_TITLE}: ${version.name}`,
                        elementCategory: 'cta',
                        pageSection: 'conteudo',
                        pageSubsection,
                      });
                    }}
                    handleAuxClick={() => {
                      DataLayer.clickEvent({
                        element: `${COMPRE_TITLE}:${version.name}`,
                        elementCategory: 'cta',
                        pageSection: 'conteudo',
                        pageSubsection,
                      });
                    }}
                  />
                  <CTAButton
                    text={MONTE_TITLE}
                    className={styles.cta}
                    title={MONTE_TITLE}
                    href={links.monte}
                    handleClick={() => {
                      DataLayer.clickEvent({
                        element: `${MONTE_TITLE}: ${version.name}`,
                        elementCategory: 'cta',
                        pageSection: 'conteudo',
                        pageSubsection,
                      });
                    }}
                    handleAuxClick={() => {
                      DataLayer.clickEvent({
                        element: `${MONTE_TITLE}:${version.name}`,
                        elementCategory: 'cta',
                        pageSection: 'conteudo',
                        pageSubsection,
                      });
                    }}
                  />
                </div>
              </Conditional>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

const Versions: FC = observer(() => {
  const [swiperController, setSwiperController] =
    useState<SwiperCore>();

  const [thumbSwiper, setThumbSwiper] = useState<SwiperCore>();
  const [touchLocation, setTouchLocation] =
    useState<PointerEvent['clientX']>();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadAll, setLoadAll] = useState(false);
  const store: RenegadeStore = useMobxStores();
  const [animateNumber, setAnimateNumber] = useState<number>(0);
  const [animateEndNumber, setAnimateEndNumber] =
    useState<number>(0);

  if (store.galleryExpanded === true) {
    swiperController?.keyboard.disable();
  } else {
    swiperController?.keyboard.enable();
  }

  const previous = () => {
    if (currentIndex === 0) {
      swiperController?.slideTo(dataVersions().length - 1);
    } else {
      swiperController?.slidePrev();
    }
  };

  const next = () => {
    if (currentIndex >= dataVersions().length - 1) {
      swiperController?.slideTo(0);
    } else {
      swiperController?.slideNext();
    }
  };

  useEffect(() => {
    store.setCurrentVersion(dataVersions()[currentIndex ?? 0]);
  }, [currentIndex, store]);

  useEffect(() => {
    if (
      thumbSwiper &&
      swiperController &&
      typeof thumbSwiper?.activeIndex === 'number' &&
      typeof swiperController?.activeIndex === 'number'
    ) {
      thumbSwiper.slideTo(swiperController.activeIndex);
    }
  }, [
    thumbSwiper,
    thumbSwiper?.activeIndex,
    swiperController,
    swiperController?.activeIndex,
  ]);

  return (
    <>
      <SectionElement
        id="Versions"
        noPadding
        onVisibilityChange={(load) => {
          if (load) {
            const suffix =
              dataVersions()[swiperController?.activeIndex ?? 0]
                ?.slug;
            if (
              reference &&
              store.currentTab?.parentSlug &&
              suffix
            ) {
              store.setCurrentlyVisibleNav(reference, suffix);
            }
          }
          setLoadAll(load);
        }}
        overrideReference
        onSlugSuffix={(slug) => {
          store.setVersionSlugSuffix(slug);
          if (swiperController?.params) {
            const index = dataVersions().findIndex(
              (c) => c.slug === slug,
            );
            swiperController.slideTo(index >= 0 ? index : 0);
          }
        }}
        className={styles.container}
        navReference={reference}
        style={{ backgroundImage: backgroundVersions }}
      >
        <div className={styles.brandImg}>
          <img
            src={brand.brandImg}
            alt={metaTags.brandName}
            className={styles.brand}
          />
        </div>

        <ResponsiveLazyImage
          fullBg
          alt={metaTags.brandName ?? ''}
          title={metaTags.brandName}
          src={backgroundVersions}
          src2={backgroundVersions}
          src3={backgroundVersions}
          containerClassName={styles.headerBg}
        />

        <div className={styles.swiperWrapper}>
          <Swiper
            keyboard
            observer
            observeParents
            parallax
            thumbs={{ multipleActiveThumbs: true }}
            onSwiper={(e) => setSwiperController(e)}
            onSlideChange={(swp) => {
              if (swp.activeIndex < currentIndex) {
                setAnimateNumber(100);
                setAnimateEndNumber(-100);
              } else {
                setAnimateNumber(-100);
                setAnimateEndNumber(100);
              }
              setCurrentIndex(swp.activeIndex);
            }}
            onTouchStart={(_, event) => {
              const clientX =
                getClientXFromDifferentEvents(event);
              setTouchLocation(clientX);
            }}
            onTouchEnd={(_, event) => {
              const clientX =
                getClientXFromDifferentEvents(event);
              DataLayer.swipeEvent({
                element:
                  (touchLocation ?? 0) > clientX
                    ? 'proximo'
                    : 'anterior',
                elementCategory: 'slide',
                pageSection: 'conteudo',
                pageSubsection,
              });
            }}
            controller={
              swiperController
                ? { control: swiperController }
                : undefined
            }
          >
            {dataVersions().map((version) => (
              <SwiperSlide
                key={`versions-view-slide-${version.id}`}
                className={styles.swiperSlide}
              >
                <VersionSlide load={loadAll} version={version} />
              </SwiperSlide>
            ))}
          </Swiper>

          <Conditional notOn="desktop">
            <ArrowButton
              previous
              className={styles.previous}
              handleClick={() => {
                DataLayer.clickEvent({
                  element: 'anterior',
                  elementCategory: 'icone',
                  pageSection: 'conteudo',
                  pageSubsection,
                });
                previous();
              }}
              title="Próxima foto"
            />
            <ArrowButton
              className={styles.next}
              handleClick={() => {
                DataLayer.clickEvent({
                  element: 'proximo',
                  elementCategory: 'icone',
                  pageSection: 'conteudo',
                  pageSubsection,
                });
                next();
              }}
              title="Foto anterior"
            />
          </Conditional>

          <Conditional notOn="mobile">
            <ArrowButton
              previous
              className={styles.previous}
              handleClick={() => {
                DataLayer.clickEvent({
                  element: 'anterior',
                  elementCategory: 'icone',
                  pageSection: 'conteudo',
                  pageSubsection,
                });
                previous();
              }}
              title="Próxima foto"
            />
            <ArrowButton
              className={styles.next}
              handleClick={() => {
                DataLayer.clickEvent({
                  element: 'proximo',
                  elementCategory: 'icone',
                  pageSection: 'conteudo',
                  pageSubsection,
                });
                next();
              }}
              title="Foto anterior"
            />
          </Conditional>
        </div>

        <div className={styles.cardFooter}>
          <div
            className={scssStyles([
              styles.thumbs,
              store.pageX <= 992 ? styles.mobile : '',
            ])}
          >
            <Conditional condition={store.pageX > 992}>
              <AnimatePresence>
                {dataVersions().map((version, index) => (
                  <Button
                    key={`version-${version.id}`}
                    currentIndex={currentIndex}
                    swiperController={swiperController}
                    version={version}
                    index={index}
                    animateStartNumber={animateNumber}
                    animateEndNumber={animateEndNumber}
                  />
                ))}
              </AnimatePresence>
            </Conditional>
            <Conditional condition={store.pageX <= 992}>
              <Swiper
                observer
                observeParents
                parallax
                onSwiper={(e) => setThumbSwiper(e)}
                controller={
                  thumbSwiper
                    ? { control: thumbSwiper }
                    : undefined
                }
                centeredSlides
                // SLIDES PER VIEW:
                // Calculation based on window width minus padding
                // divided by the desired card (slide) width
                slidesPerView={Math.ceil(
                  (store.pageX - 100) / 220,
                )}
                spaceBetween={10}
              >
                {dataVersions()
                  .map((version, index) => (
                    <Button
                      key={`version-${version.id}`}
                      currentIndex={currentIndex}
                      swiperController={swiperController}
                      version={version}
                      index={index}
                      animateStartNumber={animateNumber}
                      animateEndNumber={animateEndNumber}
                    />
                  ))
                  .map((button) => (
                    <SwiperSlide
                      key={`${button.key}-mobile`}
                      className={styles.swiperSlideMobile}
                    >
                      {button}
                    </SwiperSlide>
                  ))}
              </Swiper>
            </Conditional>
          </div>
        </div>
      </SectionElement>
      <Galleries
        versionSwiperController={swiperController}
        activeIndex={currentIndex}
      />

      <AnimatePresence>
        {store.galleryExpanded && <ExpandedGallery />}
      </AnimatePresence>
    </>
  );
});

export default Versions;
