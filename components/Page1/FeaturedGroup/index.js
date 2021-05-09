import React from 'react';
import MDBBtn from 'components/MDBbtn'
import styles from './index.module.scss'
import RoundImage from 'components/RoundImage'

const data_fake = [
  {
    title: "DearMusicIn TheMaking",
    stories: 123,
    detail_text: "<div style='font-size:57px;color:#8C98EA;font-family:Tiempos Headline;margin-bottom:-29px;'>“</div>I felt more connected with myself the moment I stopped making my life a show for others.",
    image: "/images/page1/12.svg",
    play: true
  },
  {
    title: "UW-White water",
    stories: 546,
    detail_text: "I've never seen an exercise break down barriers faster than this one.",
    image: "/images/page1/13.svg"
  },
  {
    title: "UW- Parkside",
    stories: 123,
    detail_text: "I felt more connected with myself the moment I stopped making my life a show for others.",
    image: "/images/page1/14.svg",
    play: true
  }
]

const FeaturedItem = ({title, stories, detail_text, image, play}) => {
  return (
    <div>
      <div className="py-3" style={{fontSize: 18, fontWeight: "bold"}}>
        FEATURED GROUP
      </div>
      <div className={styles.title}>
        #{title}
      </div>
      <div className={styles.description + " py-3"}>
        {stories} Stories Told
      </div>
      <MDBBtn color="elegant" className="black btn-radius-10">
        group stories
      </MDBBtn>
      <div className={"pt-4 flex " + styles.detail}>
        <RoundImage src={image} play={play} className="image-keep-orig"/>
        <div className={styles.detail_text} dangerouslySetInnerHTML={{__html: detail_text}}>
        </div>
      </div>

    </div>
  )
}

const FeaturedGroup = (props) => {
  let data = props.data
  if( !data ) data = data_fake
  return (
    <div className={"pt-6 pb-12 px-4 flex " + styles.FeaturedGroup} style={{overflowX: "auto"}}>
      {
        data.map((each, index) => (
          <div className="flex" key={index}>
          {
            index > 0 &&
              <div className={styles.splitter}/>
          }
            <FeaturedItem {...each}  />
          </div>
        ))
      }
    </div>
  )
}

export default FeaturedGroup;