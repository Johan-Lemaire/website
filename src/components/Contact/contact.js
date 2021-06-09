import React from "react";
import GoogleMapReact from "google-map-react";

import contactStyles from "./contact.module.scss";
import mapStyles from "./mapStyles";

const Contact = () => {

  console.log(process.env.GATSBY_APP_API_KEY);
  return (
    <div className={contactStyles.contact}>
      <div className={contactStyles.contact_left}>
        <h1 className={contactStyles.contact_left_title}>
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
          className={contactStyles.contact_left_form} 
          name="contact" 
          method="post"
          action="/success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p className={contactStyles.contact_left_form_line}>
            <input className={contactStyles.contact_left_form_line_input} type="text" name="name" placeholder="Nom" required/>  
          </p>
          <p className={contactStyles.contact_left_form_line}>
            <input className={contactStyles.contact_left_form_line_input} type="email" name="email" placeholder="Email" required/>
          </p>
          <p className={contactStyles.contact_left_form_line}>
            <input className={contactStyles.contact_left_form_line_input} type="text" name="subject" placeholder="Sujet" required/>
          </p>
          <p className={contactStyles.contact_left_form_line}>
            <textarea className={contactStyles.contact_left_form_line_textArea} name="message" placeholder="Votre message..." required></textarea>
          </p>
          <p className={contactStyles.contact_left_form_line}>
            <button className={contactStyles.contact_left_form_line_button} type="submit">Envoyer</button>
          </p>
        </form>
      </div>
      {/* // Important! Always set the container height explicitly */}
      <div className={contactStyles.contact_right}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GATSBY_APP_API_KEY }}
          defaultCenter={{
            lat: 48.959356,
            lng: 4.376734,
            text: "Johan",
          }}
          defaultZoom={8}
          options={{styles: mapStyles.theme,}}
        >

        </GoogleMapReact>
      </div>
    </div>
  );
};
    
export default Contact;