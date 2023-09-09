import React, { useEffect, useState } from 'react';
import { Button } from '..';
import { Colors } from '../../styles';
import { Container } from './styles';
import NewDataLayer from '../../NewTrack/NewDataLayer';

const CallToAction = () => {
  const [scrollTop, setScrollTop] = useState();
  const [isActive, setIsActive] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const userScroll = () => {
      let timer = null;

      window.addEventListener(
        'scroll',
        () => {
          if (timer !== null) {
            clearTimeout(timer);
            setIsVisible(false);
          }
          timer = setTimeout(() => {
            setIsVisible(true);
          }, 500);
        },
        false,
      );
    };
    console.log('>>>>>>>>>> ___ scroll up');
    userScroll();
  }, []);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };

    window.addEventListener('scroll', onScroll);

    const heightDocument = document.body.clientHeight;

    const heightFooter =
      document.querySelector('footer').offsetHeight;

    const scrollBottom =
      heightDocument -
      window.screen.height -
      scrollTop -
      heightFooter;

    setIsActive(scrollBottom > 0);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <Container isVisible={isVisible} isActive={isActive}>
      <div>
        <Button
          datalayer={'TodasAsVersoes_ClicouCTA'}
          datalayername={'monte-o-seu'}
          datalayerversionname={'mobile'}
          br={4}
          bg={Colors.primary}
          color={Colors.light}
          fs={17}
          jc={'center'}
          target={'_blank'}
          to="https://www.jeep.com.br/compass/monte.html
          "
          onClick={() =>
            window.dataLayer.push({
              event: 'interaction',
              segment: 'landing-page',
              product: 'compass',
              path: 'home',
              interactionType: 'clique',
              pageSection: 'conteudo',
              pageSubsection: 'float',
              elementCategory: 'cta',
              element: 'monte-o-seu',
            })
          }
        >
          Monte o seu
        </Button>

        <Button
          datalayer={'TodasAsVersoes_ClicouCTA'}
          datalayername={'compre-o-seu'}
          br={4}
          fs={17}
          color={Colors.light}
          bg={Colors.secondary}
          jc={'center'}
          target={'_blank'}
          to={`https://www.jeep.com.br/4xe/solicite.html`}
          onClick={() =>
            window.dataLayer.push({
              event: 'interaction',
              segment: 'landing-page',
              product: 'compass',
              path: 'home',
              interactionType: 'clique',
              pageSection: 'conteudo',
              pageSubsection: 'float',
              elementCategory: 'cta',
              element: 'compre-o-seu',
            })
          }
        >
          Compre o seu
        </Button>
      </div>
    </Container>
  );
};

export default CallToAction;
