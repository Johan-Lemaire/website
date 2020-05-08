import React from "react";
import Typical from "react-typical";
import { Link, } from "gatsby";
import Logo from "../../ressources/images/logo_animation.svg";

import homeStyles from "./home.module.scss";
import "./home.scss";

const Home = () => {

  const completeSentence = "Bonjour !, Je suis Johan, Développeur Web";
  const allCharacters = completeSentence.split("");

  let stepTimer = 200;

  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.home}>
        <h1 className={homeStyles.home_title}>
          <p>
            {allCharacters.map((character) => {
              stepTimer += 80;
              switch(character) {
              case ",":
                return <br></br>;
              case " ":
                return " ";
              case "J":
                return (
                  <Typical
                    key={stepTimer}
                    className= {`${homeStyles.home_title_letter} ${homeStyles.styles_typicalWrapper__1_Uvh}`}
                    steps={[ stepTimer, character,]}
                    loop={1}
                    wrapper="span"
                  />
                );
              default:
                return (
                  <Typical
                    key={stepTimer}
                    className= {`bounce ${homeStyles.styles_typicalWrapper__1_Uvh} ${homeStyles.home_title_white}`}
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
        <p className={homeStyles.home_text}>Développeur Front End - React</p>
        <div className={homeStyles.home_buttons}>
          <Link to="/me-contacter"><button className={homeStyles.home_buttons_button}>Me contacter</button></Link>
          <button className={homeStyles.home_buttons_button}>Telecharger cv</button>
        </div>
      </div>
      <Logo className={homeStyles.gif}/>
    </div>
  );
};
    
export default Home;
