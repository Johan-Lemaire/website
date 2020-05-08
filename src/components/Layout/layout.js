import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/header";

import "../../styles/reset.css";
import "../../styles/global.scss";
import layoutStyles from "./layout.module.scss";

const Layout = ({children,}) => {

  return (
    <div className={layoutStyles.container}>
      <Header />
      <main className={layoutStyles.container_main}>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
