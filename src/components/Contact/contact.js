import React from "react";

import contactStyles from "./contact.module.scss";

const Contact = () => {

  return (
    <div className={contactStyles.contact}>
      <h1 className={contactStyles.contact_title}>
        <span className="bounce">M</span>
        <span className="bounce">e&nbsp;</span>
        <span className="bounce">c</span>
        <span className="bounce">o</span>
        <span className="bounce">n</span>
        <span className="bounce">t</span>
        <span className="bounce">a</span>
        <span className="bounce">c</span>
        <span className="bounce">t</span>
        <span className="bounce">e</span>
        <span className="bounce">r</span>
      </h1>
      <form 
        className={contactStyles.contact_form} 
        name="contact" 
        method="post"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
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