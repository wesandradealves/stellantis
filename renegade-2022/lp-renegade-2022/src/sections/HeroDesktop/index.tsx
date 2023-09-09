import React, { FC } from 'react';
import { heroImages, brand, badge } from '@/assets';
import styles from './HeroDesktop.module.scss';
import { Display, Cards, SectionElement } from '@/components';
import { dataHero } from '@/mocks/dataHero';
import { metaTags } from '@/constants';
import { dataMenuLabel } from '@/mocks/menu';
import scssStyles from '@/utils/scssStyles';

const HeroDesktop: FC = () => {
  const previous = React.useRef<(() => void) | null>(null);
  const next = React.useRef<(() => void) | null>(null);
  return (
    <SectionElement
      id="desktopDisplay"
      className={styles.container}
      navReference={dataMenuLabel().find((c) => c.slug === '')}
      noPadding
      heightBehaviour="soft"
      handleKeyDown={(e, isVisible) => {
        if (isVisible) {
          if (e.key === 'ArrowLeft') {
            previous?.current && previous?.current();
          } else if (e.key === 'ArrowRight') {
            next?.current && next?.current();
          }
        }
      }}
    >
      <div className={styles.logoContent} />
      <Display
        previousEvent={(e) => {
          previous.current = e;
        }}
        nextEvent={(e) => {
          next.current = e;
        }}
        items={[
          {
            body: (
              <div className={scssStyles([styles.slides])}>
                <div className={styles.content} title={"Novo Jeep Renegade: A Natureza é o seu parque de diversões."}>
                </div>
              </div>
            ),
            background: {
              src: heroImages.mainBg,
              alt: "Novo Jeep Renegade: A Natureza é o seu parque de diversões."
            },
          },
          {
            body: (
              <div
                className={scssStyles([
                  styles.slides,
                  //styles.centered,
                ])}
              >
                <div className={styles.fullBgGradient} />
                <div className={styles.badge}>
                  <img src={badge.img} title="Melhor Compra 2022" alt="Melhor Compra 2022" />
                </div>
                <div className={styles.content}>
                  <div className={styles.descriptionContent}>
                    <div className={styles.descriptionLayoutTwo}>
                      <p className={styles.tltBottom}>
                        MELHOR COMPRA 2022
                      </p>
                      <p>
                        O carro off-road com o motor mais potente
                        da categoria superou mais um desafio: o novo
                        Jeep Renegade Longitude T270 Turbo Flex acaba
                        de ser eleito a Melhor Compra de 2022, pela
                        revista Quatro Rodas. São 185 cv para desbravar
                        todos os terrenos e prêmios.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ),
            background: {
              src: heroImages.secondContent,
            },
          },
          {
            body: (
              <div
                className={scssStyles([
                  styles.slides,
                  //styles.centered,
                ])}
              >
                <div className={styles.fullBgGradient} />
                <div className={styles.content}>
                  <div className={styles.descriptionContent}>
                    <div className={styles.descriptionLayoutTwo}>
                      <p className={styles.tltBottom}>
                        DNA JEEP
                      </p>
                      <p>
                        Um ícone não muda, ele evolui. Além de
                        estar mais robusto, eficaz e versátil, o
                        novo Renegade traz design frontal e
                        traseiro renovado, com faróis e lanternas
                        Full Led em todas as versões.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ),
            background: {
              src: heroImages.thirdContent,
            },
          },
          {
            body: (
              <div
                className={scssStyles([
                  styles.slides,
                  //styles.centered,
                ])}
              >
                <div className={styles.fullBgGradient} />
                <div className={styles.content}>
                  <div className={styles.descriptionContent}>
                    <div className={styles.descriptionLayoutTwo}>
                      <p className={styles.tltBottom}>
                        PERFORMANCE
                      </p>
                      <p>
                        Vá além com toda a performance do T270, o
                        motor mais potente da categoria. São 185
                        cv pra você desbravar todos os terrenos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ),
            background: {
              src: heroImages.fourthContent,
            },
          },
          {
            body: (
              <div
                className={scssStyles([
                  styles.slides,
                  //styles.centered,
                ])}
              >
                <div className={styles.fullBgGradient} />
                <div className={styles.content}>
                  <div className={styles.descriptionContent}>
                    <div className={styles.descriptionLayoutTwo}>
                      <p className={styles.tltBottom}>
                        TECNOLOGIAS AUTÔNOMAS
                      </p>
                      <p>
                        A experiência Jeep Renegade está mais
                        segura e inteligente. As tecnologias
                        autônomas, como frenagem de emergência e
                        monitoramento de ponto cego, trabalham
                        automaticamente para oferecer uma
                        navegação ainda mais tranquila.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ),
            background: {
              src: heroImages.fifthContent,
            },
          },
          {
            body: (
              <div
                className={scssStyles([
                  styles.slides,
                  //styles.centered,
                ])}
              >
                <div className={styles.fullBgGradient} />
                <div className={styles.content}>
                  <div className={styles.descriptionContent}>
                    <div className={styles.descriptionLayoutTwo}>
                      <p className={styles.tltBottom}>
                        NOVA CENTRAL MULTIMÍDIA
                      </p>
                      <p>
                        A nova central multimídia se conecta
                        automaticamente ao seu smartphone através
                        da conexão wireless. Recursos como mapas,
                        músicas e informações importantes sobre
                        seu percurso estão facilmente ao seu
                        alcance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ),
            background: {
              src: heroImages.sixthContent,
            },
          },
        ]}
      />
      <Cards
        items={dataHero.map((d) => ({ ...d, src: d.cardSrc }))}
      />
    </SectionElement>
  );
};

export default HeroDesktop;
