import React from "react";
import Title from "../Title/Title";
import ContactForm from "./ContactForm";

const Contact = ({ data }) => {
  return (
    <>
      <Title text={"Contacto"} />
      <ContactForm />
    </>
  );
};

export default Contact;
