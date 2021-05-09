import React from 'react';
import styles from './index.module.scss';
import MDBBtn from 'components/MDBbtn'
import ImageCollection from 'components/Page1/ImageCollection';
import Verizon from 'components/Page1/Verizon';
import Statistics from 'components/Page1/Statistics'
import SearchGroup from 'components/Page1/SearchGroup';
import FeaturedGroup from 'components/Page1/FeaturedGroup'
import Footer from 'components/Page1/Footer';

const images = [
  {
    src: "/images/page1/1.png",
    width: "40%",
    title: "Love Returns",
    comment: ""
  },
  {
    src: "/images/page1/2.png",
    width: "40%",
    title: "Snezeks Never Quit",
    comment: "LoveCampaign"
  },
  {
    src: "/images/page1/3.png",
    width: "90%",
    title: "Fit in and Rule",
    comment: "Dear Verizon"
  },
  {
    src: "/images/page1/4.png",
    width: "40%",
    title: "This is Exactly My World",
    comment: "WhiteWater"
  },
  {
    src: "/images/page1/5.png",
    width: "40%",
    title: "I Wish I Would Have at Least Tried",
    comment: "WomenWhoWork"
  },
]

const statistics = {
  "Stories_Told": 4234,
  "Affirmations_Given": 423
}

function HomePage() {
  return (
    <div className="flex flex-grow 2xl:p-0 flex-col">
      <div className={styles.screen1}></div>
      <div className="divider"></div>
      <div className="mt-8">
        <div className={"px-4 m-auto lg:m-0 " + styles.slogan}>
          A powerful story can change the world.
        </div>
        <MDBBtn color="elegant" className="black btn-radius-10 ml-5 mt-4">
          explore stories
        </MDBBtn>
      </div>
      <ImageCollection images={images} />
      <Verizon />
      <Statistics statistics={statistics} />
      <SearchGroup />
      <div className="divider border-grey"></div>
      <FeaturedGroup />
      {/* <div className="divider border-grey"></div> */}
      <Footer />
    </div>
  );
}

export default HomePage;