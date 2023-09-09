import { brand, ui } from '@/assets';
import { Conditional, CTAButton } from '@/components';
import { metaTags } from '@/constants';
import { dataSocial } from '@/mocks/footer';
import { dataMenuButtons } from '@/mocks/menu';
import DataLayer from '@/utils/DataLayer';
import { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  const BrandImage = (
    <img
      src={brand.logoFooter}
      alt={metaTags.brandName}
      className={styles.brand}
    />
  );
  return (
    <footer className={styles.container}>
      {!!dataMenuButtons.length && (
        <Conditional notOn="desktop">
          <div className={styles.conditional}>
            <div className={styles.buttonsHolder}>
              {dataMenuButtons.map((item) => {
                const tracking = () => {
                  DataLayer.clickEvent({
                    element: item.label,
                    elementCategory: 'cta',
                    pageSection: 'footer',
                    pageSubsection: 'ctas',
                  });
                };
                return (
                  <CTAButton
                    key={`footer-${item.id}`}
                    href={item.url}
                    className={styles.menuButton}
                    text={item.label}
                    title={item.label}
                    iconCode={item.iconCode}
                    handleAuxClick={() => tracking()}
                    handleClick={() => tracking()}
                  />
                );
              })}
            </div>
          </div>
        </Conditional>
      )}
      <div className={styles.social}>
        {dataSocial.map((social) => {
          const tracking = () => {
            DataLayer.clickEvent({
              element: social.title,
              elementCategory: 'icone',
              pageSection: 'footer',
              pageSubsection: 'social',
            });
          };
          return (
            <a
              key={social.id}
              target="_blank"
              href={social.url}
              title={social.title}
              data-before={social.icon}
              onClick={() => {
                tracking();
              }}
              onAuxClick={() => {
                tracking();
              }}
            >
              {social.title}
            </a>
          );
        })}
      </div>
      <Conditional notOn="mobile">
        <div className={styles.footerIbamaDesktop}>
          <p>
            {' '}
            A disponibilidade de itens de série, opcionais e
            acessórios pode variar de acordo com a versão
            escolhida. Verifique o Monte seu Carro. Imagens
            meramente ilustrativas.
          </p>
          {BrandImage}
        </div>
      </Conditional>
      <Conditional notOn="desktop">
        <div className={styles.footerIbamaMobile}>
          <div className={styles.mobileBrandContainer}>
            {BrandImage}
          </div>
        </div>
      </Conditional>
    </footer>
  );
};

export default Footer;
