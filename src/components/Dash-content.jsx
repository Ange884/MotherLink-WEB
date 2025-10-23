import { motion } from "framer-motion";
import { Users, Baby, Calendar, AlertCircle, Activity, BarChart3, Bell, Clock, MapPin, CheckCircle, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";

const statsData = [
  { title: "Total Mothers", value: 1287, icon: <Users size={20} className="text-blue-500" />, color: "blue" },
  { title: "Active Pregnancies", value: 456, icon: <Baby size={20} className="text-pink-500" />, color: "pink" },
  { title: "Total Children", value: 2345, icon: <Users size={20} className="text-green-500" />, color: "green" },
  { title: "ANC Appointments", value: 89, icon: <Calendar size={20} className="text-purple-500" />, color: "purple" },
];

const recentActivity = [
  { title: "New CHW Registration", time: "5 mins ago", icon: <Users size={16} className="text-blue-400" /> },
  { title: "ANC Appointment completed", time: "10 mins ago", icon: <CheckCircle size={16} className="text-green-400" /> },
  { title: "Emergency alert resolved", time: "15 mins ago", icon: <AlertCircle size={16} className="text-orange-400" /> },
];

const emergencies = [
  { name: "Mukamana Jane", location: "Gasabo", status: "Resolved", statusColor: "green" },
  { name: "Uwase Claudine", location: "Kicukiro", status: "Pending", statusColor: "yellow" },
  { name: "Niyonzima Marie", location: "Nyarugenge", status: "In Progress", statusColor: "blue" },
];

const alerts = [
  { name: "Uwase Claudine", issue: "Bleeding", time: "5 mins ago", urgency: "high" },
  { name: "Mukamana Jane", issue: "Labor pain", time: "9 mins ago", urgency: "medium" },
  { name: "Niyonzima Marie", issue: "High BP", time: "12 mins ago", urgency: "high" },
];

export default function DashboardContent() {
  const [animatedValues, setAnimatedValues] = useState(statsData.map(() => 0));

  useEffect(() => {
    statsData.forEach((_, i) => {
      setTimeout(() => {
        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[i] = statsData[i].value;
          return newValues;
        });
      }, i * 200);
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="p-6 space-y-8 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 -z-10 rounded-3xl" />

      {/* Stats Section */}
      <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6" variants={itemVariants}>
        {statsData.map((stat, i) => (
          <motion.div
            key={i}
            className={`bg-gradient-to-br from-white to-gray-50/50 p-6 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100/50 text-center transition-all duration-300 group relative overflow-hidden`}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[${stat.color}-500]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <motion.div
              className="relative z-10 flex flex-col items-center space-y-3"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className="p-3 bg-[${stat.color}-100] rounded-xl group-hover:rotate-12 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
              <motion.p
                className="text-3xl font-bold text-[#0B2447]"
                key={animatedValues[i]}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {animatedValues[i].toLocaleString()}
              </motion.p>
              <motion.div
                className="w-full h-1 bg-gradient-to-r from-[${stat.color}-400] to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Reports + Recent Activity */}
      <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-6" variants={itemVariants}>
        <motion.div
          className="col-span-1 lg:col-span-2 bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6 shadow-lg border border-gray-100/50 relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ x: 5 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/20 to-transparent" />
          <motion.h2
            className="text-xl font-bold mb-4 text-[#0B2447] relative z-10"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.1 }}
          >
            Reports & Analytics <BarChart3 size={20} className="inline ml-2 text-blue-500" />
          </motion.h2>
          <div className="relative z-10 h-64 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-200/50">
            {/* Simple animated chart placeholder - replace with actual Chart.js integration */}
            <motion.div className="flex space-x-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              {[1, 3, 2, 5, 4, 6].map((height, i) => (
                <motion.div
                  key={i}
                  className="w-4 bg-gradient-to-t from-blue-400 to-blue-600 rounded-lg"
                  style={{ height: `${height * 20}px` }}
                  initial={{ scaleY: 0, originY: 1 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                />
              ))}
            </motion.div>
            <p className="ml-4 text-gray-500">Interactive chart loading...</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6 shadow-lg border border-gray-100/50"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
        >
          <motion.h2
            className="text-xl font-bold mb-4 text-[#0B2447] flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Recent Activity <Activity size={20} className="ml-2 text-green-500" />
          </motion.h2>
          <ul className="space-y-4">
            {recentActivity.map((activity, i) => (
              <motion.li
                key={i}
                className="flex items-center space-x-3 p-3 bg-gray-50/50 rounded-xl hover:bg-gray-100 transition-all cursor-pointer group"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-gray-800">{activity.title}</span>
                  <p className="text-xs text-gray-500 flex items-center mt-1">
                    <Clock size={12} className="mr-1" /> {activity.time}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Emergencies */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
        <motion.div
          className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6 shadow-lg border border-gray-100/50 overflow-hidden"
          variants={itemVariants}
          whileHover={{ y: -2 }}
        >
          <motion.h2
            className="text-xl font-bold mb-4 text-[#0B2447] flex items-center"
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Recent Emergencies <AlertCircle size={20} className="ml-2 text-orange-500" />
          </motion.h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 text-left font-semibold text-gray-700">Name</th>
                  <th className="py-2 text-left font-semibold text-gray-700">Location</th>
                  <th className="py-2 text-left font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {emergencies.map((emergency, i) => (
                  <motion.tr
                    key={i}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <td className="py-3 font-medium text-gray-800">{emergency.name}</td>
                    <td className="py-3 flex items-center text-gray-600">
                      <MapPin size={14} className="mr-1" /> {emergency.location}
                    </td>
                    <td>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold capitalize ${
                        emergency.statusColor === "green"
                          ? "bg-green-100 text-green-700"
                          : emergency.statusColor === "yellow"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {emergency.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6 shadow-lg border border-gray-100/50"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
        >
          <motion.h2
            className="text-xl font-bold mb-4 text-[#0B2447] flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Emergency Alerts <Bell size={20} className="ml-2 text-red-500" />
          </motion.h2>
          <ul className="space-y-4">
            {alerts.map((alert, i) => (
              <motion.li
                key={i}
                className={`p-3 rounded-xl border-l-4 transition-all cursor-pointer ${
                  alert.urgency === "high"
                    ? "border-red-500 bg-red-50/50 hover:bg-red-100"
                    : "border-yellow-500 bg-yellow-50/50 hover:bg-yellow-100"
                }`}
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 2, scale: 1.02 }}
              >
                <div className="flex items-start space-x-3">
                  <div className={`flex-shrink-0 mt-1 p-1 rounded-full ${
                    alert.urgency === "high" ? "bg-red-500" : "bg-yellow-500"
                  }`}>
                    <AlertTriangle size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">
                      <strong>{alert.name}</strong> — {alert.issue}
                    </p>
                    <p className="text-xs text-gray-500 flex items-center mt-1">
                      <Clock size={12} className="mr-1" /> {alert.time}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}