import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Sidebar from './Dashboard/Sidebar';
import MainContent from './Dashboard/MainContent';
import ServiceManagement from './Dashboard/ServiceManagement';
import ActivityMonitoring from './Dashboard/ActivityMonitoring';
import ClientManagement from './Dashboard/ClientManagement';
import BillingAndPayment from './Dashboard/BillingAndPayment ';
import SupportAndHelp from './Dashboard/SupportAndHelp';
import axios from 'axios';
const API_KEY = 'e0afd94223734353951f2cf7ac172358';
const Dashboard = () => {
  // Example state for weather data
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Example API call using Axios
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=pune&appid=${API_KEY}`);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

  
    fetchWeatherData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10">
        
        {weatherData && (
          <div className="mb-5">
            <h3 className="text-xl font-semibold mb-2">Weather Information</h3>
            <p>Temperature: {weatherData.temperature}°C</p>
            <p>Condition: {weatherData.condition}</p>
          </div>
        )}
        <MainContent/>
{/* <Routes>
<Route path="/" element={<MainContent/>}/>
<Route path="/dashboard/services" element={<ServiceManagement/>}/>
<Route path="/dashboard/activity" element={<ActivityMonitoring/>}/>
<Route path="/dashboard/clints" element={<ClientManagement/>}/>
<Route path="/dashboard/billing" element={<BillingAndPayment/>}/>
<Route path="/dashboard/setting" element={<SupportAndHelp/>}/>
</Routes> */}
      </div>
    </div>
  );
};

export default Dashboard;
