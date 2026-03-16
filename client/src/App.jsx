import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AddLauncherPage from "./pages/AddLauncherPage";
import LauncherDetailsPage from "./pages/LauncherDetailsPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/launcers/new" element={<AddLauncherPage />} />
        <Route path="/launcers/details" element={<LauncherDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
