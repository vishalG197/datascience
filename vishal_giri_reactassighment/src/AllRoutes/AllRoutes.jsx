import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home'
import ContactUs from '../components/pages/ContactUs'
import AboutUs from '../components/pages/AboutUs'
import Pricing from '../components/pages/Pricing'
import Login from '../components/pages/Login'
import Signup from '../components/pages/Signup'
import SupportTicket from '../components/pages/SupportTicket'
import Faqs from '../components/pages/Faqs'
import Dashboard from '../components/pages/Dashboard'
import ServiceManagement from '../components/pages/Dashboard/ServiceManagement'
import ActivityMonitoring from '../components/pages/Dashboard/ActivityMonitoring'
import ClientManagement from '../components/pages/Dashboard/ClientManagement'
import BillingAndPayment from '../components/pages/Dashboard/BillingAndPayment '
import SupportAndHelp from '../components/pages/Dashboard/SupportAndHelp'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/faq" element={<Faqs/>}/>
        <Route path="/support-ticket" element={<SupportTicket/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard/services" element={<ServiceManagement/>}/>
<Route path="/dashboard/activity" element={<ActivityMonitoring/>}/>
<Route path="/dashboard/clients" element={<ClientManagement/>}/>
<Route path="/dashboard/billing" element={<BillingAndPayment/>}/>
<Route path="/dashboard/settings" element={<SupportAndHelp/>}/>
      <Route path="*" element={<h1>404 page not found</h1>}/>
    </Routes>
  )
}

export default AllRoutes
