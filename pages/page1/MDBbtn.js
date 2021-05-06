import React from 'react'

export default (props) => {
    return (
        <button className={props.className + " MDBbtn"}>
            {
                props.children
            }
        </button>
    )
}