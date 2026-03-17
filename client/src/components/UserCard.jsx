function UserCard({ user }) {
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
    <div>
      <h3>{username}</h3>
      <p>{email}</p>
      <p>{user_type}</p>
      <p>{last_login}</p>
      <button onClick={deleteUser}>Delete User</button>
    </div>
  );
}

export default UserCard;
//   username: { type: String, required: true },
//   password: { type: String, required: true },
//   email: { type: String },
//   user_type: { type: String },
//   last_login: { type: Date || null, default: null },
