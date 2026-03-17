import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import "./LauncherDetailsPage.css";
function LauncherDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:8000/api/launchers/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      console.log(data);
      setData(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  async function deleteLauncher() {
    await fetch(`http://localhost:8000/api/launchers/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}` },
    });
    alert("Launcher deleted !");
    navigate("/home");
    document.location.reload();
  }
  async function setDestroyed() {
    await fetch(`http://localhost:8000/api/launchers/destroyed/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem("token")}` },
    });
    alert("Launcher set to destroyed !");
    navigate("/home");
    document.location.reload();
  }
  return (
    <>
      <nav>
        <button onClick={() => navigate(-1)}>Home</button>
      </nav>
      <div className="launcher-details">
        {data && (
          <div>
            <h2>{data.name}</h2>
            <p>City: {data.city}</p>
            <p>Rocket Type: {data.rocketType}</p>
            <p>Latitude: {data.latitude}</p>
            <p>Longitude: {data.longitude}</p>
            <p>Destroyed: {data.destroyed ? "Yes" : "No"}</p>
            {['admin', 'modiin'].includes(localStorage.getItem("role")) && <button onClick={deleteLauncher}>Delete Launcher</button>}
            {['admin', 'air'].includes(localStorage.getItem("role")) && !data.destroyed && <button onClick={setDestroyed}>Set Destroyed</button>}
          </div>
        )}
      </div>
    </>
  );
}

export default LauncherDetailsPage;
