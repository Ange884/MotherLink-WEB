import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './auth/sign-in1';
import Signup1 from './auth/sign-in2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup2" element={<Signup1 />} />
      </Routes>
    </Router>
  );
}

export default App;
