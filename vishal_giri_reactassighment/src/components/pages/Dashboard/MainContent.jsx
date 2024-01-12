import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ArcElement } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const MainContent = () => {
  const [services, setServices] = React.useState([
    { id: 1, name: 'Service A', status: 'Active' },
    { id: 2, name: 'Service B', status: 'Inactive' },
    { id: 3, name: 'Service C', status: 'Active' },
    { id: 4, name: 'Service D', status: 'Inactive' },
    // Add more services as needed
  ]);

  // Example state for chart data
  const [chartData, setChartData] = React.useState({
    labels: services.map((service) => service.name), // Register labels based on service names
    datasets: [
      {
        label: 'Service Status',
        data: [5, 2, 7, 3], // Dummy data, replace with actual data
        backgroundColor: ['#3490dc', '#e3342f', '#38c172', '#ffed4a'], // Bar colors
      },
    ],
  });

  return (
    <div className="flex flex-col mb-5">
      <h2 className="text-2xl font-semibold mb-3">Dashboard Overview</h2>

      {/* Example: Service Overview Table */}
      <div className="mb-5 overflow-x-auto">
        <h3 className="text-xl font-semibold mb-2">Service Overview</h3>
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Service Name</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td className="border p-2">{service.name}</td>
                <td className="border p-2">{service.status}</td>
                <td className="border p-2">
                  <button className="text-blue-500 hover:underline">View/Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Example: Bar Chart */}
      <div className="mb-5">
        <h3 className="text-xl font-semibold mb-2">Service Status Chart</h3>
        <div className="w-full max-w-md">
          <Bar data={chartData} />
        </div>
      </div>

      {/* Example: Billing Information */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Billing Information</h3>
        {/* Include additional charts or visualizations */}
      </div>
    </div>
  );
};

export default MainContent;
