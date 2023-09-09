import { FC } from 'react'
import { section7Images } from './constants'
import styles from './Stamps.module.scss'

import award1 from '/static/images/section7/award1.png'

export const Section7 = (): JSX.Element => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.Stamps}>
          <img src={section7Images.images.img1} alt="Carro do Ano" />
        </div>
        <div className={styles.Text}>
          <h2>
            <strong>DO TOPO DO PÓDIO</strong>
            <br />
            <strong>DIRETO PARA SUA GARAGEM</strong>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Section7
