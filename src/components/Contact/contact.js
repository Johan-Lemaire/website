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
          <input className={contactStyles.contact_form_line_input} type="text" name="name" placeholder="Nom" required/>  
        </p>
        <p className={contactStyles.contact_form_line}>
          <input className={contactStyles.contact_form_line_input} type="email" name="email" placeholder="Email" required/>
        </p>
        <p className={contactStyles.contact_form_line}>
          <input className={contactStyles.contact_form_line_input} type="text" name="subject" placeholder="Sujet" required/>
        </p>
        <p className={contactStyles.contact_form_line}>
          <textarea className={contactStyles.contact_form_line_textArea} name="message" placeholder="Votre message..." required></textarea>
        </p>
        <p className={contactStyles.contact_form_line}>
          <button className={contactStyles.contact_form_line_button} type="submit">Envoyer</button>
        </p>
      </form>
      <img src="https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDiz4h7xW00saMbD4PQGaw0ETYgpmR2OIQ&center=46.67009301542559,-1.2276748641852198&zoom=7&format=png&maptype=roadmap&style=feature:administrative.country%7Celement:geometry.stroke%7Ccolor:0xffffff%7Cweight:1.5&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text%7Ccolor:0x0092ca&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0x0092ca&style=feature:administrative.locality%7Celement:labels.text.stroke%7Cvisibility:off&style=feature:administrative.neighborhood%7Cvisibility:off&style=feature:landscape%7Celement:geometry.fill%7Ccolor:0x1d1d1d&style=feature:landscape%7Celement:geometry.stroke%7Ccolor:0xffffff&style=feature:poi%7Celement:geometry.fill%7Cvisibility:off&style=feature:poi%7Celement:labels.text%7Cvisibility:off&style=feature:poi.business%7Cvisibility:off&style=feature:road%7Cvisibility:off&style=feature:road%7Celement:labels%7Cvisibility:off&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:transit%7Cvisibility:off&style=feature:water%7Celement:geometry.fill%7Ccolor:0x0092ca&style=feature:water%7Celement:labels.text%7Cvisibility:off&size=480x360"></img>
    </div>
  );
};
    
export default Contact;