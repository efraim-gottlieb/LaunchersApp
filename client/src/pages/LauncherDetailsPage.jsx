import { useParams } from "react-router";
import { useEffect, useState } from "react";

function LauncherDetailsPage() {
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

  return <div>{JSON.stringify(data)}</div>;
}

export default LauncherDetailsPage;
