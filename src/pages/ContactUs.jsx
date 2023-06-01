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
    <div className='container'>
      <Quote />
      <div className='contact'>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
          <label>Email:</label>
          <input
            type='email'
            name='email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
          <label>Message:</label>
          <textarea
            name='message'
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <p>{errors.message}</p>}
          <button type='submit' disabled={submitting}>
            {submitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
