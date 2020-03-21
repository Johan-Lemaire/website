import React, { useState, useEffect,} from "react";

import logo3d from "../ressources/images/logo3d.gif";

const Index = () => {
  const [gif, setGif,] = useState("");

  useEffect(() => {
    setGif(logo3d);
  });

  return (
    <>
      <div>Accueil</div>
      <img style={{ width:"20%", display: "block", margin: "auto",}} src={gif}></img>
    </>
  );
};
    
export default Index;
