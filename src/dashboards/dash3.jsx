import { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Dash2 from '../components/dash-content2';

export default function Dashboard3() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      {/* Sidebar - fixed */}
      <div className="fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Main content - scrollable */}
      <div className={`flex-1 ml-[250px] p-4 space-y-4 transition-all duration-300 ${isModalOpen ? 'blur-sm' : ''}`} style={{ maxHeight: '100vh', overflowY: 'auto' }}>
        <Topbar />
        <Dash2 openModal={openModal} />
      </div>

      {/* Modal */}
      {isModalOpen && selectedUser && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-[1px] z-40"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] max-w-full h-[500px] bg-white rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-[#0f4c75] text-white p-3 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Patient Details</h3>
              <button
                onClick={closeModal}
                className="text-white text-2xl hover:bg-gray-700 rounded p-1"
              >
                &times;
              </button>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center mt-4">
              <img
                src={selectedUser.photo || "/Amanda.JPG"}
                alt={selectedUser.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
              />
            </div>

            {/* User Info */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              <div>
                <h4 className="text-sm text-gray-500 uppercase">Personal Info</h4>
                <div className="grid grid-cols-2 gap-4 mt-2 text-sm text-gray-800">
                  <p><span className="font-semibold">Name:</span> {selectedUser.name}</p>
                  <p><span className="font-semibold">Gender:</span> {selectedUser.gender}</p>
                  <p><span className="font-semibold">Phone:</span> {selectedUser.phone}</p>
                  <p><span className="font-semibold">Email:</span> {selectedUser.email || "N/A"}</p>
                  <p><span className="font-semibold">ID:</span> {selectedUser.id}</p>
                  <p><span className="font-semibold">Clinic ID:</span> {selectedUser.clinicId || "N/A"}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm text-gray-500 uppercase">Clinic Info</h4>
                <div className="grid grid-cols-2 gap-4 mt-2 text-sm text-gray-800">
                  <p><span className="font-semibold">Village:</span> {selectedUser.village || "N/A"}</p>
                  <p><span className="font-semibold">District:</span> {selectedUser.district || "N/A"}</p>
                  <p><span className="font-semibold">Sector:</span> {selectedUser.sector || "N/A"}</p>
                  <p><span className="font-semibold">Province:</span> {selectedUser.province || "N/A"}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
