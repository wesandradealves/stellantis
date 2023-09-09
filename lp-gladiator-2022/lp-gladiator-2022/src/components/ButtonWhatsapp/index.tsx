import { Image } from "../";
import { dataLayer } from "../../libs/gtm";
import Whatsapp from "../../assets/whatsappIcon.svg";
import styles from "./styles.module.scss";
import { StickerFooterProps } from "../../interfaces";

export default function ButtonWhatsApp({showStickerFooter}: StickerFooterProps) {

  const handleDataLayer = ({ ...args }) => {
    dataLayer({
      path: 'home',
      event: "interaction",
      brand: "jeep",
      segment: "landing-page",
      product: "gladiator",
      pageSection: "formulario",
      pageSubsection: "lead-cadastro",
      selectedValue: null,
      ...args,
    });
  };

  return (
    <a
      href="https://wa.me/message/VFYTTIY7OE4JI1"
      target="_blank"
      className={`${styles.whatsapp} ${!showStickerFooter ? styles.show : ''}`}
      rel="noreferrer"
      onClick={() => {
        handleDataLayer({
          elementCategory: "whatsapp",
          interactionType: "clique",
          element: "quero-comprar",
          pageSubsection: "float",
          pageSection: "conteudo",
        });
      }}
    >
      <Image src={Whatsapp.src} alt="Whatsapp" />
    </a>
  );
}
