import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Search, Phone, ArrowRight, Download, Plus } from "lucide-react";

const ambulanceData = [
  {
    id: 1,
    plate: "AMB-00815",
    driver: "John Doe",
    status: "Available",
    location: "Kicukiro / Byogogo",
    lastUpdate: "2 min ago",
    vehicleType: "Type B",
    maintenanceDate: "29 - 09 - 2025",
    phone: "+250 78 123 4567",
  },
  {
    id: 2,
    plate: "AMB-00835",
    driver: "Jane Smith",
    status: "On Call",
    location: "Gasabo / Remera",
    lastUpdate: "5 min ago",
    vehicleType: "Type C",
    maintenanceDate: "25 - 09 - 2025",
    phone: "+250 78 234 5678",
  },
  {
    id: 3,
    plate: "AMB-00855",
    driver: "Robert Johnson",
    status: "Available",
    location: "Kicukiro / Gahanga",
    lastUpdate: "10 min ago",
    vehicleType: "Type B",
    maintenanceDate: "10 - 10 - 2025",
    phone: "+250 78 345 6789",
  },
  {
    id: 4,
    plate: "AMB-00816",
    driver: "Sarah Williams",
    status: "In Transit",
    location: "Nyarugenge / Nyamirambo",
    lastUpdate: "15 min ago",
    vehicleType: "Type A",
    maintenanceDate: "05 - 10 - 2025",
    phone: "+250 78 456 7890",
  },
];

export default function AmbulanceTracker() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Ambulance Tracker</h1>
          <p className="text-muted-foreground">
            Track and manage ambulance services in real-time
          </p>
        </div>
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search ambulances..."
            className="w-full md:w-[300px] pl-8"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Ambulances</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Now</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">+3 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">On Call</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">-1 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Maintenance</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">+0 from yesterday</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters toolbar */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex-1 relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="search by name, phone number, or id" className="pl-8" />
            </div>
            <div className="flex items-center gap-3">
              <select className="h-10 w-[140px] rounded-md border border-gray-300 bg-white px-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option value="all">status</option>
                <option value="available">Available</option>
                <option value="oncall">On call</option>
                <option value="transit">In transit</option>
                <option value="maintenance">Maintenance</option>
              </select>
              <select className="h-10 w-[160px] rounded-md border border-gray-300 bg-white px-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option value="all">all locations</option>
                <option value="kicukiro">Kicukiro</option>
                <option value="gasabo">Gasabo</option>
                <option value="nyarugenge">Nyarugenge</option>
              </select>
              <select className="h-10 w-[150px] rounded-md border border-gray-300 bg-white px-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option value="all">vehicle type</option>
                <option value="type-a">Type A</option>
                <option value="type-b">Type B</option>
                <option value="type-c">Type C</option>
              </select>
              <Button variant="outline" className="gap-2"><Download className="h-4 w-4" /> Export CSV</Button>
              <Button className="gap-2"><Plus className="h-4 w-4" /> Assign cases</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Map + Availability chart */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Ambulance locations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-[16/9] w-full rounded-lg border bg-muted/30 flex items-center justify-center text-muted-foreground">
              Map placeholder (plug Leaflet/Mapbox later)
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Ambulance availability</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center">
                {/* Simple donut chart using SVG */}
                <svg width="180" height="180" viewBox="0 0 42 42" className="-rotate-90">
                  <circle cx="21" cy="21" r="15.9155" fill="transparent" stroke="#e5e7eb" strokeWidth="8" />
                  {/* Available 60% */}
                  <circle cx="21" cy="21" r="15.9155" fill="transparent" stroke="#22c55e" strokeWidth="8" strokeDasharray="60 40" strokeDashoffset="0" />
                  {/* In transit 25% */}
                  <circle cx="21" cy="21" r="15.9155" fill="transparent" stroke="#3b82f6" strokeWidth="8" strokeDasharray="25 75" strokeDashoffset="-60" />
                  {/* Maintenance 10% */}
                  <circle cx="21" cy="21" r="15.9155" fill="transparent" stroke="#f59e0b" strokeWidth="8" strokeDasharray="10 90" strokeDashoffset="-85" />
                  {/* Offline 5% */}
                  <circle cx="21" cy="21" r="15.9155" fill="transparent" stroke="#9ca3af" strokeWidth="8" strokeDasharray="5 95" strokeDashoffset="-95" />
                  <circle cx="21" cy="21" r="10" fill="#fff" />
                </svg>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-green-500" /> Available</div>
                  <div>60</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-blue-500" /> In transit</div>
                  <div>25</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-amber-500" /> Maintenance</div>
                  <div>10</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-gray-400" /> Offline</div>
                  <div>5</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data table */}
      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Amb Plate number</TableHead>
                <TableHead>Driver</TableHead>
                <TableHead>Current Location</TableHead>
                <TableHead>Vehicle type</TableHead>
                <TableHead>Maintenance date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ambulanceData.map((a) => (
                <TableRow key={a.id}>
                  <TableCell className="font-medium">{a.plate}</TableCell>
                  <TableCell>{a.driver}</TableCell>
                  <TableCell>{a.location}</TableCell>
                  <TableCell>{a.vehicleType}</TableCell>
                  <TableCell>{a.maintenanceDate}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`${
                      a.status === 'Available'
                        ? 'text-green-700 border-green-200 bg-green-50'
                        : a.status === 'On Call'
                        ? 'text-yellow-700 border-yellow-200 bg-yellow-50'
                        : a.status === 'In Transit'
                        ? 'text-blue-700 border-blue-200 bg-blue-50'
                        : 'text-gray-700 border-gray-200 bg-gray-50'
                    }`}>
                      {a.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <a href={`tel:${a.phone}`} className="text-muted-foreground hover:text-primary" title="Call driver">
                      <Phone className="inline-block h-4 w-4" />
                    </a>
                    <Button variant="ghost" size="sm" className="h-8">Details <ArrowRight className="ml-1 h-4 w-4" /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}