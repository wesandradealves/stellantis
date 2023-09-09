import { FC } from 'react';
import {
  Conditional,
  ScrollToAnchor,
  SectionElement,
} from '@/components';
import { PRODUCT_NAME } from '@/constants';
import { PRODUCT_DETAILS_REF } from '@/mocks/menu';
import Tabs from './Tabs';
import styles from './ProductDetails.module.scss';
import SwipersDesktop from './SwipersDesktop';
import SwipersMobile from './SwipersMobile';
import { Chevron } from '@components/SvgComponents';

import { useMobxStores } from '@/store';
import RenegadeStore from '@store/RenegadeStore';
import { getProductDetails } from '@/mocks/menu';
import productDetails, {
  allSlides,
} from '@/mocks/productDetails';

const ProductDetails: FC = () => {
  const store: RenegadeStore = useMobxStores();

  const setReference = () => {
    const reference = getProductDetails(productDetails).find(
      (p) => p.id === `data-${store.currentTab?.id}`,
    );
    const index = !store.isDesktop
      ? store.productDetailsMobileSwiperController[
          store.selectedDetailTab
        ]?.activeIndex
      : store.productDetailsSwiperController?.activeIndex;
    const suffix = allSlides[index ?? 0].slug;
    reference &&
      store.currentTab?.parentSlug &&
      store.setCurrentlyVisibleNav(reference, suffix);
  };
  return (
    <SectionElement
      id="ProductDetails"
      navReference={PRODUCT_DETAILS_REF}
      heightBehaviour="soft"
      noPadding
      overrideReference
      className={styles.container}
      slugPrefixes={productDetails.map((p) => p.slug)}
      onSlugSuffix={(slug) => {
        if (slug) {
          const slide = allSlides.find((s) => s.slug === slug);
          const index = allSlides.findIndex(
            (s) => s.slug === slug,
          );
          if (
            slide &&
            store.productDetailsSwiperController?.params
          ) {
            store.productDetailsSwiperController.slideTo(
              index >= 0 ? index : 0,
            );
          }
          if (
            slide &&
            store.productDetailsMobileSwiperController?.params
          ) {
          }
        }
      }}
      onVisibilityChange={(visible) => {
        if (visible) {
          setReference();
        }
      }}
    >
      <ScrollToAnchor
        reference={PRODUCT_DETAILS_REF}
        className={styles.scrollCta}
        pageSubsection="galeria"
        title={`TUDO SOBRE O NOVO ${PRODUCT_NAME}`}
      >
        <div className={styles.scrollCta}>
          <h2>
            TUDO SOBRE O <strong>NOVO JEEP RENEGADE</strong>
          </h2>
          <Chevron />
        </div>
      </ScrollToAnchor>

      <Conditional
        desktop={
          <>
            <Tabs />
            <SwipersDesktop setReference={setReference} />
          </>
        }
        mobile={<SwipersMobile setReference={setReference} />}
      />
    </SectionElement>
  );
};

export default ProductDetails;
