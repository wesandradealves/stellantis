import { useContext } from 'react';
import Base from '../../Base';
import { Accordion, Cta, Stories } from '../../components';
import ProductDetails from '../../mocks/DataProductDetails';
import DataServices from '../../mocks/DataServices';
import DataHero from '../../mocks/DataHero';
import DataVersions from '../../mocks/DataVersions';
import {
  BannerMobile,
  CalculatorMobile,
  ServicesMobile,
  VersionsMobile,
} from '../../sections';
import Awards from '../../sections/Awards/Awards';
import VideosMobile from '../../sections/Videos/Mobile';
import { GalleryContext } from '../../context/Gallery/GalleryContext';
import ExpandedMobile from '../../components/ExpandedGallery/ExpandedMobile';
import WhatsappBtn from '../../components/WhatsappBtn/WhatsappBtn';
import MobileSwitchMotorVersion from '../../components/SwitchMotorVersion/mobile';

const HomeMobile = () => {
  const { isExpand } = useContext(GalleryContext);

  return (
    <>
      {isExpand && <ExpandedMobile />}
      <Base>
        <MobileSwitchMotorVersion />
        <Stories stories={DataHero} />
        <ServicesMobile data={DataServices} />
        {/* <CalculatorMobile /> */}
        <VersionsMobile data={DataVersions} />
        <Cta />
        <BannerMobile />

        {/* <VideosMobile /> */}

        <Accordion data={ProductDetails} />
        <Awards />
        <WhatsappBtn />
      </Base>
    </>
  );
};

export default HomeMobile;
