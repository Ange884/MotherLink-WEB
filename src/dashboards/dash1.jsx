import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardContent from "../components/Dash-content";

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 space-y-4">
        <Topbar />
        <DashboardContent />
      </div>
    </div>
  );
}
