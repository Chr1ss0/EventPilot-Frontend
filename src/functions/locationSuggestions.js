export default async function locationHandler(event, setLocationUser) {
  if (event.target.value.length === 5) {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL +
        '/api/utility/location/' +
        event.target.value,
    );
    // console.log(response);
    const result = await response.json();
    console.log(result);
    if (!response.ok) return;
    if (result.length === 1) {
      setLocationUser(result[0]);
    } else {
      setLocations(result);
    }
  }
}
