import React from "react";

import contactStyles from "./contact.module.scss";

const Contact = () => {

  return (
    <div className={contactStyles.contact}>
      <h1 className={contactStyles.contact_title}>
        <span className={contactStyles.bounce}>M</span>
        <span className={contactStyles.bounce}>e&nbsp;</span>
        <span className={contactStyles.bounce}>c</span>
        <span className={contactStyles.bounce}>o</span>
        <span className={contactStyles.bounce}>n</span>
        <span className={contactStyles.bounce}>t</span>
        <span className={contactStyles.bounce}>a</span>
        <span className={contactStyles.bounce}>c</span>
        <span className={contactStyles.bounce}>t</span>
        <span className={contactStyles.bounce}>e</span>
        <span className={contactStyles.bounce}>r</span>
      </h1>
      <form className={contactStyles.contact_form} name="contact" method="POST" netlify>
        <p className={contactStyles.contact_form_line}>
          <input className={contactStyles.contact_form_line_input} type="text" name="name" placeholder="Nom"/>  
        </p>
        <p className={contactStyles.contact_form_line}>
          <input className={contactStyles.contact_form_line_input} type="email" name="email" placeholder="Email"/>
        </p>
        <p className={contactStyles.contact_form_line}>
          <input className={contactStyles.contact_form_line_input} type="text" name="subject" placeholder="Sujet"/>
        </p>
        <p className={contactStyles.contact_form_line}>
          <textarea className={contactStyles.contact_form_line_textArea} name="message" placeholder="Votre message..."></textarea>
        </p>
        <p className={contactStyles.contact_form_line}>
          <button className={contactStyles.contact_form_line_button} type="submit">Envoyer</button>
        </p>
      </form>
    </div>
  );
};
    
export default Contact;