// App.js - Main entry point with routing
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardContent from "./components/Dash-content";
import Signup from "./auth/sign-in1";
import Signup3 from "./auth/sign-in3";
import Signup2 from "./auth/sign-in2";
import Login from "./auth/Login";
import Dash2 from "./components/dash-content2"; // User management
import CHWManagement from "./pages/CHWManagement";
import Appointments from "./pages/Appointments";
import AmbulanceTracker from "./pages/AmblulanceTracker";
import EmergencyContent from "./pages/EmergencyContent";
import AnalyticsContent from "./pages/AnalyticsContent";
import SettingsContent from "./pages/SettingsContent";
import { Home, Users, UserCog, CalendarCheck2, Bell, BarChart2, Settings, Activity } from "lucide-react";

// Layout component to wrap sidebar and content
function Layout({ children }) {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  // Redirect to login if not authenticated
  if (!isLoggedIn && location.pathname !== '/login') {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  // Update isLoggedIn state when localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup2" element={<Signup2 />} />
        <Route path="/signup3" element={<Signup3 />} />
        <Route path="/ambulance" element={
          <ProtectedRoute>
            <Layout><AmbulanceTracker /></Layout>
          </ProtectedRoute>
        } />

        {/* Protected routes */}
        <Route path="/" element={
          <ProtectedRoute>
            <Layout><DashboardContent /></Layout>
          </ProtectedRoute>
        } />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Layout><DashboardContent /></Layout>
          </ProtectedRoute>
        } />
        <Route path="/users" element={
          <ProtectedRoute>
            <Layout><Dash2 /></Layout>
          </ProtectedRoute>
        } />
        <Route path="/ambulance" element={
          <ProtectedRoute>
            <Layout><AmbulanceTracker /></Layout>
          </ProtectedRoute>
        } />
        <Route path="/chw" element={
          <ProtectedRoute>
            <Layout><CHWManagement /></Layout>
          </ProtectedRoute>
        } />
        <Route path="/appointments" element={
          <ProtectedRoute>
            <Layout><Appointments /></Layout>
          </ProtectedRoute>
        } />
        {/* <Route path="/ambulance" element={
          <ProtectedRoute>
            <Layout><AmbulanceTracker /></Layout>
          </ProtectedRoute>
        } /> */}
        <Route path="/emergencies" element={
          <ProtectedRoute>
            <Layout><EmergencyContent /></Layout>
          </ProtectedRoute>
        } />
        <Route path="/analytics" element={
          <ProtectedRoute>
            <Layout><AnalyticsContent /></Layout>
          </ProtectedRoute>
        } />
        <Route path="/settings" element={
          <ProtectedRoute>
            <Layout><SettingsContent /></Layout>
          </ProtectedRoute>
        } />

        {/* 404 route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}