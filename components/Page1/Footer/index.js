import styles from './index.module.scss'
import MDBBtn from 'components/MDBbtn'
import Gallery from 'components/Page1/Gallery'

const data_fake = [
    "/images/page1/20.svg",
    "/images/page1/20.svg",
    "/images/page1/20.svg"
]

const Footer = (props) => {
    let data = props.data
    if(!data) data = data_fake
    return (
        <div className={styles.Footer + " px-5 pt-12 pb-10"}>
            <div className={styles.title + " pb-8"}>
                What inspires you to write your story?
            </div>
            <MDBBtn color="elegant" className="black btn-radius-10">
                about stxtch
            </MDBBtn>
            <Gallery data={data}/>
        </div>
    )
}

export default Footer