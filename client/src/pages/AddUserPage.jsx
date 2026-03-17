import { useNavigate } from "react-router"

function AddUserPage() {
  const navigate = useNavigate()
  return (
    <div>
        <nav>
            <button onClick={()=>{navigate(-1)}}>Back</button>
        </nav>

      <div className="form">
        <h2>Create User</h2>
        <form onSubmit={async (e) => {
          e.preventDefault()
          const username = e.target.username.value
          const password = e.target.password.value
          const email = e.target.email.value
          const user_type = e.target.user_type.value
          try {
            const res = await fetch("http://localhost:8000/api/auth/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
              body: JSON.stringify({ username, password, email, user_type }),
            });
            if (res.ok) {
              alert("user created !");
              navigate('/register')
              window.location.reload();
            } else {
              const errorText = await res.text();
              alert(errorText);
            }
          } catch (err) {
            alert("error");
          }
        }}>
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="user_type" placeholder="User Type" />
          <button type="submit">Create User</button>
        </form>

      </div>
    </div>
  )
}

export default AddUserPage