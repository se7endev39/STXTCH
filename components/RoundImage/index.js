import styles from './index.module.scss'
import play_icon from 'assets/images/play.svg'

const RoundImage = ({src, alt, className, play}) => {
    return (
        <div className={styles.wrapper  + " " + (className?className:"")}>
            <img src={src} alt={alt} className={"rounded-xl w-full"} />
            {
                play && (
                    <img src={play_icon} className={styles.play}/>
                )
            }
        </div>
    )
}

export default RoundImage