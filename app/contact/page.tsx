import ContactForm from "@/components/custom-ui/contact-form/contactForm";
import React from "react";

const Contact = async () => {
  return (
    <>
      <div className={`w-full flex justify-center p-6`}>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
