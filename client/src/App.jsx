import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AddLauncherPage from "./pages/AddLauncherPage";
import LauncherDetailsPage from "./pages/LauncherDetailsPage";
import "./App.css";
import useLaunchers from "./hooks/useLaunchers";
import { useEffect } from "react";

function App() {
  const {launchers} = useLaunchers()
  console.log(launchers)
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/launcers/new" element={<AddLauncherPage />} />
        <Route path="/launcers/details/:id" element={<LauncherDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
