import React, { useState } from "react";
import Quote from "../components/Quote";
import "../styles/ContactUs.css";
const ContactUs = () => {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!values.name) {
      newErrors.name = "Please enter your name!";
    }

    if (!values.email) {
      newErrors.email = "Please enter your email!";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Invalid email!";
    }

    if (!values.message) {
      newErrors.message = "Please leave a message!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      alert(result.status);
      setValues({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Something is wrong. Try again later.");
    }
    setSubmitting(false);
  };

  return (
    <div className='contact__page'>
      <div className='contact__container'>
        <div className='contact__content'>
          <div className='contact__content-title'>Get in touch with me.</div>
          <div className='contact__content-text'>
            safeplace@gmail.com 308 Negra Arroyo Lane, Albuquerque, New Mexico
          </div>
        </div>
        <div className='contact__form'>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type='text'
              name='name'
              className='form-name'
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
            <label>Email</label>
            <input
              type='email'
              className='form-email'
              name='email'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
            <label>Message</label>
            <textarea
              name='message'
              className='form-text'
              value={values.message}
              onChange={handleChange}
            />
            {errors.message && <p>{errors.message}</p>}
            <button className='form-button' type='submit' disabled={submitting}>
              {submitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <Quote />
      <div className='contact__map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d166575.9803317212!2d-123.08443348455465!3d49.28114002484288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sru!4v1685969142803!5m2!1sen!2sru'
          title='Map'
          id='map'
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
