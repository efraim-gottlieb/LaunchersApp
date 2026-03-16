export default async function getLauncherById(id) {
  const data = await fetch(`http://localhost:8000/api/launchers/${id}`);
  return await data.json();
}
