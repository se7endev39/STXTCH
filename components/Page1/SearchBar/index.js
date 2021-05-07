import React from 'react';
import search_icon from "assets/images/search.svg";
import cross_icon from "assets/images/cross.svg";
import styles from './index.module.scss'

function SearchBar() {

  const onKeyPress = (event) => {
    if(event.keyCode == 13){
      event.preventDefault()
      return
    } 
  }

  return (
    <div>
      <div className="flex justify-center items-center pb-2">
        <img src={search_icon}/>
        <input className={styles.searchtext} onKeyPress={onKeyPress} placeholder="SEARCH GROUPS" />
      </div>
      <div className="divider" />
    </div>
  );
}

export default SearchBar