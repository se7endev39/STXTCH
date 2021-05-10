import React, { useState } from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'

const MDBBtn = ({ className, children, dropdown, onSelect, ...rest}) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const dropDownClicked = (tag) => {
    if(onSelect) onSelect(tag)
    setShowDropdown(false)
  }
  return (
    <div className={"wrapper " + dropdown?styles.dropdown: ""}>
      <button className={className + " MDBbtn"}  onClick={() => setShowDropdown(!showDropdown)} {...rest}>
        {
          children
        }
      </button>
      { 
        dropdown &&
        <div className={classnames(styles.dropdown_Content, showDropdown?styles.active:"")}>
          {
            ["tag1", "tag2", "tag3"].map( (tag, i) => (
              <li key={i} onClick={dropDownClicked}>
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