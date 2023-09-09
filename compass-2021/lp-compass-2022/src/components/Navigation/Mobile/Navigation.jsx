import React, {
  Fragment,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import { DataLayer } from '../../Track/DataLayer/DataLayer';
import * as images from '../../../assets';
import { Colors } from '../../../styles';
import Button from '../../Button';
import {
  Actions,
  Container,
  Hamburger,
  Link,
  Nav,
  MdArrowRight,
} from './styles';
import { IconMotorTypeSelected } from '../../../assets/images/Icons/selected-motor-version';

const Navigation = ({ menuList, menuActions, handleTab }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = useCallback(() => {
    setOpenMenu(!openMenu);
    if (!openMenu) {
      DataLayer.push('Menu_ClicouAbrir');
    } else {
      DataLayer.push('Menu_ClicouFechar');
    }
  }, [openMenu]);

  const handleSection = useCallback((section, tab) => {
    // const sectionElement =
    //   document.getElementById(section).offsetTop;
    document.getElementById(section).scrollIntoView({
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
    handleSection('all-compass', tab);
  }, []);

  useEffect(() => {
    if (openMenu) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }, [openMenu]);

  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === '/4xe/versoes' ||
      location.pathname === '/4xe/versoes/'
    ) {
      setTimeout(function fn() {
        handleSection('versoes');
      }, 1000);
    }
  }, []);

  return (
    <Container>
      <Hamburger onClick={handleMenu} isOpen={openMenu}>
        <span></span>
      </Hamburger>
      <img src={images.LogoJeep2x} alt="Jeep" />
      <div className="version-selected">
        <IconMotorTypeSelected />
      </div>
      <Nav isOpen={openMenu}>
        {menuList?.map(item => (
          <Fragment key={`navigation-mobile-${item.id}`}>
            <Link
              noton={item.id}
              onClick={() => {
                handleSection(item.link);
                DataLayer.push('Menu_ClicouSubmenu', item.ref);
              }}
            >
              <h2>{item.name}</h2>
            </Link>

            {item.submenu && (
              <ul>
                {item.submenu.map(sub => (
                  <li
                    key={`navigation-mobile-submenu-${sub.id}`}
                  >
                    <Link
                      to={sub.link}
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
        ))}

        <Actions>
          {menuActions?.map(item =>
            item.download ? (
              <Button
                className="btnblue"
                datalayer={'Menu_ClicouCTA'}
                datalayername={item.ref}
                key={`navigation-mobile-cta-${item.id}`}
                to={`${item.link ?? ''}${
                  window.location?.search ??
                  '?utm_source=receptiva_compass&utm_medium=versoes_section_&utm_campaign=receptiva_compass'
                }`}
                bg={Colors.primary}
                br={4}
                pd={15}
                jc={'center'}
                target={item.target ?? '_blank'}
                download
              >
                {item.name}
                <img
                  alt={item.name}
                  src={images.menuArrow}
                  styles={{ width: '5px' }}
                />
              </Button>
            ) : (
              <Button
                className="btnblue"
                datalayer={'Menu_ClicouCTA'}
                datalayername={item.ref}
                key={item.id}
                to={`${item.link ?? ''}${
                  window.location?.search ??
                  '?utm_source=receptiva_compass&utm_medium=versoes_section_&utm_campaign=receptiva_compass'
                }`}
                bg={Colors.primary}
                br={4}
                pd={15}
                jc={'center'}
                target={item.target ?? '_blank'}
              >
                <div>
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
                </div>
              </Button>
            ),
          )}
        </Actions>
      </Nav>
    </Container>
  );
};

export default Navigation;
