import React, { useState } from "react";
import {
  Bell,
  Download,
  Eye,
  Filter,
  Pencil,
  Plus,
  Search,
  Trash2,
  MapPin,
  Users,
  Activity,
  Calendar,
  AlertTriangle,
  BarChart3,
  Settings,
} from "lucide-react";

// Data structures
const statsData = [
  { title: "Total Ambulances", value: "1,287", change: "+45 this week", trend: "up", icon: Activity, color: "bg-blue-500" },
  { title: "En Route", value: "156", change: "+23 today", trend: "up", icon: MapPin, color: "bg-green-500" },
  { title: "Available", value: "1,131", change: "-2 from yesterday", trend: "down", icon: Users, color: "bg-emerald-500" },
  { title: "In Maintenance", value: "89", change: "+12 last month", trend: "up", icon: AlertTriangle, color: "bg-orange-500" },
];

const tableData = [
  { id: 1, plateNumber: "AMB-00835", driver: "Kabera John", currentLocation: "Kamatamu Hospital", vehicleType: "Kimironko / Biryogo", maintenanceDate: "25-09-2025", status: "Online", statusColor: "bg-green-100 text-green-800" },
  { id: 2, plateNumber: "AMB-01247", driver: "Niyonzima Sarah", currentLocation: "Nyamata District", vehicleType: "Type B Advanced", maintenanceDate: "18-10-2025", status: "En Route", statusColor: "bg-blue-100 text-blue-800" },
  { id: 3, plateNumber: "AMB-00912", driver: "Uwimana Peter", currentLocation: "Kigali Central", vehicleType: "Basic Life Support", maintenanceDate: "05-11-2025", status: "Available", statusColor: "bg-emerald-100 text-emerald-800" },
  { id: 4, plateNumber: "AMB-01567", driver: "Mukamana Grace", currentLocation: "Muhanga Health Center", vehicleType: "Kimironko / Biryogo", maintenanceDate: "30-09-2025", status: "Maintenance", statusColor: "bg-orange-100 text-orange-800" },
];

const legendItems = [
  { label: "Available", color: "bg-emerald-500", borderColor: "border-emerald-500" },
  { label: "En Route", color: "bg-blue-500", borderColor: "border-blue-500" },
  { label: "Maintenance", color: "bg-orange-500", borderColor: "border-orange-500" },
  { label: "Offline", color: "bg-gray-500", borderColor: "border-gray-500" },
];

// Simple map placeholder
const MapPlaceholder = () => (
  <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
    <div className="text-center text-gray-500">
      <MapPin className="w-12 h-12 mx-auto mb-4 opacity-60" />
      <h3 className="text-lg font-semibold mb-2">Live Ambulance Map</h3>
      <p className="text-sm">Interactive map coming soon – Track real-time locations</p>
    </div>
  </div>
);

export default function CHWManagement() {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-poppins flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b h-20 flex items-center justify-between px-6 lg:px-8 sticky top-0 z-10">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search ambulances, drivers, or locations..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition-all duration-200 group">
            <Bell className="w-5 h-5 text-gray-600 group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
          </button>
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 lg:p-8 overflow-auto animate-slide-up">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Ambulance Tracker</h1>
            <p className="text-gray-600">Monitor fleet status and real-time locations</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button className="border border-gray-300 px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:shadow-md transition-all duration-200 hover:border-gray-400">
              <Download className="w-4 h-4" /> Export CSV
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
              <Plus className="w-4 h-4" /> Assign Case
            </button>
            <button 
              onClick={() => setFilterOpen(!filterOpen)}
              className="border border-gray-300 px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:shadow-md transition-all duration-200"
            >
              <Filter className="w-4 h-4" /> Filters
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, i) => (
            <div 
              key={i} 
              className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} {stat.trend === 'up' ? '↗' : '↘'}
                  </p>
                </div>
                <div className={`p-2 rounded-lg ${stat.color} group-hover:scale-110 transition-transform duration-200`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-6">
          {legendItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-700 animate-fade-in" style={{ animationDelay: `${(i + 4) * 100}ms` }}>
              <div className={`w-3 h-3 rounded-full ${item.color} ${item.borderColor} border-2`}></div>
              {item.label}
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="mb-8 animate-slide-up">
          <MapPlaceholder />
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-slide-up">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Plate Number</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Driver</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Vehicle Type</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Maintenance</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tableData.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.plateNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.driver}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.currentLocation}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.vehicleType}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.maintenanceDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${row.statusColor}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button className="p-1.5 text-blue-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:scale-110">
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 text-red-600 hover:text-red-900 hover:bg-red-50 rounded-lg transition-all duration-200 hover:scale-110">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110">
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
            <span className="text-sm text-gray-600">Showing 1-4 of 20 results</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm border rounded hover:bg-gray-100 transition-colors">Previous</button>
              <button className="px-3 py-1 text-sm border rounded bg-blue-600 text-white hover:bg-blue-700">Next</button>
            </div>
          </div>
        </div>
      </main>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
}