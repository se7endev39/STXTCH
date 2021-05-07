import RoundImage from 'components/RoundImage'
import styles from './index.module.scss'

const Gallery = ({data}) => {

    return (
        <div className={styles.Gallery + " flex"}>
            <div className={styles.wrapper + " flex"}>
                {
                    data?.map( (each, index) => (
                        <RoundImage key={index} src={each} className="pr-4 image-keep-orig"/>
                    ))
                }
            </div>
        </div>
    )
}

export default Gallery