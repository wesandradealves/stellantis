import { FC, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './index.module.scss';
import getClientXFromDifferentEvents from '@/utils/getClientXFromDifferentEvents';
import DataLayer from '@/utils/DataLayer';
import { dataVersions } from '@/mocks/versions';
import { Gallery } from '..';
import SwiperCore from 'swiper';
import { observer } from 'mobx-react-lite';
import { SectionElement } from '@/components';
import { dataMenuLabel } from '@/mocks/menu';
import RenegadeStore from '@/store/RenegadeStore';
import { useMobxStores } from '@/store';
import {
  gallery as galleryData,
  GalleryAsset,
} from '@/assets/gallery';

interface IGalleries {
  versionSwiperController: SwiperCore | null | undefined;
  activeIndex: number;
}

const reference = dataMenuLabel().find(
  (c) => c.slug === 'fotos',
);

const pageSubsection = 'fotos';

const Galleries: FC<IGalleries> = observer(
  ({ versionSwiperController, activeIndex }) => {
    const [touchLocation, setTouchLocation] =
      useState<PointerEvent['clientX']>();
    const [gallerySwiperController, setGallerySwiperController] =
      useState<SwiperCore | null>(null);
    const store: RenegadeStore = useMobxStores();
    const versionSlug = store.currentVersion.slug;
    const gallery: GalleryAsset[] = galleryData()[
      versionSlug
    ]?.map((g) => ({
      ...g,
      id: `gallery-image-${versionSlug}-${g.slug}`,
    }));

    const setReference = (c?: GalleryAsset) => {
      const suffix = c
        ? c.slug
        : gallery.find(
            (g) =>
              g.slug ===
              store.selectedGalleryImage[versionSlug]?.slug,
          )?.slug;
      reference &&
        store.setCurrentlyVisibleNav(
          reference,
          `${versionSlug}-${suffix}`,
        );
    };

    useEffect(() => {
      gallerySwiperController?.slideTo(activeIndex);
    }, [activeIndex, gallerySwiperController]);

    return (
      <SectionElement
        id="Gallery"
        className={styles.container}
        noPadding
        overrideReference
        heightBehaviour="unset"
        navReference={reference}
        onSlugSuffix={(slug) => {
          if (slug) {
            const asset = gallery.find((c) => c.slug === slug);
            if (asset) {
              store.setSelectedGalleryImage(versionSlug, asset);
            }
          }
        }}
        onVisibilityChange={(visible) => {
          if (visible) {
            setReference();
          }
        }}
      >
        <Swiper
          onSwiper={(e) => setGallerySwiperController(e)}
          controller={
            gallerySwiperController
              ? { control: gallerySwiperController }
              : undefined
          }
          spaceBetween={100}
          className={styles.swiperSlide}
          observer
          observeParents
          parallax
          onSlideChange={(e) => {
            versionSwiperController?.slideTo(e.activeIndex);
          }}
          onTouchStart={(_, event) => {
            const clientX = getClientXFromDifferentEvents(event);
            setTouchLocation(clientX);
          }}
          onTouchEnd={(_, event) => {
            const clientX = getClientXFromDifferentEvents(event);
            DataLayer.swipeEvent({
              element:
                (touchLocation ?? 0) > clientX
                  ? 'proximo'
                  : 'anterior',
              elementCategory: 'imagem',
              pageSection: 'conteudo',
              pageSubsection: 'fiat-connect-me',
            });
          }}
        >
          {dataVersions().map((version) => (
            <SwiperSlide key={`gallery-${version.id}`}>
              <Gallery
                pageSubsection={pageSubsection}
                setReference={setReference}
                versionId={version.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionElement>
    );
  },
);

export default Galleries;
