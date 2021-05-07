import React from 'react'
import styles from './index.module.scss'
import RoundImage from 'components/RoundImage'

const Image = ({src, comment, stories, play}) => {
    return (
        <div className={"m-auto pb-4 " + styles.Image}>
            <RoundImage src={src} className={styles.Image_img + " w-full"} play={play} />
            <div className="flex justify-between py-2">
                <div className={styles.Image_comment}>#{comment}</div>
                <div className={styles.Image_stories}>{stories.toLocaleString("en")} stories</div>
            </div>
        </div>
    )
}

export default Image