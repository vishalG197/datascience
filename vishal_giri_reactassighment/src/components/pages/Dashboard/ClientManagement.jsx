import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import Sidebar from './Sidebar';

const ClientManagement = () => {
  // Example state for managing clients
  const [clients, setClients] = useState([
    { id: 1, name: 'Client A', email: 'clientA@example.com', phoneNumber: '123-456-7890' },
    { id: 2, name: 'Client B', email: 'clientB@example.com', phoneNumber: '987-654-3210' },
    { id: 3, name: 'Client C', email: 'clientC@example.com', phoneNumber: '555-123-4567' },
    // Add more clients as needed
  ]);

  // Example form state and validation using custom hook
  const { values, errors, handleChange, handleSubmit } = useForm({
    initialValues: { name: '', email: '', phoneNumber: '' },
    onSubmit: addClient,
    validate: validateClientForm,
  });

  // Function to add a new client
  function addClient() {
    const newClient = {
      id: clients.length + 1,
      name: values.name,
      email: values.email,
      phoneNumber: values.phoneNumber,
    };

    setClients([...clients, newClient]);
  }

  // Function to validate the client form
  function validateClientForm() {
    const errors = {};

    // Add your validation logic here
    if (!values.name) {
      errors.name = 'Name is required';
    }

    // Add more validations as needed

    return errors;
  }

  // Function to edit a client
  function handleEditClient(id, updatedClient) {
    setClients((prevClients) =>
      prevClients.map((client) => (client.id === id ? updatedClient : client))
    );
  }

  // Function to delete a client
  function handleDeleteClient(id) {
    setClients((prevClients) => prevClients.filter((client) => client.id !== id));
  }

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 p-8 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-6">Client Management</h2>

        {/* Form for adding a new client */}
        <div className="mb-5 bg-white p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-2">Add New Client</h3>
          <form onSubmit={handleSubmit} className="max-w-lg w-full">
            <div className="mb-3">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                className={`mt-1 p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter client's name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className={`mt-1 p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter client's email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                className={`mt-1 p-2 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter client's phone number"
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
            </div>

            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
              Add Client
            </button>
          </form>
        </div>

        {/* List of existing clients with edit and delete options */}
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-2">Existing Clients</h3>
          <ul>
            {clients.map((client) => (
              <li key={client.id} className="mb-3 flex justify-between items-center">
                <div>
                  {client.name} - {client.email} - {client.phoneNumber}
                </div>
                <div>
                  <button
                    onClick={() => handleEditClient(client.id, { ...client, email: 'newemail@example.com' })}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClient(client.id)}
                    className="ml-3 text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClientManagement;
