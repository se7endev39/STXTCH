import React from 'react'

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