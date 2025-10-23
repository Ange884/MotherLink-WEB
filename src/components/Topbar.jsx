import { Search } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-3 rounded-lg">
      <div className="flex items-center w-full max-w-xl">
        <input
          type="text"
          placeholder="Search everything..."
          className="w-full border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
        />
        <button className="bg-[#0B2447] px-3 rounded-r-lg text-white">
          <Search size={18} />
        </button>
      </div>
    </div>
  );
}
