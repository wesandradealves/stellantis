import { useState } from 'react';
import iconplayer from '../../../assets/play-video.svg';
import { DataLayer } from '../../../components/Track/DataLayer/DataLayer';
import { DataPlayers } from '../../../mocks/DataPlayers';
import Modal from '../../../pages/Modal';
import styles from './Videos.module.scss';

export default function Videos() {
  const [indexSlide, setIndexSlide] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  function renderModal() {
    return (
      <Modal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        setInitialSlide={indexSlide}
      />
    );
  }

  return (
    <section className={styles.mainSection}>
      {modalOpen === true ? renderModal() : null}
      <h1 className={styles.title}>
        INOVAÇÃO QUE ENCHE OS OLHOS
      </h1>
      <h2 className={styles.subtitle}>
        Vocês pediram e a gente atendeu. Assista aos vídeos
        abaixo e sinta todo o poder do novo Jeep Compass 2023.
      </h2>

      <div className={styles.containerVideos}>
        {DataPlayers.map(data => {
          if (data) {
            return (
              <div
                style={{ backgroundImage: `url(${data.thumb})` }}
                className={styles.containerMiniPlayer}
                key={`videos-desktop-${data.id}`}
                alt={data.imageAlt}
                title={data.imageAlt}
                onClick={() => {
                  setIndexSlide(data.id);
                  setModalOpen(true);
                  renderModal(indexSlide);
                  DataLayer.push(
                    'CustomTrack',
                    'play',
                    'conteudo',
                    'inovacao-que-enche-os-olhos',
                    'card',
                    `video-${data.name}`,
                  );
                }}
              >
                <button
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  <img
                    alt="play"
                    className={styles.iconplayer}
                    src={iconplayer}
                  />
                </button>
                <h2 className={styles.timerMiniPlayer}>
                  {data.timer}
                </h2>
              </div>
            );
          }
          return undefined;
        })}
      </div>
    </section>
  );
}
