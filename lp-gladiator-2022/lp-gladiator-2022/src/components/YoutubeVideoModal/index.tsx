import React, { useState } from 'react'
import Modal from 'react-modal';
import ButtonClose from './ButtonClose';

import { IYoutubeVideoModal } from '../../interfaces';
import styles from "./styles.module.scss";

const customStyles = {
  content: {
    paddingTop: "2.5rem",
    width: "60%",
    /* height: "85%", */
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    background: "#303030",
    transform: "translate(-50%, -50%)"
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  }
};

const YoutubeVideoModal = ({ youtubeVideoID }: IYoutubeVideoModal) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <div className={styles.hyperlink}>
      <div className={styles.playButton}/>
        <a onClick={openModal}>
       <b>Assista</b> ao video.</a>
      </div>

      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ButtonClose onClick={closeModal} feedback={''}/>

        <div className={styles.videoWrapper}>
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoID}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </Modal>
    </div>
  )
}

export default YoutubeVideoModal