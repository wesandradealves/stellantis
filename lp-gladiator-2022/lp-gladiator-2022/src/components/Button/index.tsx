import React from "react";
// import Image from "next/image";

import { Image } from "../../components";

import icoArrowRight from "../../assets/ico-arrow-right.png";

import styles from "./styles.module.scss";

interface ButtonProps {
  to?: string | undefined;
  model?: "link" | "button";
  target?: string;
  children: JSX.Element | string;
  onClick?: () => void;
}

const Button = ({
  to,
  model = "link",
  target,
  children,
  onClick,
  ...args
}: ButtonProps) => {
  return model === "link" ? (
    <a
      href={!onClick !== undefined ? to : undefined}
      target={target}
      className={styles.container}
      onClick={onClick}
      {...args}
    >
      <span className={styles.text}>
        {children}
        <div className={styles.ico}>
          <Image src={icoArrowRight.src} alt="Saíba mais" />
        </div>
      </span>
    </a>
  ) : (
    <button className={styles.container}
      onClick={onClick} {...args}
    >
      <span className={styles.text}>
        {children}
        <div className={styles.ico}>
          <Image src={icoArrowRight.src} alt="Saíba mais" />
        </div>
      </span>
    </button>
  );
};

export default Button;
