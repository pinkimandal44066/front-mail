// ContactForm.jsx
import React, { useState } from "react";
import axios from "axios";
import config from "../../../Config";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${config.BASE_URL}/api/contact`, form);
      alert("Message sent successfully!");
      console.log(res.data);
    } catch (error) {
      alert("Error sending message");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
