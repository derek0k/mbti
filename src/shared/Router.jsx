import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import Login from "../pages/LoginPage";
import Signup from "../pages/SignupPage";
import ProfilePage from "../pages/ProfilePage";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";
import ProtectedRoute from "../components/ProtectedRoute";
import Layout from "../components/Layout";

export default function Router({ user, setUser }) {
  return (
    <BrowserRouter>
      <Layout user={user} setUser={setUser}>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={user}>
                <ProfilePage user={user} setUser={setUser} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/test"
            element={
              <ProtectedRoute user={user}>
                <TestPage user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/results"
            element={
              <ProtectedRoute user={user}>
                <TestResultPage user={user} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
