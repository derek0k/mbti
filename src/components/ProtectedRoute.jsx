import { Navigate, useLocation } from "react-router-dom";
import { useUserStore } from "../store/userStore";

export default function ProtectedRoute({ children }) {
  const { user } = useUserStore();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
