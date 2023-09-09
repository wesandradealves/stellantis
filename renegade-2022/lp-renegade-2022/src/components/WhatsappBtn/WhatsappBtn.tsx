import { FC } from 'react';

import { brand } from '@/assets';
import styles from './WhatsappBtn.module.scss';
import DataLayer from '@/utils/DataLayer';

interface WhatsappBtnProps {
  id?: string;
}

const WhatsappBtn: FC<WhatsappBtnProps> = ({
  id = 'btnWhatsapp',
}) => {
  return (
    <a
      href="https://api.whatsapp.com/message/5V6JWPFJIUMMN1?autoload=1&app_absent=0"
      className={styles.whatsapp_float}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        DataLayer.clickEvent({
          element: 'converse-com-a-jeep',
          elementCategory: 'whatsapp',
          pageSection: 'conteudo',
          pageSubsection: 'float',
        });
      }}
    >
      <img
        src={brand.whatsBtn}
        className="whatsapp_flag"
        alt={id}
      />
      <span>Converse com a Jeep</span>
    </a>
  );
};

export default WhatsappBtn;
