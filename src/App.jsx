import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './auth/sign-in1';
import Signup1 from './auth/sign-in2';
import Signup3 from './auth/sign-in3';
import Login from './auth/Login';
import Dashboard from './dashboards/dash1';
import Dashboard2 from './dashboards/dash2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup2" element={<Signup1 />} />
        <Route path="/signup3" element={<Signup3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/dashboard2" element={<Dashboard2/>} />
      </Routes>
    </Router>
  );
}

export default App;
