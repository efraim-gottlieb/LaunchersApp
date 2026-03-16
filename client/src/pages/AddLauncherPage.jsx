import { lazy, useState } from "react";
import "./addLauncherPage.css";
function AddLauncherPage() {
  const [form, setForm] = useState({
    name: "",
    city: "",
    rocketType: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  async function send() {
    form.latitude = +form.latitude;
    form.longitude = +form.longitude;

    const response = await fetch("http://localhost:8000/api/launchers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (response.ok) {
      alert("Launcher created !");
    } else {
      alert("Error creating launcher");
    }
  }
  return (
    <div>
      <div className="form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          value={form.city}
          onChange={handleChange}
        />
        <label htmlFor="rocketType">Rocket Type</label>
        <input
          type="text"
          name="rocketType"
          id="rocketType"
          value={form.rocketType}
          onChange={handleChange}
        />
        <label htmlFor="latitude">Latitude</label>
        <input
          type="text"
          name="latitude"
          id="latitude"
          value={form.latitude}
          onChange={handleChange}
        />
        <label htmlFor="longitude">Longitude</label>
        <input
          type="text"
          name="longitude"
          id="longitude"
          value={form.longitude}
          onChange={handleChange}
        />
      </div>
      <button onClick={send}>Send</button>
    </div>
  );
}

export default AddLauncherPage;
