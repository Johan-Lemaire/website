import React from "react";
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

import headerStyles from "./header.module.scss";

const Header = () => (
  <>
    <nav className={headerStyles.navigationBar}>
      
      <ul className={headerStyles.navigationBar_list}>
        <li>
          <Link 
            to="/" 
            activeClassName={headerStyles.navigationBar_list_link_active}
            className={headerStyles.navigationBar_list_link} 
            data-hover="ACCUEIL"
          >
            <AiOutlineHome className={headerStyles.navigationBar_list_link_icon} />
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            activeClassName={headerStyles.navigationBar_list_link_active}
            className={headerStyles.navigationBar_list_link} 
            data-hover="A&nbsp;PROPOS"
          >
            <AiOutlineUser className={headerStyles.navigationBar_list_link_icon} />
          </Link>
        </li>
        <li>
          <Link 
            to="/projects" 
            activeClassName={headerStyles.navigationBar_list_link_active}
            className={headerStyles.navigationBar_list_link}
            data-hover="PROJETS"
          >
            <AiOutlineEye className={headerStyles.navigationBar_list_link_icon} />
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            activeClassName={headerStyles.navigationBar_list_link_active}
            className={headerStyles.navigationBar_list_link} 
            data-hover="CONTACT"
          >
            <AiOutlineMail className={headerStyles.navigationBar_list_link_icon} />
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
  </>
);

export default Header;