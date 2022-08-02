import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__text">
        <h1 className="text--center section__title">Contact Me</h1>
      </div>
      <form id="contact__form" onsubmit="contact(event)">
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
        <button id="ceontact__submit" class="form__submit">
          Send it my way
        </button>
      </form>
    </div>
  );
}

export default Contact;
