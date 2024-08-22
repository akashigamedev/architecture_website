import React from "react";
import Mapcontact from "../../components/mapcontact/Mapcontact";
import Faq from "../../components/faq/Faq";
import ContactForm from '../../components/contact_form/ContactForm';
import Spacer from '../../components/Spacer';

export default function Contact() {
  return (
    <div>
      <h2 style={{textAlign: 'center', marginBottom: 'var(--m-lg)'}}>CONTACT US</h2>
      <Mapcontact />
      <Spacer />
      <ContactForm />
      <Spacer />
      <Faq />
      <Spacer />
    </div>
  );
}
