import { menuArrowWhite } from '../../../assets';
import Button from '../../../components/Button';
import { Colors } from '../../../styles';
import styles from './BannerDesktop.module.scss';
import { DataLayer } from '../../../components/Track/DataLayer/DataLayer';

const BannerDesktop = () => {
  return (
    <section id="banner" className={styles.container}>
      <div className={styles.contentArea}>
        <div className={styles.content}>
          <h1>Eletrizante, né?</h1>
          <h2>
            Conheça tudo sobre o mundo
            <br /> extraordinário da Tecnologia Híbrida!
          </h2>

          <Button
            className={styles.cta}
            height={50}
            width={220}
            bg={Colors.textBlue}
            color={Colors.light}
            target={'_blank'}
            href="https://www.jeep.com.br/4xe.html"
            onClick={() =>
              DataLayer.push(
                'CustomTrack',
                'click',
                'conteudo',
                'versoes',
                'cta',
                'saiba-mais',
              )
            }
          >
            <p>Saiba Mais</p>
            <img
              alt="Conheca o Compass Eletrico"
              src={menuArrowWhite}
            />
          </Button>
        </div>
        <div className={styles.image} />
      </div>
    </section>
  );
};

export default BannerDesktop;
