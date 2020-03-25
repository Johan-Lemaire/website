import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/header";

import "../../styles/reset.css";
import "../../styles/global.module.scss";
import layoutStyles from "./layout.module.scss";

const Layout = ({children,}) => {

  return (
    <div>
      <Header />
      <main className={layoutStyles.container}>{children}</main>
    </div>
  );
};



Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
