import React from "react";
import ModalImage from "react-modal-image";

import aboutStyles from "./about.module.scss";
import timeline from "../../ressources/images/timeline.png";

const About = () => {

  return (
    <div className={aboutStyles.about}>
      <h1 className={aboutStyles.about_title}>
        <span className={aboutStyles.bounce}>A&nbsp;</span>
        <span className={aboutStyles.bounce}>p</span>
        <span className={aboutStyles.bounce}>r</span>
        <span className={aboutStyles.bounce}>o</span>
        <span className={aboutStyles.bounce}>p</span>
        <span className={aboutStyles.bounce}>o</span>
        <span className={aboutStyles.bounce}>s</span>
      </h1>
      <p className={aboutStyles.about_text}>
        Professionnellement connecté au monde du développement web depuis une année.
      </p>
      <p className={aboutStyles.about_text}>
        Je suis une personne bien organisée dans son travail qui est sensible au rendu final et qui a le souci du détail.
        Je suis passionné par l&apos;univers du gaming, de l&apos;environnement informatique, de formule 1 et plus récemment la science de l&apos;univers.
      </p>
      <p className={aboutStyles.about_text}>
        Intéressé par tout ce qui touche la face visible d&apos;un projet, le front-end, et toujours
        curieux d&apos;en apprendre plus chaque jour, j&apos;ai pour ambition de travailler sur de nouveaux projets avec d&apos;autres personnes
        et apporter ma positivité et mon énergie sur le plan humain et professionel.
      </p>
      <ModalImage className={aboutStyles.about_timeline} small={timeline} large={timeline} alt="Chronologie de mon parcours professionnel" />
    </div>
  );
};
    
export default About;
