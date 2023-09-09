import { SectionElement, Stories } from '@components/index';
import { Stories as StoriesAssets } from '@/assets/components';
import { FC } from 'react';
import { badge, brand } from '@/assets';
import styles from './MainStories.module.scss';
import { observer } from 'mobx-react-lite';
import { dataHero } from '@/mocks/dataHero';
import { dataMenuLabel } from '@/mocks/menu';

const MainStories: FC = observer(() => {
  return (
    <SectionElement
      id="mobileStories"
      navReference={dataMenuLabel()[0]}
      className={styles.container}
      noPadding
      heightBehaviour="unset"
    >
      <Stories
        items={[
          {
            showNext: true,
            title: 'Jeep Renegade',
            body: (
              <div className={styles.slides}>
                <div className={styles.slidesContainer}>
                  <div className={styles.oldTopBox}>
                    <div className={styles.topTlt}>

                    </div>
                  </div>
                </div>
              </div>
            ),
            scrollCtaOrientation: 'vertical',
            background: {
              src: StoriesAssets.backgrounds.mainStorie,
            },
            durationInS: 16,
          },
          {
            showNext: true,
            title: dataHero[0].title,
            body: (
              <>
                <div className={styles.slides}>
                  <div className={styles.slidesContainer}>
                    <div className={styles.topBox}>
                      <div className={styles.topTlt}>
                        <p className={styles.longTlt}>
                          MELHOR
                          <br />
                          COMPRA 2022
                        </p>
                      </div>
                      <p>{dataHero[0].description}</p>
                      <img src={badge.img} title="Melhor Compra 2022" alt="Melhor Compra 2022" />
                    </div>
                  </div>
                </div>
              </>
            ),
            scrollCtaOrientation: 'vertical',
            background: {
              src: StoriesAssets.backgrounds.secondStorie,
            },
            durationInS: 15,
          },
          {
            showNext: true,
            title: dataHero[1].title,
            body: (
              <>
                <div className={styles.slides}>
                  <div className={styles.slidesContainer}>
                    <div className={styles.topBox}>
                      <div className={styles.topTlt}>
                        <p>
                          DNA <strong>JEEP</strong>
                        </p>
                      </div>
                      <p>{dataHero[0].description}</p>
                    </div>
                  </div>
                </div>
              </>
            ),
            scrollCtaOrientation: 'vertical',
            background: {
              src: StoriesAssets.backgrounds.thirdStorie,
            },
            durationInS: 15,
          },
          {
            showNext: true,
            title: dataHero[2].title,
            body: (
              <>
                <div className={styles.slides}>
                  <div className={styles.slidesContainer}>
                    <div className={styles.topBox}>
                      <div className={styles.topTlt}>
                        <p className={styles.longTlt}>
                          PERFORMANCE
                        </p>
                      </div>
                      <p>{dataHero[1].description}</p>
                    </div>
                  </div>
                </div>
              </>
            ),
            scrollCtaOrientation: 'vertical',
            background: {
              src: StoriesAssets.backgrounds.fourthStorie,
            },
            durationInS: 15,
          },
          {
            showNext: true,
            title: dataHero[3].title,
            body: (
              <>
                <div className={styles.slides}>
                  <div className={styles.slidesContainer}>
                    <div className={styles.topBox}>
                      <div className={styles.topTlt}>
                        <p className={styles.longTlt}>
                          TECNOLOGIAS <strong>AUTÔNOMAS</strong>
                        </p>
                      </div>
                      <p>{dataHero[2].description}</p>
                    </div>
                  </div>
                </div>
              </>
            ),
            scrollCtaOrientation: 'vertical',
            background: {
              src: StoriesAssets.backgrounds.fifthStorie,
            },
            durationInS: 15,
          },
          {
            showNext: true,
            title: dataHero[4].title,
            body: (
              <>
                <div className={styles.slides}>
                  <div className={styles.slidesContainer}>
                    <div className={styles.topBox}>
                      <div className={styles.topTlt}>
                        <p>
                          NOVA
                          <br />
                          <strong>CENTRAL MULTIMÍDIA</strong>
                        </p>
                      </div>
                      <p>{dataHero[3].description}</p>
                    </div>
                  </div>
                </div>
              </>
            ),
            scrollCtaOrientation: 'vertical',
            background: {
              src: StoriesAssets.backgrounds.sixthStorie,
            },
            durationInS: 15,
          },
        ]}
      />
    </SectionElement>
  );
});

export default MainStories;
