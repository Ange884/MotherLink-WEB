export default function DashboardContent() {
  return (
    <div className="p-6 space-y-6">
      {/* Stats Section */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { title: "Total mothers", value: "1,287" },
          { title: "Active pregnancies", value: "1,287" },
          { title: "Total children", value: "1,287" },
          { title: "ANC Appointments", value: "89" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg transition"
          >
            <h3 className="text-gray-500 text-sm">{stat.title}</h3>
            <p className="text-2xl font-bold mt-2 text-[#0B2447]">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Reports + Recent Activity */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">Reports & Analytics</h2>
          <div className="h-48 flex items-center justify-center text-gray-400">
            📊 Chart placeholder
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
          <ul className="space-y-2 text-sm">
            <li className="border-b pb-2">
              <span className="font-semibold">New CHW Registration</span>
              <p className="text-gray-500 text-xs">5 mins ago</p>
            </li>
            <li>
              <span className="font-semibold">ANC Appointment completed</span>
              <p className="text-gray-500 text-xs">10 mins ago</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Emergencies */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">Recent Emergencies</h2>
          <table className="w-full text-sm text-left">
            <thead className="border-b">
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td>Mukamana Jane</td>
                <td>Gasabo</td>
                <td>Resolved</td>
              </tr>
              <tr>
                <td>Uwase Claudine</td>
                <td>Kicukiro</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">Emergency Alerts</h2>
          <ul className="space-y-2 text-sm">
            <li className="border-b pb-2">
              <p><strong>Uwase Claudine</strong> — Bleeding</p>
              <p className="text-xs text-gray-500">5 mins ago</p>
            </li>
            <li>
              <p><strong>Mukamana Jane</strong> — Labor pain</p>
              <p className="text-xs text-gray-500">9 mins ago</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
