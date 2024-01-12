import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const BillingAndPayment = () => {
  // Example state for managing invoices
  const [invoices, setInvoices] = useState([
    { id: 1, clientName: 'Client A', amount: 150, status: 'Pending' },
    { id: 2, clientName: 'Client B', amount: 200, status: 'Paid' },
    { id: 3, clientName: 'Client C', amount: 120, status: 'Pending' },
    { id: 4, clientName: 'Client D', amount: 250, status: 'Paid' },
    // Add more invoices as needed
  ]);

  const [newInvoice, setNewInvoice] = useState({
    clientName: '',
    amount: 0,
  });

  const handleCreateInvoice = async (e) => {
    e.preventDefault();

    try {
      // Example API call to create a new invoice
      const response = await axios.post('https://api.example.com/invoices', newInvoice);

      // Update the state with the new invoice
      setInvoices([...invoices, response.data]);

      // Clear the form
      setNewInvoice({
        clientName: '',
        amount: 0,
      });
    } catch (error) {
      console.error('Error creating invoice:', error);
    }
  };

  const handleProcessPayment = async (id) => {
    try {
      // Example API call to process payment for an invoice
      await axios.put(`https://api.example.com/invoices/${id}/process-payment`);

      // Update the invoice status in the state
      setInvoices((prevInvoices) =>
        prevInvoices.map((invoice) =>
          invoice.id === id ? { ...invoice, status: 'Paid' } : invoice
        )
      );
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <h2 className="text-3xl font-semibold mb-6">Billing and Payments</h2>

        {/* Form for creating a new invoice */}
        <div className="mb-5">
          <h3 className="text-xl font-semibold mb-2">Create New Invoice</h3>
          <form onSubmit={handleCreateInvoice}>
            <div className="mb-3">
              <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">
                Client Name
              </label>
              <input
                type="text"
                id="clientName"
                name="clientName"
                value={newInvoice.clientName}
                onChange={(e) => setNewInvoice({ ...newInvoice, clientName: e.target.value })}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={newInvoice.amount}
                onChange={(e) => setNewInvoice({ ...newInvoice, amount: e.target.value })}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded">
              Create Invoice
            </button>
          </form>
        </div>

        {/* List of existing invoices with options to process payment */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Existing Invoices</h3>
          <ul>
            {invoices.map((invoice) => (
              <li key={invoice.id} className="mb-3">
                {invoice.clientName} - ${invoice.amount} - Status: {invoice.status}
                {invoice.status === 'Pending' && (
                  <button
                    onClick={() => handleProcessPayment(invoice.id)}
                    className="ml-3 bg-green-500 text-white py-2 px-4 rounded"
                  >
                    Process Payment
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BillingAndPayment;
