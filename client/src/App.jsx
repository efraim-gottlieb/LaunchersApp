import "./App.css";
import { Routes, Route, useNavigate } from "react-router";

import HomePage from "./pages/HomePage";
import AddLauncherPage from "./pages/AddLauncherPage";
import LauncherDetailsPage from "./pages/LauncherDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AddUserPage from "./pages/AddUserPage";
import UpdateUserPage from "./pages/UpdateUserPage";

import useLaunchers from "./hooks/useLaunchers";

function App() {
  const navigate = useNavigate();
  try {
    useLaunchers();
  } catch (error) {
    navigate("/login");
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/launchers/details/:id"
          element={<LauncherDetailsPage />}
        />
        <Route path="/launchers/new" element={<AddLauncherPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/create" element={<AddUserPage />} />
        <Route path="/register/update/:id" element={<UpdateUserPage />} />
      </Routes>
    </>
  );
}

export default App;
