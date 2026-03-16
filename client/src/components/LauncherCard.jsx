import "./launcherCard.css"
function LauncherCard({ launcher, onClick }) {
  const { _id, name, city, rocketType } = launcher;
  return (
    <div className="launcher-card" onClick={onClick}>
      <h3>{name}</h3>
      <p>City: {city}</p>
      <p>Rocket Type: {rocketType}</p>
    </div>
  )
}

export default LauncherCard
