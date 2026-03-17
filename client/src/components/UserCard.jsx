import { useNavigate } from "react-router";
import "./UserCard.css";
function UserCard({ user }) {
    const navigate = useNavigate()
  const { username, email, user_type, last_login, _id } = user;
  async function deleteUser() {
    try {
      const res = await fetch(
        `http://localhost:8000/api/auth/register/${_id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      if (res.ok) {
        alert("user deleted !");
        window.location.reload();
      } else {
        alert("error");
      }
    } catch (err) {
      alert("error");
    }
  }
  return (
    <div className="user-card">
      <h3>{username}</h3>
      <p>{email}</p>
      <p>{user_type}</p>
      <p>{last_login}</p>
      <button onClick={deleteUser}>Delete User</button>
      <button onClick={()=>{navigate(`/register/update/${user._id}`)}}>Edit User</button>
    </div>
  );
}

export default UserCard;
