import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AddLauncherPage from "./pages/AddLauncherPage";
import LauncherDetailsPage from "./pages/LauncherDetailsPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import useLaunchers from "./hooks/useLaunchers";
import { useNavigate } from "react-router";
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
        <Route path="/home" element={<HomePage/>} />
        <Route path="/launchers/details/:id" element={<LauncherDetailsPage />} />
        <Route path="/launchers/new" element={<AddLauncherPage />} />
      </Routes>
    </>
  );
}

export default App;
