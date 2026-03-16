import { useParams } from "react-router"
function LauncherDetailsPage() {
  const {id}  = useParams()
  return (
    <div>
      Launcher Details Page
    </div>
  )
}

export default LauncherDetailsPage
