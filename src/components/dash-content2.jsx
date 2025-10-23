import { motion } from "framer-motion";
import {
  Users,
  Calendar,
  AlertTriangle,
  Activity,
  MapPin,
  Eye,
  Edit,
  Trash,
  ChevronDown,
  Search,
  Filter,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";

// Stats data
const statsData = [
  {
    title: "Total Patients",
    value: 2456,
    icon: <Users className="text-blue-500" size={28} />,
    color: "blue",
    trend: "+12%",
  },
  {
    title: "Appointments",
    value: 832,
    icon: <Calendar className="text-purple-500" size={28} />,
    color: "purple",
    trend: "-3%",
  },
  {
    title: "Ambulance Requests",
    value: 76,
    icon: <AlertTriangle className="text-red-500" size={28} />,
    color: "red",
    trend: "+45%",
  },
  {
    title: "CHW Managed Cases",
    value: 154,
    icon: <Activity className="text-green-500" size={28} />,
    color: "green",
    trend: "+8%",
  },
];

// Users data
const initialUsers = [
  {
    id: 1,
    name: "Uwase Marie Claire",
    gender: "Female",
    phone: "+250 788 123 456",
    location: "Kimironko / Byoggo",
    startDate: "25 - 09 - 2025",
    status: "Active",
  },
  {
    id: 2,
    name: "Mukamana Jane",
    gender: "Female",
    phone: "+250 722 789 012",
    location: "Gasabo / Remera",
    startDate: "20 - 09 - 2025",
    status: "Offline",
  },
  {
    id: 3,
    name: "Niyonzima Pierre",
    gender: "Male",
    phone: "+250 785 456 789",
    location: "Kicukiro / Gahanga",
    startDate: "15 - 10 - 2025",
    status: "Active",
  },
  {
    id: 4,
    name: "Uwamahoro Aline",
    gender: "Female",
    phone: "+250 728 321 654",
    location: "Nyarugenge / Nyakabanda",
    startDate: "10 - 10 - 2025",
    status: "Pending",
  },
  {
    id: 5,
    name: "Habimana Jean",
    gender: "Male",
    phone: "+250 792 987 654",
    location: "Gasabo / Kacyiru",
    startDate: "05 - 10 - 2025",
    status: "Active",
  },
   {
    id: 3,
    name: "Niyonzima Pierre",
    gender: "Male",
    phone: "+250 785 456 789",
    location: "Kicukiro / Gahanga",
    startDate: "15 - 10 - 2025",
    status: "Active",
  },
  {
    id: 4,
    name: "Uwamahoro Aline",
    gender: "Female",
    phone: "+250 728 321 654",
    location: "Nyarugenge / Nyakabanda",
    startDate: "10 - 10 - 2025",
    status: "Pending",
  },
  {
    id: 2,
    name: "Mukamana Jane",
    gender: "Female",
    phone: "+250 722 789 012",
    location: "Gasabo / Remera",
    startDate: "20 - 09 - 2025",
    status: "Offline",
  },

];

export default function Dash2() {
  const [animatedValues, setAnimatedValues] = useState(statsData.map(() => 0));
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [genderFilter, setGenderFilter] = useState("All");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState({ type: null, id: null });

  // Tailwind color mappings
  const colorMap = {
    blue: "bg-blue-100",
    purple: "bg-purple-100",
    red: "bg-red-100",
    green: "bg-green-100",
  };
  const gradientMap = {
    blue: "from-blue-400 via-blue-500 to-blue-600",
    purple: "from-purple-400 via-purple-500 to-purple-600",
    red: "from-red-400 via-red-500 to-red-600",
    green: "from-green-400 via-green-500 to-green-600",
  };

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

  // Filter and sort users
  const filteredUsers = useMemo(() => {
    let filtered = initialUsers.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phone.includes(searchTerm) ||
        user.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "All" || user.status === statusFilter;
      const matchesLocation = locationFilter === "All" || user.location.includes(locationFilter);
      const matchesGender = genderFilter === "All" || user.gender === genderFilter;
      return matchesSearch && matchesStatus && matchesLocation && matchesGender;
    });

    if (sortConfig.key) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [searchTerm, statusFilter, locationFilter, genderFilter, sortConfig]);

  const usersPerPage = 5;
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const handleAction = (type, id) => {
    setShowModal({ type, id });
    console.log(`${type} clicked for user ${id}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };
  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1, duration: 0.4 } }),
  };

  return (
    <>
      {/* Stats Section */}
      <motion.div
        className="p-6 space-y-8 relative min-h-screen bg-gradient-to-br from-blue-50/40 via-indigo-50/30 to-purple-50/40 rounded-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={itemVariants}>
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              className={`bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl border text-center transition-all duration-300 group relative overflow-hidden`}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <motion.div
                className="relative z-10 flex flex-col items-center space-y-4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className={`${colorMap[stat.color]} p-4 rounded-2xl group-hover:rotate-6 transition-transform shadow-lg`}>
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-gray-600 text-sm font-semibold">{stat.title}</h3>
                  <motion.p
                    className="text-3xl font-bold text-[#0B2447] mt-1"
                    key={animatedValues[i]}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {animatedValues[i].toLocaleString()}
                  </motion.p>
                  <p className="text-xs text-gray-500 flex items-center justify-center mt-1">
                    <motion.span
                      className="w-4 h-4 inline-block"
                      animate={{ rotate: stat.trend.startsWith("+") ? 0 : 180 }}
                    >
                      <ChevronDown size={14} />
                    </motion.span>
                    <span className={`ml-1 ${stat.trend.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                      {stat.trend}
                    </span>
                  </p>
                </div>
                <motion.div
                  className={`w-full h-1.5 rounded-full bg-gradient-to-r ${gradientMap[stat.color]}`}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 1, ease: "easeOut" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Users Table */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 mx-6 -mt-4 "
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Search & Filters */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
            <div className="relative flex items-center border-2 border-gray-200 rounded-xl px-4 py-3 w-full lg:w-1/3 focus-within:border-blue-500 transition-all">
              <Search size={20} className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search by name, phone, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-sm focus:outline-none bg-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-3 w-full lg:w-auto">
              <button className="flex items-center text-sm border border-gray-200 rounded-xl px-4 py-2 hover:bg-gray-50 hover:border-gray-300 transition-all">
                <Filter size={16} className="mr-2 text-gray-500" /> Status
              </button>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="text-sm border border-gray-200 rounded-xl px-4 py-2 hover:bg-gray-50 focus:border-blue-500 focus:outline-none transition-all"
              >
                <option>All</option>
                <option>Active</option>
                <option>Offline</option>
                <option>Pending</option>
              </select>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="text-sm border border-gray-200 rounded-xl px-4 py-2 hover:bg-gray-50 focus:border-blue-500 focus:outline-none transition-all"
              >
                <option>All</option>
                <option>Kimironko</option>
                <option>Gasabo</option>
                <option>Kicukiro</option>
                <option>Nyarugenge</option>
              </select>
              <select
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                className="text-sm border border-gray-200 rounded-xl px-4 py-2 hover:bg-gray-50 focus:border-blue-500 focus:outline-none transition-all"
              >
                <option>All</option>
                <option>Female</option>
                <option>Male</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
  <table className="min-w-full text-sm table-fixed">
    <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
      <tr>
        {[
          { key: "name", label: "Full Name" },
          { key: "gender", label: "Gender" },
          { key: "phone", label: "Phone Number" },
          { key: "location", label: "Location" },
          { key: "startDate", label: "Start Date" },
          { key: "status", label: "Status" },
          { label: "Actions" },
        ].map((header, i) => (
          <th
            key={i}
            className={`p-3 font-semibold text-gray-700 text-left cursor-pointer hover:bg-gray-100 transition-colors`}
            onClick={() => header.key && handleSort(header.key)}
          >
            <div className="flex items-center gap-1">
              {header.label}
              {header.key && sortConfig.key === header.key && (
                <motion.div
                  animate={{ rotate: sortConfig.direction === "asc" ? 0 : 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={14} className="text-gray-400" />
                </motion.div>
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>

    <tbody>
      {paginatedUsers.length === 0 ? (
        <tr>
          <td colSpan={7} className="p-6 text-center text-gray-500">
            No users found matching your criteria.
          </td>
        </tr>
      ) : (
        paginatedUsers.map((user, i) => (
          <tr
            key={user.id}
            className="border-b border-gray-100 hover:bg-blue-50/50 transition-all duration-200"
          >
            <td className="p-3 font-medium text-gray-800">{user.name}</td>
            <td className="p-3 text-center">
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  user.gender === "Female" ? "bg-pink-100 text-pink-700" : "bg-blue-100 text-blue-700"
                }`}
              >
                {user.gender}
              </span>
            </td>
            <td className="p-3 text-gray-600">{user.phone}</td>
            <td className="p-3 text-gray-600">{user.location}</td>
            <td className="p-3 text-gray-600">{user.startDate}</td>
            <td className="p-3 text-center">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  user.status === "Active"
                    ? "bg-green-100 text-green-700 shadow-md"
                    : user.status === "Offline"
                    ? "bg-gray-100 text-gray-500"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {user.status}
              </span>
            </td>
            <td className="p-3 flex items-center justify-center gap-2">
              <button
                onClick={() => handleAction("view", user.id)}
                className="p-2 text-blue-500 hover:bg-blue-100 rounded-lg transition-colors"
              >
                <Eye size={16} />
              </button>
              <button
                onClick={() => handleAction("edit", user.id)}
                className="p-2 text-yellow-500 hover:bg-yellow-100 rounded-lg transition-colors"
              >
                <Edit size={16} />
              </button>
              <button
                onClick={() => handleAction("delete", user.id)}
                className="p-2 text-red-500 hover:bg-red-100 rounded-lg transition-colors"
              >
                <Trash size={16} />
              </button>
            </td>
          </tr>
        ))
      )}
    </tbody>
  </table>
</div>

          {/* Pagination */}
          {filteredUsers.length > 0 && (
            <motion.div
              className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-gray-500 text-sm">
                Showing {Math.min((currentPage - 1) * usersPerPage + 1, filteredUsers.length)}-
                {Math.min(currentPage * usersPerPage, filteredUsers.length)} of {filteredUsers.length}
              </p>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium ${
                      currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    } transition-colors`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
