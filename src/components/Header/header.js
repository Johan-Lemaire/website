import React from "react";
import {Link,} from "gatsby";

const Header = () => (
  <nav>
    <ul>
      <li><Link to="/">Accueil</Link></li>
      <li><Link to="/about">A propos de moi</Link></li>
      <li><Link to="/projects">Projets</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Header;