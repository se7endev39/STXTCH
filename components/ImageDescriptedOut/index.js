import React from 'react'
import styles from './index.module.scss'
import RoundImage from 'components/RoundImage'

const Image = ({src, comment, stories}) => {
    return (
        <div className="m-auto pb-4" style={{width: "90%"}}>
            <RoundImage src={src} className={styles.Image_img} />
            <div className="flex justify-between">
                <div className={styles.Image_comment}>#{comment}</div>
                <div className={styles.Image_stories}>{stories.toLocaleString("en")} stories</div>
            </div>
        </div>
    )
}

export default Image