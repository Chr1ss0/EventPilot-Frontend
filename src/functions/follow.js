export default async function follow(event, updateUser) {
  const response = await fetch(
    import.meta.env.VITE_BACKEND_URL +
      '/api/user/follow/' +
      event.organizer._id,
    { method: 'POST', credentials: 'include' },
  );
  // console.log(response);
  const result = await response.json();
  console.log(result);
  if (!response.ok) return;
  updateUser();
}
