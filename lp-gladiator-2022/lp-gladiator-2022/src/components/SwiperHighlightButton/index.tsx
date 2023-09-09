import React from "react";

import Image from "../Image";

import icoArrowLeft from "../../assets/ico-swiper-arrow-highlight-left.png";
import icoArrowLeftDisabled from "../../assets/ico-swiper-arrow-highlight-left-disabled.png";

import icoArrowRight from "../../assets/ico-swiper-arrow-highlight-right.png";
import icoArrowRightDisabled from "../../assets/ico-swiper-arrow-highlight-right-disabled.png";

import styles from "./styles.module.scss";

interface SwiperButtonProps {
  isNext?: boolean;
  isPrev?: boolean;
  onClick?: () => void;
  className?: string;
}

const SwiperHighlightButton = ({
  isNext = false,
  isPrev = false,
  className,
  onClick,
}: SwiperButtonProps) => {
  let sense = "";

  if (isNext) {
    sense = `swiper-button-highlight-next ${styles.buttonNext}`;
  }

  if (isPrev) {
    sense = `swiper-button-highlight-prev ${styles.buttonPrev}`;
  }

  return (
    <button 
      className={`${styles.button} ${sense} ${className}`}
      onClick={onClick}
    >
      <div className={styles.ico}>
        {isNext && <Image src={icoArrowRight.src} alt="Próximo" className={styles.btnEnabled} />}
        {isNext && <Image src={icoArrowRightDisabled.src} alt="Próximo" className={styles.btnDisabled} />}
        
        {isPrev && <Image src={icoArrowLeft.src} alt="Anterior" className={styles.btnEnabled} />}
        {isPrev && <Image src={icoArrowLeftDisabled.src} alt="Anterior" className={styles.btnDisabled} />}
      </div>
    </button>
  );
};

export default SwiperHighlightButton;
