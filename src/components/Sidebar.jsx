import { motion } from "framer-motion";
import {
  Home,
  Users,
  Bell,
  BarChart2,
  Settings,
  LogOut,
  ChevronDown,
  Ambulance,
  CalendarCheck2,
  UserCog,
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  { icon: <Home size={18} />, label: "Dashboard", active: true },
  { icon: <Users size={18} />, label: "User management", active: false },
  { icon: <UserCog size={18} />, label: "CHW Management" },
  { icon: <CalendarCheck2 size={18} />, label: "Appointments" },
  { icon: <Ambulance size={18} />, label: "Ambulance Tracker" },
  { icon: <Bell size={18} />, label: "Emergency & Alerts", active: false },
  { icon: <BarChart2 size={18} />, label: "Data analytics", active: false },
  { icon: <Settings size={18} />, label: "Settings", active: false },
];

const profileOptions = [
  { icon: <Settings size={14} />, label: "Profile" },
  { icon: <LogOut size={14} />, label: "Logout" },
];

export default function Sidebar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <motion.div
      className="bg-gradient-to-b from-[#0B2447] to-[#1a365d] text-white w-64 h-screen flex flex-col justify-between shadow-2xl shadow-blue-900/20 relative"
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Background subtle animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse-slow"></div>

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
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          Mother Link
        </motion.div>

        {/* --- Profile Section (Moved Up) --- */}
        <motion.div
          className="flex flex-col items-center justify-center text-center py-4 border-b border-gray-700/50 bg-[#0B2447]/80 backdrop-blur-sm relative z-10 cursor-pointer"
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
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          />
          <motion.p
            className="text-sm font-semibold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Welcome back
          </motion.p>
          <p className="text-xs text-gray-400">Nziza Ange</p>

          {/* Profile Dropdown */}
          {isProfileOpen && (
            <motion.ul
              className="absolute top-[110%] w-48 bg-gray-800/95 backdrop-blur-sm rounded-xl border border-gray-700/50 py-2 shadow-xl shadow-black/20"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              {profileOptions.map((option, i) => (
                <motion.li
                  key={i}
                  className="flex items-center space-x-3 px-4 py-2 text-sm hover:bg-gray-700/50 cursor-pointer transition-colors"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex-shrink-0 text-gray-400">{option.icon}</div>
                  <span>{option.label}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </motion.div>

        {/* --- Scrollable Menu --- */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500/50 scrollbar-track-transparent px-4 py-4">
          <ul className="space-y-1">
            {menuItems.map((item, i) => (
              <motion.li
                key={i}
                className={`flex items-center space-x-3 px-3 py-3 rounded-xl cursor-pointer transition-all relative group ${
                  item.active
                    ? "bg-blue-600/20 border border-blue-500/30 text-blue-200"
                    : "hover:bg-blue-600/10 hover:border-blue-500/20 border border-transparent"
                }`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#2563eb20",
                  x: item.active ? 0 : 5,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {item.icon}
                </motion.div>
                <span className="font-medium">{item.label}</span>
                {item.active && (
                  <motion.div
                    className="absolute right-3 w-1 h-6 bg-blue-400 rounded-full"
                    layoutId="activeIndicator"
                  />
                )}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
