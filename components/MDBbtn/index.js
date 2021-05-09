import React from 'react'
import styles from './index.module.scss'

const MDBBtn = ({ className, children, dropdown, ...rest}) => {
  return (
    <div className={"wrapper " + dropdown?styles.dropdown: ""}>
      <button className={className + " MDBbtn"} {...rest}>
        {
          children
        }
      </button>
      { 
        dropdown &&
        <div className={styles.dropdown_Content}>
          {
            ["tag1", "tag2", "tag3"].map( (tag, i) => (
              <li key={i}>
                {tag}
              </li>
            ))
          }
        </div>
      }
    </div>
  )
}

export default MDBBtn