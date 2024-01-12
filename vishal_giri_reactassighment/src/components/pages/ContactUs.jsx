import React, { useState } from 'react';
import useForm from '../hooks/useForm';

const Contact = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    { name: '', email: '', message: '' },
    validate
  );

  function validate(values) {
    let errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    }

    if (!values.message) {
      errors.message = 'Message is required';
    }

    return errors;
  }

  function submitForm() {
 
    console.log('Form submitted:', values);
  }
  return (
    <div className="container mx-auto mt-5 p-5">
      <h2 className="text-3xl font-semibold mb-5">Contact Us</h2>
      <form onSubmit={submitForm} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name || ''}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            placeholder="Your Email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={values.message || ''}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            placeholder="Your Message"
            rows="4"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
