import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";

import { Image, Button, View360 } from "../../components";

import { dataLayer } from "../../libs/gtm";
import { replaceUrl, getPath, getQueryParams } from "../../utils";
import { TrailRatedProps } from "../../interfaces";

import logoJeep  from "../../assets/logo-jeep-drawing.png";
import ThumbMotor from "../../assets/Jeep-gladiator-motor-v6.jpg";
import ThumbCarga from "../../assets/Jeep-gladiator-capacidade-carga.jpg";
import ThumbAcessorios from "../../assets/Jeep-gladiator-portas-tubulares-versoes.jpg";

import styles from "./styles.module.scss";

const Rubicon = ({ showModalForm, setShowModalForm }: TrailRatedProps) => {
  const router = useRouter();
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  const [queryParams, setQueryParams] = useState<string>(getQueryParams());

  useEffect(() => {
    if (inView) {
      replaceUrl(String(entry?.target.getAttribute("data-history")), queryParams, router);
    }
  }, [inView]);

  const handleDataLayer = ({ ...args }) => {
    dataLayer({
      event: "interaction",
      brand: "jeep",
      segment: "landing-page",
      product: "gladiator",
      path: getPath(router),
      elementCategory: "icone",
      interactionType: "clique",
      pageSection: "conteudo",
      pageSubsection: "rubicon",
      element: "botao",
      selectedValue: null,
      ...args,
    });
  };

  return (
    <>
      <div id="rubicon" className="root">
        <div
          className={styles.container}
          id="wrapperVersion"
          ref={ref}
          data-history={`rubicon`}
        >

          <div className={styles.wrapperContainer}>

            <div className={`desktop desktop-mobile ${styles.logo}`}>
              <Image src={logoJeep.src} alt="Jeep" title="Jeep" />
            </div>

            <div className={styles.content}>
              <div className={styles.sideLeft}>
                <h3 className={styles.title}>Rubicon</h3>
                
                <div className={styles.listThumb}>
                  <div
                    className={styles.item}
                  >
                    <div className={styles.thumb}>
                      <Image src={ThumbMotor.src} alt="Motor 3.6L V6 do Jeep Gladiator" title="Jeep Gladiator Motor V6" />
                      <div className={styles.description}>
                        <p>MOTOR <br />3.6L V6</p>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    className={styles.item}
                  >
                    <div className={styles.thumb}>
                      <Image src={ThumbCarga.src} alt="Picape Jeep Gladiator vermelha vista de trás, com quadriciclo na caçamba aberta em terreno arenoso" title="Jeep Gladiator Capacidade de Carga 1000L" />
                      <div className={styles.description}>
                        <p>Capacidade <br />de até 1.000L <br />de carga</p>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    className={styles.item}
                  >
                    <div className={styles.thumb}>
                      <Image src={ThumbAcessorios.src} alt="Portas tubulares feitas com tubos de aço no Jeep Gladiator vermelho" title="Portas Tubulares Jeep Gladiator" />
                      <div className={styles.description}>
                        <p>Mais de 70 <br />Acessórios</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`mobile ${styles.logo}`}>
                  <Image src={logoJeep.src} alt="Jeep" title="Jeep" />
                </div>

                <div className="desktop">
                  <div
                    onClick={() =>
                      handleDataLayer({
                        elementCategory: "cta",
                        element: 'compre-o-seu'
                      })
                    }
                    className={styles.button}
                  >
                    <Button to="https://www.jeep.com.br/gladiator/agende.html">
                      Compre o seu
                    </Button>
                  </div>

                  <div
                    onClick={() =>
                      handleDataLayer({
                        elementCategory: "cta",
                        element: 'monte-o-seu'
                      })
                    }
                    className={styles.button}
                  >
                    <Button to="https://www.jeep.com.br/gladiator/monte.html">
                      Monte o seu
                    </Button>
                  </div>
                </div>

              </div>
              <div className={styles.sideRight}>
                <View360 />
                <div className={`mobile ${styles.containerButton}`}>
                  <div
                    onClick={() => {
                      handleDataLayer({
                        elementCategory: "cta",
                        element: 'compre-o-seu'
                      })
                    }}
                    className={styles.button}
                  >
                    <Button to="https://www.jeep.com.br/gladiator/agende.html">
                      Compre o seu
                    </Button>
                  </div>

                  <div
                    onClick={() => {
                      handleDataLayer({
                        elementCategory: "cta",
                        element: 'monte-o-seu'
                      })
                    }}
                    className={styles.button}
                  >
                    <Button to="https://www.jeep.com.br/gladiator/monte.html">
                    Monte o seu
                  </Button>
                  </div>
                </div>
              </div>
              <p className={styles.disclaimer}>Siga todas as instruções contidas no manual do veículo para remoção do teto, portas e para-brisa. Dirigir sem as portas, espelho retrovisor externo e com o para-brisa rebatido não é permitido em vias e locais públicos, somente sendo possível em ambientes controlados e/ou em vias “off-road” particulares em que não haja fluxo contínuo de veículos. Imagens meramente ilustrativas.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rubicon;