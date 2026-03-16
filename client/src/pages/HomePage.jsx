import { useNavigate } from "react-router";
import LauncherCard from "../components/LauncherCard";

function HomePage(props) {
  const navigate = useNavigate();
  const { launchers } = props;

  return (
    <>
      <nav>
        <button onClick={() => navigate("/launchers/new")}>Add Launcher</button>
      </nav>
      <div className="launchers">
        {launchers.map((launcher) => (
          <LauncherCard key={launcher._id} launcher={launcher} onClick={() => navigate(`/launchers/details/${launcher._id}`)} />
        ))} 
      </div>
    </>
  );
}

export default HomePage;
