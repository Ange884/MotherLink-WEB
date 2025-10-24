import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';

  if (!isAuthenticated) {
    // Redirect to login page, but save the current location they were trying to go to
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
