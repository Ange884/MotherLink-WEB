import { motion } from "framer-motion";
import {
  Users,
  Baby,
  Calendar,
  AlertCircle,
  Activity,
  BarChart3,
  Bell,
  Clock,
  MapPin,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { useState, useEffect } from "react";

// ✅ Define your stats data
const statsData = [
  {
    title: "Total Patients",
    value: 2456,
    icon: <Users className="text-blue-500" size={28} />,
    color: "blue",
  },
  {
    title: "Appointments",
    value: 832,
    icon: <Calendar className="text-purple-500" size={28} />,
    color: "purple",
  },
  {
    title: "Ambulance Requests",
    value: 76,
    icon: <AlertTriangle className="text-red-500" size={28} />,
    color: "red",
  },
  {
    title: "CHW Managed Cases",
    value: 154,
    icon: <Activity className="text-green-500" size={28} />,
    color: "green",
  },
];

export default function Dash2() {
  const [animatedValues, setAnimatedValues] = useState(statsData.map(() => 0));

  useEffect(() => {
    statsData.forEach((_, i) => {
      setTimeout(() => {
        setAnimatedValues((prev) => {
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
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="p-6 space-y-8 relative min-h-screen bg-gradient-to-br from-blue-50/40 to-purple-50/40 rounded-3xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
        variants={itemVariants}
      >
        {statsData.map((stat, i) => (
          <motion.div
            key={i}
            className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 text-center transition-all duration-300 group relative overflow-hidden`}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <motion.div
              className="relative z-10 flex flex-col items-center space-y-3"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className="p-3 bg-gray-100 rounded-xl group-hover:rotate-12 transition-transform">
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
                className={`w-full h-1 rounded-full ${
                  stat.color === "blue"
                    ? "bg-gradient-to-r from-blue-400 to-blue-200"
                    : stat.color === "purple"
                    ? "bg-gradient-to-r from-purple-400 to-purple-200"
                    : stat.color === "red"
                    ? "bg-gradient-to-r from-red-400 to-red-200"
                    : "bg-gradient-to-r from-green-400 to-green-200"
                }`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
