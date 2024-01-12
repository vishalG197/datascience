import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-gray-200 p-5">
      <h2 className="text-2xl font-semibold mb-5">Dashboard Menu</h2>
      <ul>
        <li className="mb-3">
          <Link to="/dashboard/services" className="text-blue-500 hover:underline">
            Services
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/dashboard/activity" className="text-blue-500 hover:underline">
            Activity
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/dashboard/clients" className="text-blue-500 hover:underline">
            Clients
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/dashboard/billing" className="text-blue-500 hover:underline">
            Billing
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/dashboard/settings" className="text-blue-500 hover:underline">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
