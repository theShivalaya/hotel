import React, { useState, useEffect } from "react";
import "../../assests/css/header.css";
import { CSSTransition } from "react-transition-group";
import MenuIcon from '@material-ui/icons/Menu';

export default function Header({active}) {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };
  
  var [activeBar,setActive] = useState(active)
  useEffect(() => {
    setActive(active)
  }, [active])

  return (
    <header className="Header">
      {/* <img src={require("../assets/logo.png")} className="Logo" alt="logo" /> */}
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/hotel/#/"            className={"" + (activeBar=="Home"?'active':'')}>Home</a>
          <a href="/hotel/#/rooms"       className={"" + (activeBar=="Rooms"?'active':'')}>Rooms</a>
          <a href="/hotel/#/activities"  className={"" + (activeBar=="Activities"?'active':'')}>Activites</a>
          <a href="/hotel/#/restaurant"  className={"" + (activeBar=="Resturant"?'active':'')}>Restaurant</a>
          <a href="/hotel/#/gallery"     className={"" + (activeBar=="Gallery"?'active':'')}>Gallery</a>
          <a onClick ={()=>{
            var elmnt = document.getElementById("contactus");
            elmnt.scrollIntoView();
          }}className="last">Contact us</a>
          
          {/* <button>Logout</button> */}
        </nav>
      </CSSTransition>
      <a href="/" className="phone">SHIVALAYA<span> RESORT</span></a>
      <button onClick={toggleNav} className="Burger">
        <MenuIcon style={{color:"white", fontSize:"40"}}/>
      </button>
    </header>
  );
}
