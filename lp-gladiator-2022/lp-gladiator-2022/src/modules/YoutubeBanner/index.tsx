import React from 'react'
import styles from "./styles.module.scss";
import YoutubeCard from './YoutubeCard';

const YoutubeBanner = () => {
  return (
    <section>
      <div className={styles.container}>
          <div className={styles.leftItem}>
          </div>
          <div className={styles.rightItem}>
           <YoutubeCard/>
          </div>
      </div>
    </section>
  )
}

export default YoutubeBanner
