import React from 'react';

const Faqs = () => {
  // Your FAQs data, you can fetch this from an API or use state
  const faqs = [
    { id: 1, question: 'What services do you offer?', answer: 'We offer a variety of services...' },
    { id: 2, question: 'How do I contact support?', answer: 'You can reach our support team at...' },
    { id: 3, question: 'What services do you offer?', answer: 'We offer a variety of services...' },
    { id: 4, question: 'How do I contact support?', answer: 'You can reach our support team at...' },
    { id: 5, question: 'What services do you offer?', answer: 'We offer a variety of services...' },
    { id: 6, question: 'How do I contact support?', answer: 'You can reach our support team at...' }
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions (FAQs)</h2>

      <ul>
        {faqs.map((faq) => (
          <li key={faq.id} className="mb-3">
            <h3 className="text-xl font-semibold">{faq.question}</h3>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faqs;
