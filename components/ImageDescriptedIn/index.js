import styles from './index.module.scss'
import RoundImage from 'components/RoundImage'
const Image = ({width, src, title, comment}) => {
  return (
    <div className={styles.Image} style={{width}}>
    <RoundImage src={src}/>
    <div className={styles.Image_texts}>
      {title && (
      <div className={styles.Image_title}>{title}</div>
      )}
      { comment && (
      <div className={styles.Image_comment}>#{comment}</div>
      )}
    </div>
    </div>
  )
}

export default Image