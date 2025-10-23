import { Home, Users, Bell, BarChart2, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="bg-[#0B2447] text-white w-64 h-screen flex flex-col justify-between">
      <div>
        <div className="p-6 text-xl font-bold border-b border-gray-700">
          Mother Link
        </div>
        <ul className="mt-6 space-y-2 px-4">
          {[
            { icon: <Home size={18} />, label: "Dashboard" },
            { icon: <Users size={18} />, label: "User management" },
            { icon: <Bell size={18} />, label: "Emergency & Alerts" },
            { icon: <BarChart2 size={18} />, label: "Data analytics" },
            { icon: <Settings size={18} />, label: "Settings" },
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-[#19376D] cursor-pointer transition-all"
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-3">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">Welcome back</p>
            <p className="text-xs text-gray-400">Bonnie Umurerwa</p>
          </div>
        </div>
      </div>
    </div>
  );
}
