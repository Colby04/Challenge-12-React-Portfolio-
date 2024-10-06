import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      setErrors({ ...errors, email: 'Invalid email address' });
    } else {
      setErrors({ ...errors, [name]: value ? '' : 'This field is required' });
    }
  };

  return (
    <section>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleChange}
        />
        {errors.name && <span>{errors.name}</span>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleChange}
        />
        {errors.message && <span>{errors.message}</span>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;