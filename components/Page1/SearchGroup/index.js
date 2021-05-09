import React, { useState } from 'react';
import down_icon from "assets/images/down.svg";
import MDBBtn from 'components/MDBbtn';
import SearchItem from 'components/ImageDescriptedOut';
import SearchBar from '../SearchBar';
import styles from './index.module.scss'
import FeaturedGroup from '../FeaturedGroup';
import debounce from 'lodash/debounce'

function Filter() {
  return (
    <div className={"pt-6 px-2 " + styles.Filter}>
      <div className="w-max-content">
        <MDBBtn color="elegant" className="black btn-radius-40"> View All </MDBBtn>
        <MDBBtn color="elegant" outline className="outline btn-radius-40"> Tags <img src={down_icon} className="down_icon"/> </MDBBtn>
        <MDBBtn color="elegant" outline className="outline btn-radius-40"> By Date </MDBBtn>
      </div>
    </div>
  )
}


function SearchResult({data}) {
  // insert FeatureGroup in results
  let insertPos = data.length / 3 * 2;
  let data_ = [...data]
  if(data.length > 5) 
    data_.splice(insertPos, 0, "FeaturedGroup")
  return (
    <div className="pt-4">
      {
        data_?.map( (each, index) => {
          return each == "FeaturedGroup"
          ? (
            <div key={"FeaturedGroup"}>
              <div className="divider border-grey"/>
              <FeaturedGroup />
              <div className="divider border-grey pb-12"/>
            </div>)
          : (<SearchItem key={index} {...each} />)
        } )
      }
    </div>
  )
}


const results_fake = [
  {
    src: "/images/page1/6.svg",
    comment: "LoveCampaign",
    stories: 125
  },
  {
    src: "/images/page1/7.svg",
    comment: "University of Wisconsin-WhiteWater",
    stories: 1035
  },
  {
    src: "/images/page1/8.svg",
    comment: "UWW-WhiteWater",
    stories: 25
  },
  {
    src: "/images/page1/9.svg",
    comment: "Astra-Zeneca-Research",
    stories: 3342,
    play: true
  },
  {
    src: "/images/page1/10.svg",
    comment: "UW-Parkside",
    stories: 125
  },
  {
    src: "/images/page1/11.svg",
    comment: "WhiteWater",
    stories: 105
  },
  {
    src: "/images/page1/15.svg",
    comment: "WhiteWater",
    stories: 101
  },
  {
    src: "/images/page1/16.svg",
    comment: "WhiteWater",
    stories: 101
  },
  {
    src: "/images/page1/17.svg",
    comment: "WhiteWater",
    stories: 101
  },
]

function SearchGroup(props) {

  let [results, setResults] = useState(results_fake)
  
  let onQueryChange = debounce((query) => {
    let results_filter = results_fake.filter( (result) => result.comment.toLowerCase().includes(query.toLowerCase()) )
    setResults(results_filter)
  }, 200)

  return (
    <div className="pb-10">
      <SearchBar onQueryChange={onQueryChange}/>
      <Filter />
      <SearchResult data={results}>
        { props.children }
      </SearchResult>
    </div>
  )
}

export default SearchGroup;