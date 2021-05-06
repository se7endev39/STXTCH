import React from 'react';
import MDBBtn from './MDBbtn'

const title = "DearMusicIn TheMaking"
const stories = 123

function Footer() {
    return (
        <div className="pb-4 px-4">
            <div className="py-3" style={{fontSize: 18, fontWeight: "bold"}}>
                FEATURED GROUP
            </div>
            <div className="featured_group_title">
                #{title}
            </div>
            <div className="featured_group_stories py-3">
                {stories} Stories Told
            </div>
            <MDBBtn color="elegant" className="MDBbtn btn-radius-10">
                group stories
            </MDBBtn>
            <div className="featured_group_detail">

            </div>

        </div>
    )
}

export default Footer;