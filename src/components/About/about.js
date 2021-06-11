import React from "react";
import ModalImage from "react-modal-image";

import aboutStyles from "./about.module.scss";
import timeline from "../../ressources/images/timeline.png";

const About = () => {

  return (
    <div className={aboutStyles.about}>
      <div className={aboutStyles.about_left}>
        <h1 className={aboutStyles.about_left_title}>
          <span className="bounce">À&nbsp;</span>
          <span className="bounce">p</span>
          <span className="bounce">r</span>
          <span className="bounce">o</span>
          <span className="bounce">p</span>
          <span className="bounce">o</span>
          <span className="bounce">s</span>
        </h1>
        <p className={aboutStyles.about_left_text}>
          Professionnellement connecté au monde du développement web depuis plus d&apos;une année.
        </p>
        <p className={aboutStyles.about_left_text}>
          Je suis une personne bien organisée dans son travail qui est sensible au rendu final et qui a le souci du détail.
          Je suis passionné par l&apos;univers du gaming, de l&apos;environnement informatique, de formule 1 et plus récemment la science de l&apos;univers.
        </p>
        <p className={aboutStyles.about_left_text}>
          Intéressé par tout ce qui touche la face visible d&apos;un projet, par l&apos;apprentissage de nouvelles technologies et toujours
          curieux d&apos;en apprendre plus chaque jour, j&apos;ai pour ambition de travailler sur de nouveaux projets avec d&apos;autres personnes
          et apporter ma positivité et mon énergie sur le plan humain et professionel.
        </p>
        <ModalImage className={aboutStyles.about_left_timeline} small={timeline} large={timeline} alt="Chronologie de mon parcours professionnel" />
      </div>
      <div className={aboutStyles.about_right}>
        <ul className={aboutStyles.about_right_list}>
          <li className={`${aboutStyles.about_right_list_item} ${aboutStyles.about_right_list_item_html}`}>HTML 5</li>
          <li className={`${aboutStyles.about_right_list_item} ${aboutStyles.about_right_list_item_css}`}>CSS 3</li>
          <li className={`${aboutStyles.about_right_list_item} ${aboutStyles.about_right_list_item_js}`}>JavaScript</li>
          <li className={`${aboutStyles.about_right_list_item} ${aboutStyles.about_right_list_item_jq}`}>PHP</li>
          <li className={`${aboutStyles.about_right_list_item} ${aboutStyles.about_right_list_item_saas}`}>SASS</li>
          <li className={`${aboutStyles.about_right_list_item} ${aboutStyles.about_right_list_item_react}`}>React</li>
          <li className={`${aboutStyles.about_right_list_item} ${aboutStyles.about_right_list_item_redux}`}>Redux</li>
          <li className={`${aboutStyles.about_right_list_item} ${aboutStyles.about_right_list_item_gatsby}`}>Gatsby</li>
          <li className={`${aboutStyles.about_right_list_item} ${aboutStyles.about_right_list_item_npm}`}>Npm</li>
          <li className={`${aboutStyles.about_right_list_item} ${aboutStyles.about_right_list_item_yarn}`}>Yarn</li>
          <li className={`${aboutStyles.about_right_list_item} ${aboutStyles.about_right_list_item_git}`}>Git</li>
          <li className={`${aboutStyles.about_right_list_item} ${aboutStyles.about_right_list_item_photo}`}>Photoshop</li>
        </ul>
      </div>
    </div>
  );
};
    
export default About;
