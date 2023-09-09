import styles from './WhatsappBtn.module.scss'
import WhatsappIcon from '/public/static/icons/whatsappIcon.svg'
import { pushEvent } from '../../utils/Tracking.Helpers'

const WhatsappBtn = () => {
  return (
    <a
      href="https://api.whatsapp.com/message/DDW4N5IQGROMH1?autoload=1&app_absent=0"
      className={styles.whatsapp_float}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        pushEvent({
          event: 'interaction',
          element: 'converse-com-a-jeep"',
          elementCategory: 'whatsapp',
          pageSection: 'conteudo',
          pageSubsection: 'float',
          interactionType: 'clique',
        })
      }
    >
      <WhatsappIcon />
      <span>Converse com a Jeep</span>
    </a>
  )
}

export default WhatsappBtn
