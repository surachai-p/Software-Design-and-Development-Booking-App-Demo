import { Navigate } from "react-router-dom";
import { useAuth } from "../../../../src/contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;