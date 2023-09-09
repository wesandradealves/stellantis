import React from "react";

import { Button } from "../../components";

import styles from "./styles.module.scss";

interface AboutItemProps {
  category: string;
  categorySlug: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  link: string;
  labelLink: string;
  alt_seo?: string;
  title_seo?: string;
}

const AboutItem = (props: { data: AboutItemProps }) => {
  const item = props.data;

  return (
    <div className={`${styles.container} wrapper-general`}>
      <div className={styles.thumb}>
        <img src={item.image} alt={item.alt_seo} title={item.title_seo} />
      </div>
      <div className={styles.content}>
        <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
        <p className={styles.description}>{item.description}</p>
        {item.link && <Button to={item.link}>{item.labelLink}</Button>}
      </div>
    </div>
  );
};

export default AboutItem;
