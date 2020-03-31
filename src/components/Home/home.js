import React, { useState, useEffect,} from "react";
import Typical from "react-typical";

import homeStyles from "./home.module.scss";
import logo3d from "../../ressources/images/logo3d.gif";

const Home = () => {
  const [gif, setGif,] = useState("");

  useEffect(() => {
    setGif(logo3d);
  });

  const completeSentence = "Bonjour !, Johan Lemaire, Développeur Web";
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
                    className= {`${homeStyles.bounce} ${homeStyles.styles_typicalWrapper__1_Uvh}`}
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
          <button className={homeStyles.home_buttons_button}>Me contacter</button>
          <button className={homeStyles.home_buttons_button}>Telecharger cv</button>
        </div>
      </div>
      <img className={homeStyles.gif} src={gif}></img>
    </div>
  );
};
    
export default Home;
