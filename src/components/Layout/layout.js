import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/header";

import "../../styles/reset.css";
import "../../styles/fonts/fonts.css";

const Layout = ({children,}) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
);


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
