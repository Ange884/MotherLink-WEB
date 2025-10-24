// App.js - Main entry point with routing
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardContent from "./components/Dash-content";
import Signup from "./auth/sign-in1";
import Signup3 from "./auth/sign-in3";
import Signup2 from "./auth/sign-in2";
import Dashboard3 from "./dashboards/dash3";
import Login from "./auth/Login";
import Dash2 from "./components/dash-content2"; // User management
import CHWManagement from "./pages/CHWManagement"; // Placeholder for CHW Management
import Appointments from "./pages/Appointments"; // Placeholder for Appointments
import AmbulanceTracker from "./pages/AmblulanceTracker"; // Placeholder for Ambulance Tracker
import EmergencyContent from "./pages/EmergencyContent"; // Placeholder for Emergency & Alerts
import AnalyticsContent from "./pages/AnalyticsContent"; // Placeholder for Data analytics
import SettingsContent from "./pages/SettingsContent"; // Placeholder for Settings
import { Home, Users, UserCog, CalendarCheck2, Ambulance, Bell, BarChart2, Settings } from "lucide-react";

// Layout component to wrap sidebar and content
function Layout({ children }) {
  const location = useLocation();
  const menuItems = [
    { icon: <Home size={18} />, label: "Dashboard", path: "/dashboard", active: location.pathname === "/dashboard" },
    { icon: <Users size={18} />, label: "User management", path: "/users", active: location.pathname === "/users" },
    { icon: <UserCog size={18} />, label: "CHW Management", path: "/chw", active: location.pathname === "/chw" },
    { icon: <CalendarCheck2 size={18} />, label: "Appointments", path: "/appointments", active: location.pathname === "/appointments" },
    { icon: <Ambulance size={18} />, label: "Ambulance Tracker", path: "/ambulance", active: location.pathname === "/ambulance" },
    { icon: <Bell size={18} />, label: "Emergency & Alerts", path: "/emergencies", active: location.pathname === "/emergencies" },
    { icon: <BarChart2 size={18} />, label: "Data analytics", path: "/analytics", active: location.pathname === "/analytics" },
    { icon: <Settings size={18} />, label: "Settings", path: "/settings", active: location.pathname === "/settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar menuItems={menuItems} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/signup2" element={<Signup2/>} />
        <Route path="/signup3" element={<Signup3/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard3" element={<Dashboard3/>} />
        <Route path="/dashboard2" element={<Layout><Dash2 /></Layout>} />
        <Route path="/dashboard" element={<Layout><DashboardContent /></Layout>} />
        <Route path="/users" element={<Layout><Dash2 /></Layout>} />
        <Route path="/chw" element={<Layout><CHWManagement /></Layout>} />
        <Route path="/appointments" element={<Layout><Appointments /></Layout>} />
        <Route path="/ambulance" element={<Layout><AmbulanceTracker /></Layout>} />
        <Route path="/emergencies" element={<Layout><EmergencyContent /></Layout>} />
        <Route path="/analytics" element={<Layout><AnalyticsContent /></Layout>} />
        <Route path="/settings" element={<Layout><SettingsContent /></Layout>} />
      </Routes>
    </Router>
  );
}