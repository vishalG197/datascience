import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const SupportAndHelp = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto my-5 px-4">
        <h2 className="text-3xl font-semibold mb-5">Support and Help</h2>

        {/* Links to FAQs and support ticket system */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-4">Helpful Links</h3>
          <ul className="list-disc pl-5">
            <li className="mb-3">
              <Link to="/dashboard/support/faq" className="text-blue-500 hover:underline">
                Frequently Asked Questions (FAQs)
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/dashboard/support/ticket" className="text-blue-500 hover:underline">
                Submit a Support Ticket
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SupportAndHelp;
