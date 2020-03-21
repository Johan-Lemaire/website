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
        <h1 className={indexStyles.home_title}>Bonjour,<br />Je suis Johan, <br />Développeur Web</h1>
        <p className={indexStyles.home_text}>Développeur Front End - React</p>
        <button className={indexStyles.home_button}>Me contacter</button>
        <button className={indexStyles.home_button}>Télécharger cv</button>
      </div>
      <img style={{ width:"20%", display: "block", margin: "auto",}} src={gif}></img>
    </>
  );
};
    
export default Index;
