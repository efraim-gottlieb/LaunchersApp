import "./launcherCard.css";
function LauncherCard({ launcher, onClick }) {

  const { _id, name, city, rocketType , destroyed} = launcher;
  return (
    <div className="launcher-card" onClick={onClick} key={_id}>
      <h3>{name}</h3>
      <p>City: {city}</p>
      <p>Rocket Type: {rocketType}</p>
      <p>Destroyed: {destroyed ? "Yes" : "No"}</p>
      <button onClick={onClick}>More</button>
    </div>
  );
}

export default LauncherCard;
