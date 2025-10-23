import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Dash2 from "../components/dash-content2";

export default function Dashboard2() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 space-y-4">
        <Topbar />
        <Dash2 />
      </div>
    </div>
  );
}
