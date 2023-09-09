import { ReserveCTA as ReserveAsset, brand } from '@/assets';
import { metaTags } from '@/constants';

import {
  Conditional,
  ResponsiveLazyImage,
  SectionElement,
} from '@/components';
import { PRODUCT_NAME } from '@/constants';
import { dataMenuLabel } from '@/mocks/menu';
import scssStyles from '@/utils/scssStyles';
import { FC, useCallback } from 'react';
import styles from './ReserveCTA.module.scss';

const ReserveCTA: FC = () => {
  const content = useCallback(() => {
    return (
      <>
        <div
          className={scssStyles(['bringToFront', styles.spacer])}
        >
          <Conditional notOn="desktop">
            <div className={styles.mobileContent}>
              <div className={styles.versionText}>
                <div className={styles.versionTextlogo}>
                  <img
                    src={brand.logoProduct}
                    alt={metaTags.brandName}
                    className={styles.brand}
                  />
                  <h2>RENEGADE</h2>
                </div>
                <div className={styles.boxTlt}>
                  <p>SÉRIE S</p>
                </div>
              </div>
              <div className={styles.contentImg}>
                <ResponsiveLazyImage
                  alt={PRODUCT_NAME}
                  src={ReserveAsset.cardImage.fullPath}
                  src2={ReserveAsset.cardImage.fullPath2x}
                  src3={ReserveAsset.cardImage.fullPath3x}
                  containerClassName={styles.reserveImg}
                />
              </div>

              <div>
                <p
                  className={scssStyles([
                    styles.headline,
                    styles.noTopMargin,
                  ])}
                >
                  Esportividade <br />
                  <strong>e segurança na medida</strong>
                </p>
                <p className={styles.txtMobile}>
                  Com o Jeep Renegade série S, você tem o melhor companheiro para qualquer aventura: além do visual sofisticado, ele é equipado com a maior roda do segmento e o motor mais potente da categoria, tudo isso com a tração 4x4 e itens de capacidade off-road exclusivos no segmento . O conforto e a segurança ficam por conta das tecnologias de direção autônomas e a segurança reforçada com  7 airbags.
                </p>
              </div>
            </div>
          </Conditional>

          <Conditional notOn="mobile">
            <div className={styles.leftArea}>
              <div>
                <div className={styles.versionText}>
                  <div className={styles.versionTextlogo}>
                    <img
                      src={brand.logoProduct}
                      alt={metaTags.brandName}
                      className={styles.brand}
                    />
                    <h2>RENEGADE</h2>
                  </div>
                  <div className={styles.boxTlt}>
                    <p className={styles.subTlt}>SÉRIE S</p>
                    <p>
                      Esportividade <br />
                      <strong>e segurança na medida</strong>
                    </p>
                  </div>
                </div>
              </div>
              <p>
                Com o Jeep Renegade série S, você tem o melhor companheiro para qualquer aventura: além do visual sofisticado, ele é equipado com a maior roda do segmento e o motor mais potente da categoria, tudo isso com a tração 4x4 e itens de capacidade off-road exclusivos no segmento . O conforto e a segurança ficam por conta das tecnologias de direção autônomas e a segurança reforçada com  7 airbags.
              </p>
            </div>
            <div className={styles.rightArea}>
              <div>
                <ResponsiveLazyImage
                  alt={PRODUCT_NAME}
                  src={ReserveAsset.cardImage.fullPath}
                  src2={ReserveAsset.cardImage.fullPath2x}
                  src3={ReserveAsset.cardImage.fullPath3x}
                  containerClassName={styles.reserveImg}
                />
              </div>
            </div>
          </Conditional>
        </div>
      </>
    );
  }, []);

  return (
    <SectionElement
      id="ReserveCTA"
      className={styles.container}
      noPadding
      navReference={dataMenuLabel().find(
        (c) => c.slug === 'serie-s',
      )}
      heightBehaviour="soft"
    >
      <Conditional notOn="mobile">
        <ResponsiveLazyImage
          fullBg
          alt={PRODUCT_NAME}
          src={ReserveAsset.backgroundImage.fullPath2x}
          src2={ReserveAsset.backgroundImage.fullPath3x}
        />
        <>{content()}</>
      </Conditional>

      <Conditional notOn="desktop">
        <ResponsiveLazyImage
          containerClassName={styles.mobileBackground}
          fullBg
          alt={PRODUCT_NAME}
          src={ReserveAsset.backgroundImageMobile.fullPath}
          src2={ReserveAsset.backgroundImageMobile.fullPath2x}
        />
        <div className="">{content()}</div>
      </Conditional>
    </SectionElement>
  );
};

export default ReserveCTA;
