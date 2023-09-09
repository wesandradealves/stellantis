/* eslint-disable func-names */
/* eslint-disable no-script-url */
import {
  Fragment,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import * as images from '../../../assets';
import { Colors } from '../../../styles';
import Button from '../../Button';
import { DataLayer } from '../../Track/DataLayer/DataLayer';
import styles from './Navigation.module.scss';
import { Actions, Container, Link, Logo, Nav } from './styles';

const Navigation = ({
  menuList,
  menuActions,
  visible,
  handleVisible,
  handleTab,
}) => {
  const handleSection = useCallback((section, tab) => {
    const sectionElement = document
      .getElementById(section)
      .scrollIntoView({
        behavior: 'smooth',
        inline: 'nearest',
      });

    // eslint-disable-next-line no-unused-expressions
    tab
      ? DataLayer.push('DataLayerScrollTo', section, tab)
      : DataLayer.push('DataLayerScrollTo', section, section);
    // window.scrollTo(0, sectionElement);
  }, []);

  const handleSubmenu = useCallback((tab, submenuName) => {
    DataLayer.push('Menu_ClicouSubmenu', submenuName);
    handleTab(tab);
    setTimeout(function () {
      handleSection('all-compass', tab);
    }, 500);
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === '/4xe/versoes' ||
      location.pathname === '/4xe/versoes'
    ) {
      setTimeout(function fn() {
        handleSection('versoes');
      }, 1000);
    }
  }, []);

  return (
    <Container>
      <Nav id="nav-bar" isOpen={visible}>
        <Logo src={images.LogoJeep2x} alt="logo-menu" />
        {menuList?.map(item => {
          return (
            <Fragment key={`navigation-desktop-${item.id}`}>
              <Link
                noton={item.id}
                onClick={() => {
                  handleSection(item.link);
                  DataLayer.push('Menu_ClicouSubmenu', item.ref);
                }}
              >
                <h2>{item.name}</h2>
              </Link>
              <hr />
              {item.submenu && (
                <ul>
                  {item.submenu.map(sub => (
                    <li
                      key={`navigation-desktop-submenu-${sub.id}`}
                    >
                      <Link
                        onClick={() =>
                          handleSubmenu(sub.link, sub.ref)
                        }
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </Fragment>
          );
        })}

        <Actions>
          {menuActions?.map(item =>
            item.download ? (
              <Button
                className="btnyellow"
                id="Menu-Actions"
                datalayer={'MenuDesktop_ClicouCTA'}
                datalayername={item.ref}
                color={Colors.light}
                width={168}
                height={16}
                key={`navigation-desktop-cta-${item.id}`}
                to={`${item.link ?? ''}${
                  window.location?.search ?? ''
                }`}
                target={item.target ?? '_blank'}
                download
              >
                <span className={styles.container}>
                  {item.name}
                  <img alt={item.name} src={images.menuArrow} />
                </span>
              </Button>
            ) : (
              <Button
                className="btnyellow"
                id="Menu-Actions"
                datalayer={'MenuDesktop_ClicouCTA'}
                datalayername={item.ref}
                color={Colors.light}
                width={168}
                height={32}
                key={item.id}
                to={`${item.link ?? ''}${
                  window.location?.search ?? ''
                }`}
                target={item.target ?? '_blank'}
              >
                <span className={styles.container}>
                  {item.icon ? (
                    <img
                      alt="whatsapp"
                      className="teste"
                      src={images.whatsapp}
                    />
                  ) : (
                    ''
                  )}
                  {item.name}
                  <img alt={item.name} src={images.menuArrow} />
                </span>
              </Button>
            ),
          )}
        </Actions>
      </Nav>
    </Container>
  );
};

export default Navigation;
