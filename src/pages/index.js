import React, { useState, useEffect,} from "react";

import indexStyles from "./index.module.scss";
import logo3d from "../ressources/images/logo3d.gif";

const Index = () => {
  const [gif, setGif,] = useState("");

  useEffect(() => {
    setGif(logo3d);
  });

  return (
    <>
      <div className={indexStyles.home}>
        <div className={indexStyles.home_title}>
          <p className={indexStyles.home_title_firstSentence}>Bonjour,</p>
          <p className={indexStyles.home_title_secondSentence}>Je suis <span className={indexStyles.home_title_name}><span className={indexStyles.home_title_name_letter}>J</span>ohan</span>,</p>
          <p className={indexStyles.home_title_thirdSentence}>Développeur Web</p>
        </div>
        <p className={indexStyles.home_text}>Développeur Front End - React</p>
        <div className={indexStyles.home_buttons}>
          <button className={indexStyles.home_buttons_button}>Me contacter</button>
          <button className={indexStyles.home_buttons_button}>Telecharger cv</button>
        </div>
      </div>
      <img className={indexStyles.gif} src={gif}></img>
    </>
  );
};
    
export default Index;
