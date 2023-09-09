import React from "react";
// import Image from "next/image";
import { useRouter } from "next/router";

import { Image } from '../../components';

import { dataLayer } from "../../libs/gtm";
import { getPath } from "../../utils";

import logoJeep from "../../assets/logo-jeep-drawing-cream.png";
import icoFacebook from "../../assets/ico-facebook.jpg";
import icoYoutube from "../../assets/ico-youtube.jpg";
import icoTwitter from "../../assets/ico-twitter.jpg";
import icoInstagram from "../../assets/ico-instagram.jpg";

import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  const router = useRouter();

  const handleDataLayer = ({ ...args }) => {
    dataLayer({
      path: getPath(router),
      event: "interaction",
      brand: "jeep",
      segment: "landing-page",
      product: "gladiator",
      elementCategory: "icone",
      interactionType: "clique",
      pageSection: "footer",
      pageSubsection: "social",
      selectedValue: null,
      ...args,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <a href="https://www.jeep.com.br?utm_source=receptiva_gladiator&utm_medium=menu_lateral_section&utam_campaign=logo_jeep" target="_blank">
            <Image src={logoJeep.src} alt="Jeep" />
          </a>
        </div>
        <div className={styles.wrapperShared}>
          <p>TENTE ACOMPANHAR</p>
          <ul className={styles.listShared}>
            <li
              onClick={() => {
                handleDataLayer({
                  element: "facebook",
                });
              }}
            >
              <a
                href="https://www.facebook.com/jeep"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={icoFacebook.src} alt="Facebook" />
              </a>
            </li>
            <li
              onClick={() => {
                handleDataLayer({
                  element: "youtube",
                });
              }}
            >
              <a
                href="https://www.youtube.com/jeep"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={icoYoutube.src} alt="Youtube" />
              </a>
            </li>
            <li
              onClick={() => {
                handleDataLayer({
                  element: "twitter",
                });
              }}
            >
              <a href="https://twitter.com/jeep" target="_blank" rel="noreferrer">
                <Image src={icoTwitter.src} alt="Twitter" />
              </a>
            </li>
            <li
              onClick={() => {
                handleDataLayer({
                  element: "instagram",
                });
              }}
            >
              <a
                href="https://www.instagram.com/jeep/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={icoInstagram.src} alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.wrapperText}>
          <p className="desktop desktop-mobile">
            A disponibilidade de itens de série, opcionais e acessórios pode variar
            de acordo com a versão escolhida. 
            Verifique o Monte seu Carro. 
            Imagens meramente ilustrativas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
