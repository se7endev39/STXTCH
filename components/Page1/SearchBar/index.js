import React, {useState} from 'react';
import search_icon from "assets/images/search.svg";
import cross_icon from "assets/images/cross.svg";
import styles from './index.module.scss'

function SearchBar() {

  const [query, setQuery] = useState("")

  
  const onChange = (event) => {
    let newQuery = event.target.value
    setQuery(newQuery)
  }

  return (
    <div>
      <div className="flex justify-center items-center pb-2">
        <img src={query?cross_icon:search_icon}/>
        <input className={styles.searchtext} onChange={onChange} placeholder="SEARCH GROUPS" value={query}/>
      </div>
      <div className="divider" />
    </div>
  );
}

export default SearchBar