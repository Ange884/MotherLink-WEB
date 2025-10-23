import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './auth/sign-in1';
import Signup1 from './auth/sign-in2';
import Signup3 from './auth/sign-in3';
import Login from './auth/Login';
import Dashboard from './dashboards/dash1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup2" element={<Signup1 />} />
        <Route path="/signup3" element={<Signup3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
