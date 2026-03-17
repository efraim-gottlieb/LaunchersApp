import React from 'react'
import { useNavigate } from 'react-router'

function UpdateUserPage() {
      const navigate = useNavigate()
  return (
    <div>
        <nav>
            <button onClick={()=>{navigate(-1)}}>Back</button>
        </nav>
      update user page
    </div>
  )
}

export default UpdateUserPage
