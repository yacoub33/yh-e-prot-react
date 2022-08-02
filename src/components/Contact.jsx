import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_72bprxd",
        "template_0d2kot3",
        form.current,
        "v8w7MJZ6Wg8zm3tIU"
      )
      .then(
        (result) => {
          console.log(result.text);
          success.classList += " modal__overlay--visible";
        },
        (error) => {
          console.log(error.text);
          alert(
            "The email service is temporarily unavailable. Please contact me another way."
          );
        }
      );

    const success = document.querySelector(".modal__overlay--success");
  };
  return (
    <div className="contact">
      <div className="contact__text">
        <h1 className="text--center section__title">Contact Me</h1>
      </div>
      <form id="contact__form" ref={form} onSubmit={sendEmail}>
        <div class="form__item">
          <label class="form__item--label">Name:</label>
          <input class="input" name="user_name" type="text" required />
        </div>
        <div class="form__item">
          <label class="form__item--label">Email:</label>
          <input class="input" name="user_email" type="email" required />
        </div>
        <div class="form__item">
          <label class="form__item--label">Message:</label>
          <textarea
            class="input"
            name="message"
            type="text"
            required
          ></textarea>
        </div>
        <button id="btn" class="form__submit">
          Send it my way
        </button>
      </form>
      <div class="modal__overlay modal__overlay--success">
        Thanks for the message! Looking forward to speaking to you soon.
      </div>
    </div>
  );
}

export default Contact;
