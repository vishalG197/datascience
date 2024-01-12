import React, { useState } from 'react';
import Sidebar from './Sidebar';

const ActivityMonitoring = () => {
  // Example state for activity data
  const [activityData, setActivityData] = useState([
    { id: 1, activity: 'User Login', timestamp: '2024-01-15 09:30:00' },
    { id: 2, activity: 'Service Update', timestamp: '2024-01-15 10:15:00' },
    { id: 3, activity: 'Data Backup', timestamp: '2024-01-15 11:00:00' },
    { id: 4, activity: 'New User Registration', timestamp: '2024-01-15 11:45:00' },
    { id: 5, activity: 'System Maintenance', timestamp: '2024-01-15 12:30:00' },
    // Add more activity data as needed
  ]);

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <h2 className="text-3xl font-semibold mb-6">Activity Monitoring</h2>

        {/* List of recent activities */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
          <ul className="list-disc pl-4">
            {activityData.map((activity) => (
              <li key={activity.id} className="mb-3">
                <span className="font-bold">{activity.activity}</span> - {activity.timestamp}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActivityMonitoring;
