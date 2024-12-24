import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import Logo from "../../assets/logo-fb.png";
import { useLocation, useNavigate } from "react-router-dom";
import PlayOnHome from "../../components/PlayOnHome/PlayOnHome"
import fbTheme from "../../assets/music.mp3"


const Navbar = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const redirectToHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  };
  

  return (
    <div className={`page-container`}>
      <nav className="navbar bg-success shadow-lg fixed-top">

        <div className="container d-flex justify-content-between align-items-center">
        <button className="btn btn-primary" onClick={redirectToHome}>
          <i className="material-icons">home</i>
        </button>
        <PlayOnHome audioSrc={fbTheme} />
 

          <img 
            src={Logo} 
            alt="Logo" 
            className={`logo navbar-logo`} 
          />
          
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
