import { menuArrowWhite } from '../../../assets';
import Button from '../../../components/Button';
import { Colors } from '../../../styles';
import styles from './BannerMobile.module.scss';
import { DataLayer } from '../../../components/Track/DataLayer/DataLayer';
import image from '../../../assets/images/06-banner/mobile/eletrizante@3x.jpg';

const BannerMobile = () => {
  return (
    <section id="bannerd" className={styles.container}>
      <div className={styles.content}>
        <h1>Eletrizante, né?</h1>
        <h2>
          Conheça tudo sobre o <br />
          mundo extraordinário da <br />
          <strong>Tecnologia Híbrida!</strong>
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
          {/* <img
            alt="Conheca o Compass Eletrico"
            src={menuArrowWhite}
          /> */}
        </Button>
      </div>
      <img
        className={styles.fotoBanner}
        alt="saiba-mais"
        src={image}
      />
    </section>
  );
};

export default BannerMobile;
