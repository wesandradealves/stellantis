import React from 'react'
import styles from "./styles.module.scss";
import { data } from "./data"
import YoutubeVideoModal from '../../../components/YoutubeVideoModal'

interface IYoutubeCard {
    title?: string
    description?: string
}

const YoutubeCard = () => {
    const { title, description }: IYoutubeCard = data

    return (
        <div className={styles.cardContent}>
            <h4>{title}</h4>
            <p>
                {description}
            </p>
            <div>
                <YoutubeVideoModal youtubeVideoID="1Mp5lSR1bwM" />
            </div>
        </div>
    )
}

export default YoutubeCard