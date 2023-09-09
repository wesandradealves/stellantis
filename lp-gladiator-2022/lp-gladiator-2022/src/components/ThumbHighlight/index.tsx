import Image from "../Image";
import styles from "./styles.module.scss";

interface HighlightProps {
  slug: string;
  title: string;
  subTitle: string;
  description: string;
  label: string;
  thumb: string;
  image: string;
  link: string;
  alt_seo?: string;
  title_seo?: string;
}

const ThumbHighlight = (props: {
  data: HighlightProps;
  active: boolean;
  onClick: () => void;
}) => {
  const { data, active, onClick } = props;

  return (
    <>
      {data && data.thumb && (
        <div
          className={`${styles.container} ${active && styles.active}`}
          onClick={onClick}
        >
          <div className={styles.content}>
            <div className={styles.text}>
              <h4 dangerouslySetInnerHTML={{ __html: data.label }}></h4>
              <p dangerouslySetInnerHTML={{ __html: data.subTitle}}></p>
            </div>
            <Image src={data.thumb} alt={data.alt_seo} title={data.title_seo} />
          </div>
        </div>
      )}
    </>
  );
};

export default ThumbHighlight;
