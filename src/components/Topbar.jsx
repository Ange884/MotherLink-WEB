import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ChatBubbleLeftRightIcon, PlusIcon, BellIcon } from '@heroicons/react/24/outline';

const pageTitles = {
  "/dashboard": "Dashboard",
  "/users": "User Management",
  "/chw": "CHW Management",
  "/appointments": "Appointments",
  "/ambulance": "Ambulance Tracker",
  "/emergencies": "Emergency & Alerts",
  "/analytics": "Data Analytics",
  "/settings": "Settings",
};

export default function Topbar({ onMenuToggle }) {
  const location = useLocation();
  const currentTitle = pageTitles[location.pathname] || "Dashboard";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For responsive menu toggle

  return (
    <motion.div
      className="flex justify-between items-center bg-white shadow-sm border-b border-gray-200 px-6 py-4"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Left: Menu Toggle & Page Title + Subtitle */}
      <div className="flex items-center space-x-4 min-w-0 flex-1">
        {/* Menu Toggle - Hidden on larger screens */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-600 hover:text-[#0B2447] rounded-lg hover:bg-gray-100 transition-all md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Menu size={20} />
        </motion.button>
        
        {/* Title and Subtitle - Stacked for better spacing */}
        <div className="flex flex-col space-y-0.5 min-w-0 flex-1">
          <motion.h1
            className="text-2xl font-bold text-gray-900 truncate"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {currentTitle}
          </motion.h1>
          <motion.p
            className="text-sm text-gray-600 truncate"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.25 }}
          >
            View all analytics and manage the system
          </motion.p>
        </div>
      </div>

      {/* Right: Action Buttons - Responsive stacking on mobile */}
      <div className="flex items-center space-x-3 flex-shrink-0">
        {/* Message CHW Button */}
        <motion.button
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors border border-gray-200 hidden md:flex"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <ChatBubbleLeftRightIcon className="w-4 h-4" />
          <span>Message CHW</span>
        </motion.button>

        {/* Add CHW Button */}
        <motion.button
          className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-gray-900 rounded-md transition-colors md:ml-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.35 }}
        >
          <PlusIcon className="w-4 h-4" />
          <span>Add CHW</span>
        </motion.button>

        {/* Notifications Icon - Always visible */}
        <motion.button
          className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors relative"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <BellIcon className="w-5 h-5" />
          {/* Optional badge */}
          <motion.span
            className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center text-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            3
          </motion.span>
        </motion.button>
      </div>

      {/* Mobile Menu Overlay - If toggled */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Mobile actions - Customize as needed */}
          <motion.div
            className="bg-white h-full w-64 p-4"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Add mobile-specific actions here */}
            <button className="w-full text-left py-2">Message CHW</button>
            <button className="w-full text-left py-2">Add CHW</button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}