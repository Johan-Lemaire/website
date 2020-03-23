import React, { useState, useEffect,} from "react";

import homeStyles from "./home.module.scss";
import logo3d from "../../ressources/images/logo3d.gif";

const Home = () => {
  const [gif, setGif,] = useState("");

  useEffect(() => {
    setGif(logo3d);
  });

  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.home}>
        <div className={homeStyles.home_title}>
          <p className={homeStyles.home_title_firstSentence}>Bonjour,</p>
          <p className={homeStyles.home_title_secondSentence}>Je suis <span className={homeStyles.home_title_letter}>J</span>ohan,</p>
          <p className={homeStyles.home_title_thirdSentence}>Développeur Web</p>
        </div>
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
