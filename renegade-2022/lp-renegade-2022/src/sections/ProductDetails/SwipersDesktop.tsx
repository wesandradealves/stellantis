import productDetails, {
  allSlides,
  ProductTab,
  ProductTabSlide,
} from '@/mocks/productDetails';
import { useMobxStores } from '@/store';
import RenegadeStore from '@/store/RenegadeStore';
import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './SwipersDesktop.module.scss';
import { observer } from 'mobx-react-lite';
import {
  ArrowButton,
  CTAButton,
  ResponsiveLazyImage,
  VimeoEmbed,
} from '@/components';
import scssStyles from '@/utils/scssStyles';
import DataLayer from '@/utils/DataLayer';
import getClientXFromDifferentEvents from '@/utils/getClientXFromDifferentEvents';

interface SlideProps {
  slide: ProductTabSlide;
  tab: ProductTab;
  fileUrl?: string;
}

const pageSubsection = 'tudo-sobre';

const Slide: FC<SlideProps> = observer(({ slide, fileUrl }) => {
  const store: RenegadeStore = useMobxStores();
  return (
    <div className={styles.slideContainer}>
      {slide.vimeoId?.desktop ? (
        <div className={styles.videoWrapper}>
          <VimeoEmbed
            id={slide.vimeoId.desktop}
            title={slide.title}
          />
        </div>
      ) : (
        <ResponsiveLazyImage
          alt={slide.alt}
          title={slide.title}
          src={slide.image.fullPath}
          src2={slide.image.fullPath2x}
          src3={slide.image.fullPath3x}
          containerClassName={styles.slideImageContainer}
          className={styles.slideImage}
        />
      )}
      <div className={styles.slideDetails}>
        {slide.highLightedFirst ? (
          <h2>
            <strong>{slide.titleFirst} </strong>
            {slide.breakTitle ? <br /> : ' '}

            {slide.titleSecond}
          </h2>
        ) : (
          <h2>
            {slide.titleFirst}

            {slide.breakTitle ? <br /> : ''}
            {slide.title === 'Para-Barro' ? '' : ' '}

            <strong>{slide.titleSecond}</strong>
          </h2>
        )}

        <div className={styles.slideDescription}>
          {slide.descriptionDesktop}
          {!!fileUrl && (
            <CTAButton
              href={fileUrl}
              title="Baixe o catálogo"
              handleClick={() => {
                DataLayer.clickEvent({
                  element: 'Baixe o catálogo',
                  elementCategory: 'botao',
                  pageSection: pageSubsection,
                  pageSubsection:
                    productDetails.find(
                      (c) => c.id === store.selectedDetailTab,
                    )?.slug ?? ''
                });
              }}
              handleAuxClick={() => {
                DataLayer.clickEvent({
                  element: 'Baixe o catálogo',
                  elementCategory: 'botao',
                  pageSection: pageSubsection,
                  pageSubsection:
                    productDetails.find(
                      (c) => c.id === store.selectedDetailTab,
                    )?.slug ?? ''
                });
              }}
              className={styles.downloadButton}
              text="Baixe o catálogo"
              download
              target={'_blank'}
            />
          )}
        </div>
      </div>
    </div>
  );
});

