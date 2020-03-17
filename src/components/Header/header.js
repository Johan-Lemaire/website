import React from "react";
import {Link,} from "gatsby";
import {FaHome, FaUserTie,} from "react-icons/fa";
import {MdComputer, MdContactMail,} from "react-icons/md";

import headerStyles from "./header.module.scss";

const Header = () => (
  <>
    <nav className={headerStyles.navigationBar}>
      <ul className={headerStyles.navigationBar_list}>
        <li>
          <Link 
            to="/" 
            className={headerStyles.navigationBar_list_link} 
            activeClassName={headerStyles.navigationBar_list_link_active}
          >
            <FaHome className={headerStyles.navigationBar_list_link_icon} />
            Accueil
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className={headerStyles.navigationBar_list_link} 
            activeClassName={headerStyles.navigationBar_list_link_active}
          >
            <FaUserTie className={headerStyles.navigationBar_list_link_icon} />
            A propos de moi
          </Link>
        </li>
        <li>
          <Link 
            to="/projects" 
            className={headerStyles.navigationBar_list_link}
            activeClassName={headerStyles.navigationBar_list_link_active}>
            <MdComputer className={headerStyles.navigationBar_list_link_icon} />
            Projets
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className={headerStyles.navigationBar_list_link} 
            activeClassName={headerStyles.navigationBar_list_link_active}
          >
            <MdContactMail className={headerStyles.navigationBar_list_link_icon} />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Header;