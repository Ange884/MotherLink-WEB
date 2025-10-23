import { motion } from "framer-motion";
import { Search, Bell, User, Menu } from "lucide-react";

export default function Topbar({ onMenuToggle }) {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      className="flex justify-between items-center bg-gradient-to-r from-white to-gray-50/50 shadow-lg px-6 py-4 rounded-xl border border-gray-200/50 backdrop-blur-sm relative overflow-hidden"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Subtle background shine */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full animate-shine" />

      {/* Left: Menu Toggle (Optional) */}
      <motion.button
        onClick={onMenuToggle}
        className="p-2 text-gray-600 hover:text-[#0B2447] rounded-lg hover:bg-gray-100 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Menu size={20} />
      </motion.button>

      {/* Center: Search Bar */}
      <motion.div
        className="flex items-center w-full max-w-2xl mx-4 relative group"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="relative flex w-full">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search everything..."
            className={`w-full pr-12 pl-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-700 placeholder-gray-500 font-medium ${
              isFocused
                ? "border-[#0B2447] shadow-md shadow-blue-200/50 bg-white"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <motion.div
            className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isFocused ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Search size={18} className="text-gray-400" />
          </motion.div>
          <motion.button
            className={`absolute inset-y-0 right-0 flex items-center px-4 rounded-r-xl transition-all duration-300 group-hover:scale-105 ${
              searchValue.length > 0
                ? "bg-[#0B2447] text-white shadow-lg shadow-blue-900/20"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              // Handle search logic here
              if (searchValue.trim()) {
                console.log("Searching for:", searchValue);
              }
            }}
          >
            <Search size={18} />
          </motion.button>
        </div>

        {/* Search suggestions placeholder (extra feature) */}
        {isFocused && searchValue.length > 2 && (
          <motion.div
            className="absolute top-full left-0 w-full mt-2 p-3 bg-white rounded-xl shadow-xl border border-gray-200 z-10"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-xs text-gray-500">Suggestions for "{searchValue}"</p>
            <ul className="mt-1 space-y-1">
              {["Dashboard reports", "User alerts", "Analytics overview"].map((suggestion, i) => (
                <li key={i} className="text-sm text-gray-700 hover:bg-gray-100 p-2 rounded cursor-pointer transition-colors">
                  {suggestion}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>

      {/* Right: Notifications & User */}
      <div className="flex items-center space-x-4">
        <motion.button
          className="relative p-2 text-gray-600 hover:text-red-500 rounded-lg hover:bg-gray-100 transition-all"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Bell size={20} />
          <motion.span
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center text-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            3
          </motion.span>
        </motion.button>

        <motion.div
          className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <img
            src="https://via.placeholder.com/32/4F46E5/FFFFFF?text=BU"
            alt="User"
            className="w-8 h-8 rounded-full ring-2 ring-gray-200"
          />
          <span className="text-sm font-medium text-gray-700 hidden sm:inline">Bonnie</span>
          <User size={16} className="text-gray-500" />
        </motion.div>
      </div>
    </motion.div>
  );
}