import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import Login from "../pages/LoginPage";
import Signup from "../pages/SignupPage";
import ProfilePage from "../pages/ProfilePage";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";
import ProtectedRoute from "../components/ProtectedRoute";
import Layout from "../components/Layout";

const withProtectedRoute = (Component) => {
  return (props) => (
    <ProtectedRoute>
      <Component {...props} />
    </ProtectedRoute>
  );
};

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={withProtectedRoute(ProfilePage)()} />
          <Route path="/test" element={withProtectedRoute(TestPage)()} />
          <Route
            path="/results"
            element={withProtectedRoute(TestResultPage)()}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
