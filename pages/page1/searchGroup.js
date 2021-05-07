import React from 'react';
import search_icon from "../../assets/images/search.svg";
import down_icon from "../../assets/images/down.svg";
import MDBBtn from './MDBbtn'


function SearchBar() {
  return (
    <div className="searchbar">
      <div className="flex justify-center items-center pb-2">
        <img src={search_icon}/>
        <div className="searchtext">SEARCH GROUPS</div>
      </div>
      <div className="divider" />
    </div>
  );
}

function Filter() {
  return (
    <div className="pt-6 px-2">
      <div>
        <MDBBtn color="elegant" className="black btn-radius-40"> View All </MDBBtn>
        <MDBBtn color="elegant" outline className="outline btn-radius-40"> Tags <img src={down_icon} className="down_icon"/> </MDBBtn>
        <MDBBtn color="elegant" outline className="outline btn-radius-40"> By Date </MDBBtn>
      </div>
    </div>
  )
}

function SearchItem({src, comment, stories}) {
  return (
    <div className="m-auto pb-4" style={{width: "90%"}}>
      <img src={src} className="search_item_img"  style={{width: "-webkit-fill-available"}}/>
      <div className="search_item_caption flex justify-between">
        <div className="search_item_comment">#{comment}</div>
        <div className="search_item_stories">{stories.toLocaleString("en")} stories</div>
      </div>
    </div>
  )
}

const results = [
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
    stories: 3342
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
]

function SearchResult() {
  return (
    <div className="pt-4">
      {
        results?.map( (each, index) => (
          <SearchItem key={index} {...each} />
        ) )
      }
    </div>
  )
}

function SearchGroup() {
  return (
    <div className="pb-4">
      <SearchBar />
      <Filter />
      <SearchResult />
      <div className="divider mt-6" style={{borderColor:"#7C7D83"}}></div>
    </div>
  )
}

export default SearchGroup;