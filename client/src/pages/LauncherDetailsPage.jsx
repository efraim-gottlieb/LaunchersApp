import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import "./LauncherDetailsPage.css";
function LauncherDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:8000/api/launchers/${id}`);
      const data = await response.json();
      console.log(data);
      setData(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <nav>
        <button onClick={() => navigate("/")}>Home</button>
      </nav>
      <div className="launcher-details">
        {data && (
          <div>
            <h2>{data.name}</h2>
            <p>City: {data.city}</p>
            <p>Rocket Type: {data.rocketType}</p>
            <p>Latitude: {data.latitude}</p>
            <p>Longitude: {data.longitude}</p>
            <button onClick={async () => {
              await fetch(`http://localhost:8000/api/launchers/${id}`, {
                method: "DELETE",
              });
              alert("Launcher deleted !");
              navigate("/");
            }}>Delete Launcher</button>
          </div>
        )}
      </div>
    </>
  );
}

export default LauncherDetailsPage;
