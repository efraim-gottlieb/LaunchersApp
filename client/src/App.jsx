import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AddLauncherPage from "./pages/AddLauncherPage";
import LauncherDetailsPage from "./pages/LauncherDetailsPage";
import "./App.css";
import useLaunchers from "./hooks/useLaunchers";

function App() {
  const { launchers } = useLaunchers();
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage launchers={launchers} />} />
        <Route path="/launchers/details/:id" element={<LauncherDetailsPage />} />
        <Route path="/launchers/new" element={<AddLauncherPage />} />
      </Routes>
    </>
  );
}

export default App;
