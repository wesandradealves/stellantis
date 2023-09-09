import React from "react";

import Image from "../Image";

import icoArrowLeft from "../../assets/ico-swiper-arrow-left.png";
import icoArrowRight from "../../assets/ico-swiper-arrow-right.png";
import icoArrowRightBrown from "../../assets/ico-swiper-arrow-right-brown.png";
import icoArrowLeftBrown from "../../assets/ico-swiper-arrow-left-brown.png";

import styles from "./styles.module.scss";

interface SwiperButtonProps {
  isNext?: boolean;
  isPrev?: boolean;
  kind?: string;
  onClick?: () => void;
  className?: string;
}

const SwiperButton = ({
  isNext = false,
  isPrev = false,
  kind,
  className,
  onClick,
}: SwiperButtonProps) => {
  let sense = "";
  let cssCustom = "";

  if (isNext) {
    sense = `swiper-button-next ${styles.buttonNext}`;
  }

  if (isPrev) {
    sense = `swiper-button-prev ${styles.buttonPrev}`;
  }

  if (kind === 'brown') {
    cssCustom = `${styles.btnPagination}`;
  }

  return (
    <button 
      className={`${styles.button} ${sense} ${className} ${cssCustom}`}
      onClick={onClick}
    >
      <div className={styles.ico}>
        {isNext && <Image src={kind === 'brown' ? icoArrowRightBrown.src : icoArrowRight.src} alt="Próximo" />}
        {isPrev && <Image src={kind === 'brown' ? icoArrowLeftBrown.src : icoArrowLeft.src} alt="Anterior" />}
      </div>
    </button>
  );
};

export default SwiperButton;