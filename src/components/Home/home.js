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
        <h1 className={homeStyles.home_title}>
          <p>
            <span className={homeStyles.bounce}>B</span>
            <span className={homeStyles.bounce}>o</span>
            <span className={homeStyles.bounce}>n</span>
            <span className={homeStyles.bounce}>j</span>
            <span className={homeStyles.bounce}>o</span>
            <span className={homeStyles.bounce}>u</span>
            <span className={homeStyles.bounce}>r</span>
            <span className={homeStyles.bounce}>,</span>
          </p>
          <p>
            <span className={homeStyles.bounce}>J</span>
            <span className={homeStyles.bounce}>e&nbsp;</span>
            <span className={homeStyles.bounce}>s</span>
            <span className={homeStyles.bounce}>u</span>
            <span className={homeStyles.bounce}>i</span>
            <span className={homeStyles.bounce}>s&nbsp;</span>
            <span className={homeStyles.home_title_letter}>J</span>
            <span className={homeStyles.bounce}>o</span>
            <span className={homeStyles.bounce}>h</span>
            <span className={homeStyles.bounce}>a</span>
            <span className={homeStyles.bounce}>n</span>
            <span className={homeStyles.bounce}>,</span>
          </p>
          <p>
            <span className={homeStyles.bounce}>D</span>
            <span className={homeStyles.bounce}>é</span>
            <span className={homeStyles.bounce}>v</span>
            <span className={homeStyles.bounce}>e</span>
            <span className={homeStyles.bounce}>l</span>
            <span className={homeStyles.bounce}>o</span>
            <span className={homeStyles.bounce}>p</span>
            <span className={homeStyles.bounce}>p</span>
            <span className={homeStyles.bounce}>e</span>
            <span className={homeStyles.bounce}>u</span>
            <span className={homeStyles.bounce}>r&nbsp;</span>
            <span className={homeStyles.bounce}>W</span>
            <span className={homeStyles.bounce}>e</span>
            <span className={homeStyles.bounce}>b</span>
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
