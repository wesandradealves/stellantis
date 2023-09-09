import React, {
  useCallback,
  useEffect,
  useState,
  createRef,
} from 'react';
import Stories from 'react-insta-stories';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {
  ActionContainer,
  ArrowContainer,
  ArrowBox,
  ChevronDown,
  Container,
  Divider,
  FiatTitle,
  JeepTitle,
  Mask,
  Next,
  NextContainer,
} from './styles';
import { Colors } from '../../styles';
import images from '../../assets/images/Icons/hand.svg';

const StoriesComponent = ({ stories, defaultInterval }) => {
  const containerRef = createRef();
  const handleSection = useCallback(section => {
    const sectionElement =
      document.getElementById(section).offsetTop;

    window.scrollTo(0, sectionElement);
  }, []);
  useEffect(() => {
    const { current: container } = containerRef;
    const { children: containerChildren } = container || {};
    const [storiesContainer] = containerChildren || [];
    const { children: storiesChildren } = storiesContainer || {};
    const [storiesHeader] = storiesChildren || [];
    const { children: storiesHeaderChildren } =
      storiesHeader || {};

    // Condicional para estilizar o header dos stories
    if (storiesHeaderChildren && storiesHeaderChildren.length) {
      // eslint-disable-next-line no-restricted-syntax
      for (const item of storiesHeaderChildren) {
        const { children: itemChildren } = item || {};
        item.style.height = '5px';
        item.style.marginRight = '4px';
        item.style.marginTop = '7px';
        item.style.borderRadius = 0;

        const [itemComponent] = itemChildren || [];
        itemComponent.style.background = Colors.primary;
        itemComponent.style.borderRadius = 0;
      }
    }
  }, [containerRef]);

  const [screens, setScreens] = useState([]);
  const [current, setCurrent] = useState(0);
  const [tempStorie, setTempStorie] = useState(0);
  const [pausedStorie, setPausedStorie] = useState(0);

  const renderScreen = useCallback(() => {
    stories.map((item, index) => {
      console.log('item:', item);
      const screen = {
        content: ({ action, isPaused }) => {
          // Adaptação para pausar o storie
          useEffect(() => {
            if (isPaused === true) {
              setTempStorie(999999999);
              action('play');
            }

            if (item !== stories[0] && isPaused === true) {
              action('play');
              setTempStorie(12000);
            }
          }, [tempStorie, pausedStorie]);

          return (
            <Container
              key={`stories-${index}-${item.id}`}
              background={item?.imageMobile}
              id="compass-2022"
            >
              {item.id === 1 ? (
                <div className="TitleSymbols">
                  <div className="scroll-to">
                    <legend>
                      Toque e veja as novidades
                      <img
                        alt="clique e saiba mais"
                        src={images}
                      />
                    </legend>
                  </div>
                  <FiatTitle highlighted={item?.highlighted}>
                    <h1>
                      {item?.head?.title}
                      <br />
                      {item?.head?.titleAux ?? ''}
                    </h1>
                    <Divider />
                    {!!item?.description?.text && (
                      <p
                        width={item?.description?.width}
                        dangerouslySetInnerHTML={{
                          __html: item.description.text,
                        }}
                      />
                    )}
                  </FiatTitle>
                </div>
              ) : (
                <FiatTitle highlighted={item?.highlighted}>
                  <h1>{item?.head?.title} </h1>
                  <Divider />
                  {!!item?.description?.text && (
                    <p
                      width={item?.description?.width}
                      dangerouslySetInnerHTML={{
                        __html: item.description.text,
                      }}
                    />
                  )}
                </FiatTitle>
              )}
              <NextContainer>
                <Next align={item?.action?.align}>
                  {item?.action?.text ||
                  item?.action?.align === 'center' ? (
                    <>
                      {/* <ActionContainer>
                        <div>
                          <span>
                            {item?.action?.text}{' '}
                            <img
                              src={images.HandIcon}
                              alt={item.imageAlt}
                              title={item.imageAlt}
                            />
                          </span>
                        </div>
                      </ActionContainer> */}
                      <ArrowContainer>
                        <ChevronDown />
                      </ArrowContainer>
                    </>
                  ) : (
                    <ArrowContainer>
                      <ChevronDown />
                    </ArrowContainer>
                  )}
                </Next>
              </NextContainer>
              <Mask />
            </Container>
          );
        },
      };

      return setScreens(rest => [...rest, screen]);
    });
  }, [stories]);

  useEffect(() => {
    renderScreen();
  }, [renderScreen]);

  if (screens.length < 1) {
    return <h2>Carregando...</h2>;
  }

  return (
    <div
      id="renegade-70"
      style={{ width: '100vw' }}
      ref={containerRef}
    >
      <Stories
        stories={screens}
        defaultInterval={defaultInterval ?? tempStorie}
        width="100vw"
        height="calc(100vh - 120px)"
        storyContainerStyles={{
          top: '42px',
        }}
        onStoryStart={(s, st) => {
          const direction = () => {
            if (s > current) {
              setCurrent(s);
              return 'proximo';
            }

            setCurrent(s);
            return 'anterior';
          };

          switch (s) {
            case 0:
              if (current === 0) {
                break;
              }

              return window.dataLayer.push({
                event: 'interaction',
                segment: 'landing-page',
                product: 'compass-2022',
                path: 'home',
                interactionType: 'clique',
                pageSection: 'conteudo',
                pageSubsection: 'stories',
                elementCategory: stories[s].head.title
                  .replace(/\s/g, '-')
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLocaleLowerCase(),
                element: direction(),
              });

            case 1:
              return window.dataLayer.push({
                event: 'interaction',
                segment: 'landing-page',
                product: 'compass-2022',
                path: 'home',
                interactionType: 'clique',
                pageSection: 'conteudo',
                pageSubsection: 'compass-4xe',
                // pageSubsection: stories[s].head.title
                //   .replace(/\s/g, '-')
                //   .normalize('NFD')
                //   .replace(/[\u0300-\u036f]/g, '')
                //   .toLocaleLowerCase(),
                elementCategory: 'stories',
                element: direction(),
              });

            case 2:
              return window.dataLayer.push({
                event: 'interaction',
                segment: 'landing-page',
                product: 'compass-2022',
                path: 'home',
                interactionType: 'clique',
                pageSection: 'conteudo',
                pageSubsection: 'compass-4xe',
                // pageSubsection: stories[s].head.title
                //   .replace(/\s/g, '-')
                //   .normalize('NFD')
                //   .replace(/[\u0300-\u036f]/g, '')
                //   .toLocaleLowerCase(),
                elementCategory: 'stories',
                element: direction(),
              });

            case 3:
              return window.dataLayer.push({
                event: 'interaction',
                segment: 'landing-page',
                product: 'compass-2022',
                path: 'home',
                interactionType: 'clique',
                pageSection: 'conteudo',
                pageSubsection: 'compass-4xe',
                // pageSubsection: stories[s].head.title
                //   .replace(/\s/g, '-')
                //   .normalize('NFD')
                //   .replace(/[\u0300-\u036f]/g, '')
                //   .toLocaleLowerCase(),
                elementCategory: 'stories',
                element: direction(),
              });

            case 4:
              return window.dataLayer.push({
                event: 'interaction',
                segment: 'landing-page',
                product: 'compass',
                path: 'home',
                interactionType: 'clique',
                pageSection: 'conteudo',
                pageSubsection: 'compass-4xe',
                // pageSubsection: stories[s].head.title
                //   .replace(/\s/g, '-')
                //   .normalize('NFD')
                //   .replace(/[\u0300-\u036f]/g, '')
                //   .toLocaleLowerCase(),
                elementCategory: 'stories',
                element: direction(),
              });

            default:
              break;
          }

          return null;
        }}
        loop
      />
    </div>
  );
};

export default StoriesComponent;
