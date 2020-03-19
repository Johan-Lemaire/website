import React, { useState, useEffect,} from "react";

import logo3d from "../ressources/images/logo3d.gif";

import "./video.css";

const Index = () => {
  const [gif, setGif,] = useState("");

  useEffect(() => {
    setGif(logo3d);
  });

  return (
    <>
      <div>Accueil</div>
      <img style={{ width:"15%",}} src={gif}></img>
    </>
  );
};
    
export default Index;
