import { useNavigate } from "react-router"

function RegisterPage() {
    const navigate = useNavigate()

  return (
    <>
    <nav>
        <button onClick={()=>{navigate(-1)}}>Home</button>
        <button onClick={()=>{navigate('/register/create')}}>Create User +</button>
    </nav>
    <div>
      register
    </div>
    </>
  )
}

export default RegisterPage
