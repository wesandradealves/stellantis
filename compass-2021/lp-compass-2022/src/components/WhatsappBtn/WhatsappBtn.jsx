import styles from './WhatsappBtn.module.scss';
import { whatsappBtn } from '../../assets';
import { DataLayer } from '../Track/DataLayer/DataLayer';

const WhatsappBtn = () => {
  return (
    <a
      href="https://wa.me/message/HUJH6KDLUV47F1"
      className={styles.whatsapp_float}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        DataLayer.push(
          'CustomTrack',
          'clique',
          'conteudo',
          'float',
          'whatsapp',
          'converse-com-a-jeep',
        );
      }}
    >
      <img
        src={whatsappBtn}
        className="whatsapp_flag"
        alt="Icon whatsapp"
      />
      <span>Converse com a Jeep</span>
    </a>
  );
};

export default WhatsappBtn;
