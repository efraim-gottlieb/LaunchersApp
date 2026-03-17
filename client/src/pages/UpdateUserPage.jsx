import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function UpdateUserPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:8000/api/auth/register/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      <nav>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </nav>
      <div className="form">
        <label htmlFor="username">Name:</label>
        <input type="text" name="user" id="username" defaultValue={data.username} />
        <label htmlFor="name">Type:</label>
        <input type="text" name="user_type" id="user_type" defaultValue={data.user_type} />
        <label htmlFor="user_type">Email:</label>
        <input type="text" name="user_type" defaultValue={data.user_type} />
      </div>
    </div>
  );
}

export default UpdateUserPage;
