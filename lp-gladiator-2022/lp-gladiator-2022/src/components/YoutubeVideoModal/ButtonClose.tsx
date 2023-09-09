
import { Image } from "..";
import icoCloseWhite from "../../assets/ico-close-white.svg";
import icoClose from "../../assets/ico-close.svg";
import styles from "./styles.module.scss";

interface ButtonCloseProps {
    feedback: string;
    onClick: () => void;
  }

const ButtonClose = ({ feedback, onClick }: ButtonCloseProps) => {
    return (
      <button className={styles.close} onClick={onClick}>
        <Image
          src={feedback === "error" ?  icoClose.src : icoCloseWhite.src}
        
          alt="fechar"
        />
      </button>
    );
  };

  export default ButtonClose