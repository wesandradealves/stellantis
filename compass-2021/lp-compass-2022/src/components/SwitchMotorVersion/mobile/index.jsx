import React from 'react';
import {
  CombustionOption,
  HybridOption,
} from '../../../assets/images/Icons/switch-motor-icons';
import {
  ContainerBox,
  TextContainer,
  Wrap,
} from './SwitchMotorMobileVersion.style';

const MobileSwitchMotorVersion = ({ belowHero }) => {
  const navbarWidth =
    document.querySelector('#nav-bar') || '20px';

  return (
    <ContainerBox
      id="switch-motor-version"
      belowHero={belowHero}
      className="switch-motor"
      navbarWidth={navbarWidth.clientWidth}
    >
      <TextContainer>
        <h1>SELECIONE PARA</h1>
        <h1>MUDAR A MOTORIZAÇÃO</h1>
      </TextContainer>

      <Wrap>
        <a href={'https://lp-compass-2022.hom.dcode.works/'}>
          <div className="wrapper">
            <div className="ponta-esquerda" />
            <div className="combustion both ">
              <CombustionOption />
              <span>COMBUSTÃO</span>
            </div>
          </div>
        </a>

        <div className="wrapper">
          <div className="hybrid both ">
            <HybridOption />
            <span>HÍBRIDO 4XE</span>
          </div>
          <div className="ponta-direita " />
        </div>
      </Wrap>
    </ContainerBox>
  );
};

export default MobileSwitchMotorVersion;
