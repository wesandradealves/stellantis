import { Button } from "../"
import { dataLayer } from "../../libs/gtm";
import { StickerFooterProps } from "../../interfaces";
import styles from './styles.module.scss';

export default function index({showStickerFooter}: StickerFooterProps) {
  const handleDataLayer = ({...args}) => {
    dataLayer({
      path: 'home',
      event: "interaction",
      brand: "jeep",
      segment: "landing-page",
      product: "gladiator",
      pageSection: "conteudo",
      pageSubsection: "float",
      selectedValue: null,
      ...args,
    });
  };
  
  return (
    <div className={`${styles.container} ${(!showStickerFooter ? styles.show : '')}`}>
      <div
        onClick={() =>
          handleDataLayer({
            pageSubsection: 'float',
            elementCategory: "cta",
            element: 'monte-o-seu',
          })
        }
        className={styles.button}
      >
        <Button to="https://www.jeep.com.br/gladiator/monte.html">
          Monte o seu
        </Button>
      </div>

      <div
        onClick={() =>
          handleDataLayer({
            pageSubsection: 'float',
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
    </div>
  )
}
