import { useNavigate } from "react-router"
import { useEffect, useState } from "react"
import UserCard from "../components/UserCard"

function RegisterPage() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function fetchUsers() {
            try {
                const res = await fetch("http://localhost:8000/api/auth/register", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                if (res.ok) {
                    const data = await res.json();
                    setUsers(data);
                } else {
                    alert("Error fetching users");
                }
            } catch (err) {
                alert("Error fetching users");
            }
        }
        fetchUsers();
    }, []);

  return (
    <>
    <nav>
        <button onClick={()=>{navigate(-1)}}>Home</button>
        <button onClick={()=>{navigate('/register/create')}}>Create User +</button>
    </nav>
    <div>
      {users.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </div>
    </>
  )
}

export default RegisterPage
