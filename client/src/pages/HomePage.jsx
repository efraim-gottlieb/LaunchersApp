import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import "./HomePage.css";
import LauncherCard from "../components/LauncherCard";
import SearchBar from "../components/SearchBar";
import useLaunchers from "../hooks/useLaunchers";

function HomePage() {
  const navigate = useNavigate();
  const { launchers } = useLaunchers();
  if (!localStorage.getItem("token")) {
    navigate("/");
  }
  const [viewLaunchers, setViewLaunchers] = useState([]);

  useEffect(() => {
    if (!viewLaunchers.length) {
      setViewLaunchers(launchers);
    }
  }, [launchers]);
  const role = localStorage.getItem("role");
  async function profile() {
    const user = await fetch(`http://localhost:8000/api/auth/getUser`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await user.json();
    alert(
      `Username: ${data.username}\nType: ${data.user_type}\nLast login: ${new Date(data.last_login).toLocaleString()}`,
    );
  }

  return (
    <>
      <nav>
        <button className="profile" onClick={profile}>
          {localStorage.getItem("username").slice(0, 1).toUpperCase()}
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            localStorage.removeItem("role");
            navigate("/");
          }}
        >
          LogOut
        </button>
        {role === "admin" && (
          <button onClick={() => navigate("/users")}>Users</button>
        )}
        {["admin", "modiin"].includes(role) && (
          <button onClick={() => navigate("/launchers/new")}>
            + Add Launcher
          </button>
        )}
        <SearchBar DATA={launchers} seter={setViewLaunchers} />
      </nav>
      <div className="launchers">
        {viewLaunchers.map((launcher) => (
          <LauncherCard
            key={launcher._id}
            launcher={launcher}
            onClick={() => navigate(`/launchers/details/${launcher._id}`)}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
