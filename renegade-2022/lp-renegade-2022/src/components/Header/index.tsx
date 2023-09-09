import { FC, useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { brand, ui } from '@/assets';
import { brandLinks, BRAND_NAME } from '@/constants';
import RenegadeStore from '@/store/RenegadeStore';
import { useMobxStores } from '@/store';
import { HamburguerButton } from '@components/index';
import { observer } from 'mobx-react-lite';
import scssStyles from '@/utils/scssStyles';
import useDocumentScrollThrottled from '@/hooks/useDocumentScrollThrottled';
import DataLayer from '@/utils/DataLayer';

const Header: FC = observer(() => {
  const store: RenegadeStore = useMobxStores();
  const [shouldHideHeader, setShouldHideHeader] =
    useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  let timeout: NodeJS.Timeout;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  return (
    <div
      className={scssStyles([
        styles.container,
        shouldHideHeader ? styles.hide : '',
      ])}
    >
      <div className={scssStyles([styles.mobile])}>
        <HamburguerButton
          title="Abrir menu"
          handleClick={() => {
            const open = !store.menuOpen;
            store.setMenuOpen(open);
            if (open) {
              DataLayer.openEvent({
                elementCategory: 'icone',
                element: 'abrir-menu',
                pageSection: 'conteudo',
                pageSubsection: 'menu',
              });
            } else {
              DataLayer.closeEvent({
                elementCategory: 'icone',
                element: 'fechar-menu',
                pageSection: 'conteudo',
                pageSubsection: 'menu',
              });
            }
          }}
        >
          <img src={ui.menuClosed} alt="Menu" />
        </HamburguerButton>
        <div>
          <Link href={brandLinks.mainUrl}>
            <a
              title={BRAND_NAME}
              onClick={() => {
                DataLayer.clickEvent({
                  element: 'jeep',
                  elementCategory: 'logo',
                  pageSection: 'conteudo',
                  pageSubsection: 'menu',
                  path: 'home',
                  product: 'renegade',
                  segment: 'landing-page',
                });
              }}
              onAuxClick={() => {
                DataLayer.clickEvent({
                  element: 'jeep',
                  elementCategory: 'logo',
                  pageSection: 'conteudo',
                  pageSubsection: 'menu',
                  path: 'home',
                  product: 'renegade',
                  segment: 'landing-page',
                });
              }}
            >
              <img
                width={60}
                src={brand.logoHeaderMobile}
                alt={BRAND_NAME}
                className={styles.logoHeader}
              />
            </a>
          </Link>
        </div>
        <div />
      </div>
    </div>
  );
});

export default Header;
