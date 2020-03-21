import React, { useState,} from "react";
import {Link,} from "gatsby";
/* import {FaHome, FaUserTie,} from "react-icons/fa";
import {MdComputer, MdContactMail,} from "react-icons/md"; */
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineMail,
  // AiOutlineLinkedin,
  // AiOutlineTwitter,
  // AiOutlineFacebook,
} from "react-icons/ai";

import {GiHamburgerMenu,} from "react-icons/gi";

import headerStyles from "./header.module.scss";
import logo from "../../ressources/images/logo.png";

const Header = () => {

  const [menuStatus, setMenuStatus,] = useState("");

  const showMenu = () => {
    if (menuStatus === "") {
      setMenuStatus(`${headerStyles.navigation_bar_show}`);
    } else {
      setMenuStatus("");
    }
  };
  
  return (
    <div className={headerStyles.navigation}>
      <div className={headerStyles.navigation_header}>
        <Link to="/" className={headerStyles.navigation_header_logoText}>
          <img src={logo} alt="logo du site" className={headerStyles.navigation_header_logoText_img}></img>
          <p>Johan</p>
        </Link>
        <GiHamburgerMenu className={headerStyles.navigation_header_burgerIcon} onClick={showMenu}/>
      </div>
      <nav className={`${headerStyles.navigation_bar} ${menuStatus}`}>
        <ul className={headerStyles.navigation_bar_list}>
          <li>
            <Link 
              to="/" 
              activeClassName={headerStyles.navigation_bar_list_link_active}
              className={headerStyles.navigation_bar_list_link}
              data-hover="ACCUEIL"
            >
              <AiOutlineHome className={headerStyles.navigation_bar_list_link_icon} />
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              activeClassName={headerStyles.navigation_bar_list_link_active}
              className={headerStyles.navigation_bar_list_link} 
              data-hover="A&nbsp;PROPOS"
            >
              <AiOutlineUser className={headerStyles.navigation_bar_list_link_icon} />
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              activeClassName={headerStyles.navigation_bar_list_link_active}
              className={headerStyles.navigation_bar_list_link}
              data-hover="PROJETS"
            >
              <AiOutlineEye className={headerStyles.navigation_bar_list_link_icon} />
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              activeClassName={headerStyles.navigation_bar_list_link_active}
              className={headerStyles.navigation_bar_list_link} 
              data-hover="CONTACT"
            >
              <AiOutlineMail className={headerStyles.navigation_bar_list_link_icon} />
            </Link>
          </li>
        </ul>
        {/* <ul className={headerStyles.navigationBar_socialList}>
          <li>
            <a>
              <AiOutlineLinkedin />
            </a>
          </li>
          <li>
            <a>
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a>
              <AiOutlineFacebook />
            </a>
          </li>
        </ul> */}
      </nav>
    </div>  
  );
};


export default Header;