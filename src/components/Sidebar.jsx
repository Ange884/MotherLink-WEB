import { motion } from "framer-motion";
import { Home, Users, Bell, BarChart2, Settings, LogOut, ChevronDown, Activity, CalendarCheck2, UserCog, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const menuItems = [
  { icon: <Home size={18} />, label: "Dashboard", path: "/dashboard" },
  { icon: <Users size={18} />, label: "User management", path: "/users" },
  { icon: <UserCog size={18} />, label: "CHW Management", path: "/chw" },
  { icon: <CalendarCheck2 size={18} />, label: "Appointments", path: "/appointments" },
  { icon: <Activity size={18} />, label: "Ambulance Tracker", path: "/ambulance" },
  { icon: <Bell size={18} />, label: "Emergency & Alerts", path: "/emergencies" },
  { icon: <BarChart2 size={18} />, label: "Data analytics", path: "/analytics" },
  { icon: <Settings size={18} />, label: "Settings", path: "/settings" },
];
const profileOptions = [
  { icon: <Settings size={14} />, label: "Profile" },
  { icon: <LogOut size={14} />, label: "Logout" },
];
export default function Sidebar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  return (
    <motion.div
      className="bg-gradient-to-b from-[#0B2447] to-[#1A365D] text-white w-64 h-screen flex flex-col shadow-2xl shadow-blue-900/20 relative"
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background subtle animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_50%)] animate-pulse-slow"></div>
      {/* --- Main content --- */}
      <div className="relative z-10 flex flex-col h-full">
        {/* --- Logo Section --- */}
        <motion.div
          className="p-6 text-2xl font-bold border-b border-gray-700/50 flex items-center space-x-2 sticky top-0 bg-[#0B2447]/90 backdrop-blur-sm z-20"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.img
            src="/mother_logo.png"
            alt="Mother Link Logo"
            className="w-12 h-12"
          />
          Mother Link
        </motion.div>
        {/* --- Profile Section --- */}
        <motion.div
          className="flex flex-col items-center text-center py-4 border-b border-gray-700/50 bg-[#0B2447]/80 backdrop-blur-sm relative cursor-pointer"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          <motion.img
            src="/Ange.jpeg"
            alt="Profile"
            className="w-16 h-16 rounded-full ring-2 ring-blue-500/30 mb-2 hover:ring-blue-400/50 transition-all"
            whileHover={{ scale: 1.05, rotate: 5 }}
          />
          <p className="text-sm font-semibold text-white">Welcome back</p>
          <p className="text-xs text-gray-400">Nziza Ange</p>
          {/* Profile Dropdown */}
          {isProfileOpen && (
            <motion.ul
              className="absolute top-[110%] w-48 bg-gray-800/95 backdrop-blur-sm rounded-xl border border-gray-700/50 py-2 shadow-xl shadow-black/20"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {profileOptions.map((option, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 px-4 py-2 text-sm hover:bg-gray-700/50 cursor-pointer transition-colors"
                >
                  <span className="text-gray-400">{option.icon}</span>
                  <span>{option.label}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </motion.div>
        {/* --- Menu (Non-scrollable but flexible height) --- */}
        <div className="flex-1 px-4 py-4 overflow-y-auto overflow-x-hidden scrollbar-hide">
  <ul className="space-y-1">
    {menuItems.map((item, i) => {
      const isActive = location.pathname === item.path;
      return (
        <motion.li
          key={i}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <Link
            to={item.path}
            className={`flex items-center space-x-3 px-3 py-3 rounded-xl cursor-pointer transition-all relative group ${
              isActive
                ? "bg-blue-600/20 text-blue-400"
                : "text-gray-300 hover:bg-blue-500/10 hover:text-blue-400"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
            {isActive && (
              <motion.div
                className="absolute right-3 w-1 h-6 bg-blue-400 rounded-full"
                layoutId="activeIndicator"
              />
            )}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </motion.li>
      );
    })}
  </ul>
</div>

        {/* --- Logout Button --- */}
        <motion.div
          className="p-4 border-t border-gray-700/50 bg-[#0B2447]/80 backdrop-blur-sm flex items-center justify-between hover:bg-blue-600/10 transition-colors cursor-pointer"
          whileHover={{ 
            y:1,
          scale: 1.02, 
          backgroundColor: "rgba(10, 25, 47, 0.4)" // dark blue glow
}}
transition={{ type: "spring", stiffness: 300, damping: 20 }}

          onClick={() => console.log("Logout clicked")}
        >
          <div className="flex items-center space-x-2">
            <LogOut size={18} className="text-gray-300" />
            <span className="text-sm font-medium text-gray-200">Logout</span>
          </div>
          <ChevronDown size={16} className="text-gray-400" />
        </motion.div>
      </div>
    </motion.div>
  );
}