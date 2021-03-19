import React, { useState, useEffect } from "react";
import "../../assests/css/header.css";
import { CSSTransition } from "react-transition-group";
import MenuIcon from '@material-ui/icons/Menu';

export default function AdminHeader({parentCallback,active}) {
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
  const callback1 = ()=>{
    parentCallback("Bookings");
  }
  const callback2 = ()=>{
    parentCallback("pastBookings");
  }
  const callback3 = ()=>{
    parentCallback("addUser");
  }
  const callback4 = ()=>{
    parentCallback("changePass");
  }
  var [activeBar,setActive] = useState(active)
  useEffect(() => {
    setActive(active)
    console.log(active)
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
          <a  onClick={callback1} className={"" + (activeBar=="Bookings"?'active':'')}>Bookings</a>
          <a  onClick={callback2} className={"" + (activeBar=="pastBookings"?'active':'')}>Past Bookings</a>
          <a  onClick={callback3} className={"" + (activeBar=="addUser"?'active':'')}>Add User</a>
          <a  onClick={callback4} className={"" + (activeBar=="changePass"?'active':'')}>Change Password</a>
          <a  onClick={()=>{
            window.localStorage.removeItem('email');
            window.localStorage.removeItem('login');
            window.location.href = "/hotel/#/log-admin"
          }}>Logout</a>
        </nav>
      </CSSTransition>
      <a href="/" className="phone">SHIVALAYA<span> RESORT</span></a>
      <button onClick={toggleNav} className="Burger">
        <MenuIcon style={{color:"white", fontSize:"40"}}/>
      </button>
    </header>
  );
}
