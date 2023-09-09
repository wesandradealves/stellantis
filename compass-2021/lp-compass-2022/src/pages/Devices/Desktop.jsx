import {
  useCallback,
  useEffect,
  useState,
  useContext,
} from 'react';
import { ContainerDesktop } from '../../Base/styles';
import {
  FooterDesktop,
  NavigationDesktop,
  Tabs,
} from '../../components';
import WarningBox from '../../components/WarningBox';
import DataFooterDesktop from '../../mocks/DataFooterDesktop';
import DataHero from '../../mocks/DataHero';
import MenuActions from '../../mocks/DataMenuActions';
import MenuList from '../../mocks/DataMenuList';
import ProductDetails from '../../mocks/DataProductDetails';
import {
  BannerDesktop,
  CalculatorDesktop,
  Hero,
  ServicesDesktop,
  VersionsDesktop,
} from '../../sections';
import WhatsappBtn from '../../components/WhatsappBtn/WhatsappBtn';
import Awards from '../../sections/Awards/Awards';
import DataVersions from '../../mocks/DataVersions';
import Videos from '../../sections/Videos/Desktop';
import Expanded from '../../components/ExpandedGallery/Expanded';
import { GalleryContext } from '../../context/Gallery/GalleryContext';
import SwitchMotorVersion from '../../components/SwitchMotorVersion';

const HomeDesktop = () => {
  const [isOpenTabs, setIsOpenTabs] = useState();
  const [openMenu, setOpenMenu] = useState(true);
  const { isExpand } = useContext(GalleryContext);

  const handleMenu = useCallback(() => {
    setOpenMenu(!openMenu);
    let iFirst = 0;
    // prettier-ignore
    // eslint-disable-next-line func-names
    $($(".swiper-container")[0]).find($('.swiper-wrapper')).find(".swiper-slide").each(function( index ) {
      if ($(this).hasClass("swiper-slide-active")){
      const elementSwipper = $($(".swiper-container")[0]).find($('.swiper-wrapper'))
      let dest = ''
      if (!openMenu) {
        dest =  - document.body.clientWidth * (iFirst) + (188*iFirst)
      }
      else {
        dest =  - document.body.clientWidth * iFirst
      }
      // prettier-ignore
      /* eslint-disable */
      elementSwipper.css('transform', 'translateX(' + dest + 'px)'); // eslint-disable-line;
      }
      iFirst++;
    });
    let iSecond = 0;
    $($('.swiper-container')[2])
      .find($('.swiper-wrapper'))
      .find('.swiper-slide')
      .each(function () {
        if ($(this).hasClass('swiper-slide-active')) {
          const elementSwipper = $(
            $('.swiper-container')[2],
          ).find($('.swiper-wrapper'));
          let dest = '';
          if (!openMenu) {
            dest =
              -window.screen.width * iSecond + 188 * iSecond;
          } else {
            dest = -window.screen.width * iSecond;
          }
          // prettier-ignore
          /* eslint-disable */
          elementSwipper.css('transform', 'translateX(' + dest + 'px)'); // eslint-disable-line;
        }
        iSecond++;
      });
    let iLast = 0;
    $($('.swiper-container')[3])
      .find($('.swiper-wrapper'))
      .find('.swiper-slide')
      .each(function (index) {
        if ($(this).hasClass('swiper-slide-active')) {
          const elementSwipper = $(
            $('.swiper-container')[3],
          ).find($('.swiper-wrapper'));
          let dest =
            -(window.screen.width * iLast) + 188 * iLast;
          // prettier-ignore
          /* eslint-disable */
          elementSwipper.css('transform', 'translateX(' + dest + 'px)'); // eslint-disable-line;
        }
        iLast++;
      });
    if (!openMenu) {
      DataLayer.push('MenuDesktop_ClicouAbrir');
    } else {
      DataLayer.push('MenuDesktop_ClicouFechar');
    }
  }, [openMenu]);

  useEffect(() => {
    setIsOpenTabs(ProductDetails[0].brand);
  }, []);

  return (
    <>
      <WarningBox />

      {isExpand && <Expanded />}

      <NavigationDesktop
        menuActions={MenuActions}
        menuList={MenuList}
        visible={openMenu}
        handleVisible={handleMenu}
        handleTab={setIsOpenTabs}
      />

      <ContainerDesktop style={{height: '100%'}}open={openMenu}>
        <Hero
          data={DataHero}
          visible={openMenu}
          open={openMenu}
        />
        {/* <SwitchMotorVersion /> */}
        <ServicesDesktop />
        {/* <CalculatorDesktop /> */}
        <VersionsDesktop data={DataVersions} />
        <BannerDesktop />

        {/* <Videos /> */}
        <Tabs
          data={ProductDetails}
          isOpen={isOpenTabs}
          handleTab={setIsOpenTabs}
        />
        <Awards />
        <FooterDesktop socialMedias={DataFooterDesktop} />
        <WhatsappBtn />
      </ContainerDesktop>
    </>
  );
};

export default HomeDesktop;
