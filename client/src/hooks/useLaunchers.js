import { useEffect, useState } from "react";

export default function () {
  const [launchers, setLaunchers] = useState([]);
  async function fetchLaunchers() {
    const data = await fetch("http://localhost:8000/api/launchers" , {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setLaunchers(await data.json());
  }
  useEffect(() => {
    fetchLaunchers();
  }, []);
  return { launchers };
}
