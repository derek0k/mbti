import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ user, children }) {
  if (!user) {
    <Navigate to="/login" />;
  }
  return children;
}
