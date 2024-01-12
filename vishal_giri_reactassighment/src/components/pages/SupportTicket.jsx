// SupportTicket.js
import React from 'react';
import useForm from '../hooks/useForm';

const SupportTicket = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(
    { subject: '', message: '' },
    validate
  );

  function validate(values) {
    let errors = {};

    if (!values.subject) {
      errors.subject = 'Subject is required';
    }

    if (!values.message) {
      errors.message = 'Message is required';
    }

    return errors;
  }

  function submitForm() {
    // Implement logic to handle form submission (e.g., send a support ticket)
    console.log('Support ticket submitted:', values);
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Submit a Support Ticket</h2>
      <form onSubmit={submitForm}>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={values.subject || ''}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.subject && (
            <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={values.message || ''}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit Ticket
        </button>
      </form>
    </div>
  );
};

export default SupportTicket;
