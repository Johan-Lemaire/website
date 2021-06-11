import React from "react";
import Typical from "react-typical";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Logo from "../../ressources/images/logo_animation.svg";

import homeStyles from "./home.module.scss";
import "./home.scss";

const Home = () => {

  const pageTitle = "Bonjour, Je suis Johan, Développeur Web";
  const allCharacters = pageTitle.split("");

  let stepTimer = 200;

  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.container_home}>
        <h1 className={homeStyles.container_home_title}>
          <p>
            {allCharacters.map((character) => {
              stepTimer += 50;
              switch(character) {
              case ",":
                return <br></br>;
              case " ":
                return " ";
              case "J":
                return (
                  <Typical
                    key={stepTimer}
                    className= {`${homeStyles.container_home_title_letter} ${homeStyles.styles_typicalWrapper__1_Uvh}`}
                    steps={[ stepTimer, character,]}
                    loop={1}
                    wrapper="span"
                  />
                );
              default:
                return (
                  <Typical
                    key={stepTimer}
                    className= {`bounce ${homeStyles.styles_typicalWrapper__1_Uvh} ${homeStyles.container_home_title_white}`}
                    style= {{color: "white",}}
                    steps={[ stepTimer, character,]}
                    loop={1}
                    wrapper="span"
                  />
                );
              }
            })}
          </p>
        </h1>
        <p className={homeStyles.container_home_text}>Développeur Front End - React</p>
        <div className={homeStyles.container_home_buttons}>
          <AniLink
            paintDrip
            duration={1}
            hex="#111111"
            to="/me-contacter"
          >
            <button className={homeStyles.container_home_buttons_button}>Me contacter</button>
          </AniLink>
          <button className={homeStyles.container_home_buttons_button}>Telecharger cv</button>
        </div>
      </div>
      <Logo className={homeStyles.container_gif}/>
    </div>
  );
};
    
export default Home;
