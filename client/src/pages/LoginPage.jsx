import { useState } from "react";
import { useNavigate } from "react-router";
import "./LoginPage.css"
function LoginPage() {
  const navigate = useNavigate();
  if (localStorage.getItem("token")) {
    navigate("/home");
  }

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  async function handleLogin(event) {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
    event.preventDefault();
    const { username, password } = loginData;
    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("username", username);
        navigate("/home");
      } else {
        alert("Login failed");
        setLoginData({ username: "", password: "" });
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }
  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={loginData.username}
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
