import { FC } from 'react';
import styles from './Cards.module.scss';
import { CardsItemsProps } from '@/models';
import RenegadeStore from '@/store/RenegadeStore';
import { useMobxStores } from '@/store';
import { observer } from 'mobx-react-lite';
import scssStyles from '@/utils/scssStyles';
import { Chevron } from '../SvgComponents';
import {
  ResponsiveLazyImage,
  ScrollToAnchor,
} from '@/components';
import { dataMenuLabel } from '@/mocks/menu';
import DataLayer from '@/utils/DataLayer';

export interface CardsProps {
  items: CardsItemsProps[];
}

const pageSubsection = 'novo-renegade';

const Cards: FC<CardsProps> = observer(({ items }) => {
  const store: RenegadeStore = useMobxStores();

  return (
    <div className={styles.positionFix}>
      <div className={styles.container}>
        <ScrollToAnchor
          reference={dataMenuLabel()[1]}
          className={scssStyles([
            styles.scrollCta,
            styles.scrollCtaHorizontal,
          ])}
          pageSubsection="novo-renegade"
          title="Scroll para saber mais"
        >
          <p>Scroll para saber mais</p>
          <div>
            <Chevron title="scroll-01" color="#dc651e" />
            <Chevron title="scroll-02" color="#dc651e" />
            <Chevron title="scroll-03" color="#dc651e" />
          </div>
        </ScrollToAnchor>
        <div className={styles.cards}>
          {items.map((item, index) => {
            return (
              <button
                key={`desktop-stories-button-${index}`}
                onClick={() => {
                  DataLayer.clickEvent({
                    element: item.title,
                    elementCategory: 'card',
                    pageSection: 'conteudo',
                    pageSubsection,
                  });
                  store.setMainDisplayIndex(index + 1);
                }}
                className={styles.unitaryBox}
                title={item.title}
              >
                <div
                  id={'thumb' + item.id}
                  className={scssStyles([
                    styles.externalBox,
                    index === store.mainDisplayIndex - 1
                      ? styles.selected
                      : '',
                  ])}
                >
                  <div
                    className={scssStyles([
                      styles.internalBox,
                      store.mainDisplayIndex !== index + 1
                        ? ''
                        : styles.selected,
                    ])}
                  >
                    {item.title2 != '' ? (
                      <h2 className={styles.cardTitle}>
                        {`${item.title} ${item.title2}`}
                      </h2>
                    ) : (
                      <h2 className={styles.cardTitle}>
                        {`${item.title}`}
                      </h2>
                    )}
                    <ResponsiveLazyImage
                      alt={`${item.title}`}
                      src={item.src.fullPath}
                      src2={item.src.fullPath2x}
                      src3={item.src.fullPath3x}
                    />
                    <div
                      className={scssStyles([
                        styles.addCross,
                        store.mainDisplayIndex !== index + 1
                          ? ''
                          : styles.selected,
                      ])}
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default Cards;
