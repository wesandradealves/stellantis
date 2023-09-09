import React, { Fragment } from 'react';
import { gsap } from 'gsap';
import { env } from 'process';
import {
  CombustionOption,
  HybridOption,
} from '../../assets/images/Icons/switch-motor-icons';
import {
  ContainerBox,
  TextContainer,
  Wrap,
} from './SwitchMotorVersions.style';

const SwitchMotorVersion = ({ belowHero }) => {
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
        <h1>ASSUMA O CONTROLE DA SUA LIBERDADE</h1>
        <h2>SELECIONE PARA MUDAR A MOTORIZAÇÃO</h2>
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

export default SwitchMotorVersion;
