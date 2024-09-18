import { Navigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";

export default function ProtectedRoute({ children }) {
  const { user } = useUserStore();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}