const SwipersDesktop: FC<{
  setReference: () => void;
}> = observer(({ setReference }) => {
  const store: RenegadeStore = useMobxStores();

  const [, rerender] = useState(false);

  const [touchLocation, setTouchLocation] =
    useState<PointerEvent['clientX']>();
  const nextSlide = !store.productDetailsSwiperController
    ? undefined
    : allSlides[
    store.productDetailsSwiperController.activeIndex + 1
    ];
  /*
const previousSlide = !store.productDetailsSwiperController
? undefined
: allSlides[
    store.productDetailsSwiperController.activeIndex - 1
  ];
  */

  return (
    <div className={styles.container}>
      <Swiper
        keyboard
        observer
        observeParents
        parallax
        onSwiper={(e) =>
          store.setProductDetailsSwiperController(e)
        }
        controller={
          store.productDetailsSwiperController
            ? { control: store.productDetailsSwiperController }
            : undefined
        }
        spaceBetween={100}
        onSlideChange={(swiper) => {
          const index = swiper.activeIndex;
          const tab = productDetails.find(
            (p) => p.id === allSlides[index].tabId,
          );
          if (tab) {
            store.setSelectedDetailTab(tab);
            setReference();
          }
          rerender((r) => !r);
        }}
        onTouchStart={(_, event) => {
          const clientX = getClientXFromDifferentEvents(event);
          setTouchLocation(clientX);
        }}
        onTouchEnd={(_, event) => {
          const clientX = getClientXFromDifferentEvents(event);
          if (
            clientX > (touchLocation ?? 0) + 30 ||
            clientX < (touchLocation ?? 0) - 30
          ) {
            DataLayer.swipeEvent({
              element:
                (touchLocation ?? 0) > clientX
                  ? 'proximo'
                  : 'anterior',
              elementCategory: 'slide',
              pageSection: pageSubsection,
              pageSubsection:
                productDetails.find(
                  (c) => c.id === store.selectedDetailTab,
                )?.slug ?? '',
            });
          }
        }}
      >
        {productDetails.map((tab) =>
          tab.children.map((slide) => (
            <SwiperSlide
              key={`detail-swi-desktop-${tab.id}-${slide.id}`}
            >
              <Slide
                tab={tab}
                slide={{ ...slide, tabId: tab.id }}
                fileUrl={tab.fileUrl}
              />
            </SwiperSlide>
          )),
        )}
      </Swiper>
      <div className={styles.controls}>
        {store.pageX >= 1200 && (
          <div className={styles.bullets}>
            {allSlides
              .filter((t) => t.tabId === store.currentTab?.id)
              .map((c, index) => {
                return (
                  <button
                    key={`bullet-sw-desktop-${c.id}`}
                    title={c.title}
                    aria-label='bullet'
                    className={scssStyles([
                      styles.bullet,
                      store.productDetailsSwiperController
                        ?.activeIndex === c.index
                        ? styles.active
                        : '',
                    ])}
                    onClick={() => {
                      DataLayer.clickEvent({
                        element: `item-${index + 1}`,
                        elementCategory: 'icone',
                        pageSection: pageSubsection,

                        pageSubsection:
                          productDetails.find(
                            (c) =>
                              c.id === store.selectedDetailTab,
                          )?.slug ?? '',
                      });
                      if (
                        typeof c.index !== 'undefined' &&
                        store.productDetailsSwiperController
                      ) {
                        store.productDetailsSwiperController?.slideTo(
                          c.index,
                        );
                      }
                    }}
                  >
                    <span />
                  </button>
                );
              })}
          </div>
        )}
        <div className={styles.arrows}>
          <ArrowButton
            previous
            large
            title={`Anterior: ${allSlides[
              (store.productDetailsSwiperController
                ?.activeIndex ?? 0) <= 0
                ? allSlides.length - 1
                : (store.productDetailsSwiperController
                  ?.activeIndex ?? 0) - 1
            ]?.title ?? ''
              }`}
            disabled={
              (store.productDetailsSwiperController
                ?.activeIndex ?? 0) -
              1 <
              0
            }
            handleClick={() => {
              DataLayer.clickEvent({
                element: 'anterior',
                elementCategory: 'icone',
                pageSection: pageSubsection,
                pageSubsection:
                  productDetails.find(
                    (c) => c.id === store.selectedDetailTab,
                  )?.slug ?? '',
              });
              store.productDetailsSwiperController?.slidePrev();
            }}
          />
          <ArrowButton
            large
            title={`Próximo: ${allSlides[
              (store.productDetailsSwiperController
                ?.activeIndex ?? 0) >=
                allSlides.length - 1
                ? 0
                : (store.productDetailsSwiperController
                  ?.activeIndex ?? 0) + 1
            ]?.title ?? ''
              }`}
            disabled={
              (store.productDetailsSwiperController
                ?.activeIndex ?? allSlides.length) >=
              allSlides.length - 1
            }
            handleClick={() => {
              DataLayer.clickEvent({
                element: 'proximo',
                elementCategory: 'icone',
                pageSection: pageSubsection,
                //pageSubsection: nextSlide?.title ?? '',
                pageSubsection:
                  productDetails.find(
                    (c) => c.id === store.selectedDetailTab,
                  )?.slug ?? '',
              });
              store.productDetailsSwiperController?.slideNext();
            }}
          />
          {!!nextSlide?.title && (
            <div className={styles.nextTab}>
              <strong>Próximo</strong>
              <p>{nextSlide?.title}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default SwipersDesktop;
