import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import "./HomePage.css"
import LauncherCard from "../components/LauncherCard";
import SearchBar from "../components/SearchBar";

function HomePage(props) {
  const navigate = useNavigate();
  const { launchers } = props;
  const [viewLaunchers, setViewLaunchers] = useState([]);

  useEffect(() => {
    if (!viewLaunchers.length) {
      setViewLaunchers(launchers);
    }
  }, [launchers]);

  return (
    <>
      <nav >
        <button onClick={() => navigate("/launchers/new")}>+ Add Launcher</button>
        <SearchBar DATA={launchers} seter={setViewLaunchers}/>
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
