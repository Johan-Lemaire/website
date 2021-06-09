import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/header";
import Particles from 'react-particles-js';

import "../../styles/reset.css";
import "../../styles/global.scss";
import layoutStyles from "./layout.module.scss";

const Layout = ({children,}) => {

  return (
    <div className={layoutStyles.container}>
      <Header />
      <main className={layoutStyles.container_main}>
        {children}
        <Particles 
          className={layoutStyles.container_main_particles}
          params={{
            "particles": {
              "number": {
                "value": 60,
                "density": {
                  "enable": true,
                  "value_area": 1500,
                },
              },
              "line_linked": {
                "enable": true,
                "opacity": 0.02,
              },
              "move": {
                "direction": "right",
                "speed": 0.05,
              },
              "size": {
                "value": 1,
              },
              "opacity": {
                "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0.05,
                },
              },
            },
            "interactivity": {
              "events": {
                "onclick": {
                  "enable": true,
                  "mode": "push",
                },
              },
              "modes": {
                "push": {
                  "particles_nb": 1,
                },
              },
            },
            "retina_detect": true,
          }}
        />
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
