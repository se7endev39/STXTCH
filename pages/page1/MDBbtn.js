import React from 'react'

export default (props) => {
    return (
        <button className="MDBbtn">
            {
                props.children
            }
        </button>
    )
}