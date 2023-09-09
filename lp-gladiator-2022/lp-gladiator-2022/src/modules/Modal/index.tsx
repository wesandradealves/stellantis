import React, { useState, useEffect } from "react";
// import Image from "next/image";

import { Form } from "../../modules";
import { Image } from "../../components";

import { ModalProps } from "../../interfaces";

import icoCloseYellow from "../../assets/ico-close-yellow.svg";
import icoCloseError from "../../assets/ico-close-error.svg";
import icoCloseWhite from "../../assets/ico-close-white.svg";
import icoClose from "../../assets/ico-close.svg";
import icoSmile from "../../assets/ico-smile.svg";
import icoSad from "../../assets/ico-sad.svg";

import styles from "./styles.module.scss";

const Modal = ({ setShowModal }: ModalProps) => {
  const [showFeedback, setShowFeedback] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    });

    return () => {
      document.removeEventListener("keydown", handleCloseModal);
    };
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseFeedbackError = () => {
    setShowFeedback("");
  };

  return (
    <div className={styles.modal}>
      {showFeedback === "" && (
        <div className={styles.container}>
          <ButtonClose feedback={showFeedback} onClick={handleCloseModal} />
          <h3>
          Preencha o formulário abaixo e prepare-se para <br />conhecer todos os detalhes da sua nova Jeep Gladiaitor
          </h3>
          <Form setShowFeedback={setShowFeedback} />
        </div>
      )}

      {showFeedback === "success" && (
        <ModalFeedback
          feedback={showFeedback}
          text="Sucesso! <br /><span>Deu tudo certo com a sua solicitação.<br />Aguarde e em breve entraremos em contato.</span>"
          onClick={handleCloseModal}
        />
      )}

      {showFeedback === "error" && (
        <ModalFeedback
          feedback={showFeedback}
          text="Algo deu errado<br /><span>ao enviar seus dados. <br />Por favor, tente novamente.</span>"
          onClick={handleCloseFeedbackError}
        />
      )}
    </div>
  );
};

export default Modal;

interface ModalFeedbackProps {
  feedback: string;
  text: string;
  onClick: () => void;
}

const ModalFeedback = ({ feedback, text, onClick }: ModalFeedbackProps) => {
  return (
    <div
      className={`${styles.container} ${styles.containerFeedback} ${
        feedback === "success" ? styles.success : styles.error
      }`}
    >
      <ButtonClose feedback={feedback} onClick={onClick} />
      <Image src={feedback === "success" ? icoSmile.src : icoSad.src} alt="ícone" className={styles.icon} />
      <h3 dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

interface ButtonCloseProps {
  feedback: string;
  onClick: () => void;
}

const ButtonClose = ({ feedback, onClick }: ButtonCloseProps) => {
  return (
    <button className={styles.close} onClick={onClick}>
      <Image
        src={feedback === "error" ? icoCloseWhite.src : icoClose.src}
        // src={icoClose.src}
        alt="fechar"
      />
    </button>
  );
};
