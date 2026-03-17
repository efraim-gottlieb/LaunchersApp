import { useNavigate } from "react-router"

function AddUserPage() {
  const navigate = useNavigate()
  return (
    <div>
        <nav>
            <button onClick={()=>{navigate(-1)}}>Back</button>
        </nav>
      add
    </div>
  )
}

export default AddUserPage