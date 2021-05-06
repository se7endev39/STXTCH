import React, { useEffect, useState } from "react";
import Link from 'next/link';
import Logo from "../../../assets/images/logo.svg";
import More from "../../../assets/images/more.svg";

export default (props) => {

  const [pageName, setPageName] = useState("");
  useEffect(() => {  
    var path = window.location.pathname;
    var pn = path.split("/").pop();
    setPageName(pn);
  })
  if (process.browser) {
  }

  return (
    <nav className="flex-wrap top-nav">
      <div className="flex items-start xl:items-center justify-between ">
        <div className="flex relative nav-logo">
          <Link href="/"><img className="cursor-pointer logo" src={Logo} alt="Logo" /></Link>
        </div>
        <div className="flex items-end dropdown-btn"><img className="cursor-pointer" src={More} alt="More" /></div>
      </div>
    </nav>
  );
}