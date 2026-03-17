import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function UpdateUserPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState({});

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
  async function send() {
    try {
      const res = await fetch(
        `http://localhost:8000/api/auth/register/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            username: document.getElementById("username").value,
            user_type: document.getElementById("user_type").value,
            email: document.getElementById("email").value,
          }),
        },
      );
      if (res.ok) {
        alert("user updated !");
        navigate(-1);
      } else {
        alert("error");
      }
    } catch (err) {
      alert("error");
    }
  }
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
        <label htmlFor="user_type">Type:</label>
        <input type="text" name="user_type" id="user_type" defaultValue={data.user_type} />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" defaultValue={data.email} />
        <button onClick={send}>Update</button>
      </div>
    </div>
  );
}

export default UpdateUserPage;
