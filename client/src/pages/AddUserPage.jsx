import { useNavigate } from "react-router";
import "./AddUserPage.css";

function AddUserPage() {
  const navigate = useNavigate();
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

      <div className="add-user">
        <h2>Create User</h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const username = e.target.username.value;
            const password = e.target.password.value;
            const email = e.target.email.value;
            const user_type = e.target.user_type.value;
            try {
              const res = await fetch(
                "http://localhost:8000/api/auth/register",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                  body: JSON.stringify({
                    username,
                    password,
                    email,
                    user_type,
                  }),
                },
              );
              if (res.ok) {
                alert("user created !");
                navigate("/register");
                window.location.reload();
              } else {
                const errorText = await res.text();
                alert(errorText);
              }
            } catch (err) {
              alert("error");
            }
          }}
        >
          <div className="form">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="user_type">User Type:</label>
            <input type="text" id="user_type" name="user_type" />
            <button type="submit">Create User</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUserPage;
