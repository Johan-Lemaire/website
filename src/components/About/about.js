import React from "react";

import aboutStyles from "./about.module.scss";

const About = () => {

  return (
    <div className={aboutStyles.container}>
      <h1>A propos</h1>
      <p>
        Professionnellement connecté au monde du développement web depuis une année.
      </p>
      <p>
        Je suis une personne bien organisé dans son travail qui est sensible au rendu final et a le souci du détail.
        Je suis passionné par l&apos;univers du gaming, de l&apos;environnement informatique, de formule 1 et plus récemment la science de l&apos;univers.
      </p>
      <p>
        Intéressé par tout ce qui touche la face visible d&apos;un projet, le front-end, et toujours
        curieux d&apos;en apprendre plus chaque jour, j&apos;ai pour ambition de travailler sur de nouveaux projets avec d&apos;autres personnes
        et apporter ma positivité et mon énergie sur le plan humain et professionel.
      </p>
    </div>
  );
};
    
export default About;
