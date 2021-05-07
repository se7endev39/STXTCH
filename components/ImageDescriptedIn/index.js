import styles from './index.module.scss'

const Image = ({width, src, title, comment}) => {
  return (
    <div className={styles.Image} style={{width}}>
    <img src={src} className="rounded-xl"></img>
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