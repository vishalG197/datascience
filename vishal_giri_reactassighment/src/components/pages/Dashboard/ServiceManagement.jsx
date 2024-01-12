import React, { useState } from 'react';
import Sidebar from './Sidebar';

const ServiceManagement = () => {
  // Example state for managing services
  const [services, setServices] = useState([
    { id: 1, name: 'Service A', price: 100, billingDetails: 'Monthly' },
    { id: 2, name: 'Service B', price: 120, billingDetails: 'Yearly' },
    { id: 3, name: 'Service C', price: 80, billingDetails: 'Monthly' },
    // Add more services as needed
  ]);

  const handleAddService = (newService) => {
    setServices([...services, newService]);
  };

  const handleEditService = (id, updatedService) => {
    setServices((prevServices) =>
      prevServices.map((service) => (service.id === id ? updatedService : service))
    );
  };

  const handleDeleteService = (id) => {
    setServices((prevServices) => prevServices.filter((service) => service.id !== id));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <Sidebar />
      <div className="flex-1 mb-5">
        <h2 className="text-2xl font-semibold mb-3">Service Management</h2>

        {/* Form for adding a new service */}
        <div className="mb-5">
          <h3 className="text-xl font-semibold mb-2">Add New Service</h3>
          <form className="flex flex-col lg:flex-row lg:items-end">
            <div className="flex-1 lg:mr-4">
              <label htmlFor="serviceName">Service Name:</label>
              <input
                type="text"
                id="serviceName"
                name="serviceName"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="flex-1 lg:mr-4">
              <label htmlFor="servicePrice">Price:</label>
              <input
                type="number"
                id="servicePrice"
                name="servicePrice"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="flex-1 lg:mr-4">
              <label htmlFor="billingDetails">Billing Details:</label>
              <input
                type="text"
                id="billingDetails"
                name="billingDetails"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded mt-2 lg:mt-0"
            >
              Add Service
            </button>
          </form>
        </div>

        {/* List of existing services with edit and delete options */}
        <div className="ml-5">
          <h3 className="text-xl font-semibold mb-2">Existing Services</h3>
          <ul>
            {services.map((service) => (
              <li key={service.id} className="mb-3">
                <div className="flex justify-between items-center">
                  <div>
                    {service.name} - ${service.price} ({service.billingDetails})
                  </div>
                  <div>
                    <button
                      onClick={() => handleEditService(service.id, { ...service, price: 150 })}
                      className="text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteService(service.id)}
                      className="ml-3 text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceManagement;
