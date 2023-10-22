import { createContext, useEffect, useState } from 'react';

export const userContext = createContext({});

function UserProvider({ children }) {
  const [user, setUser] = useState(userContext);
  const [update, setUpdate] = useState(true);

  function updateUser() {
    setUpdate((prev) => !prev);
  }

  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + '/api/user/data',
        { credentials: 'include' },
      );
      console.log(response);
      const result = await response.json();
      console.log(result);
      if (!response.ok) {
        return;
      }
      setUser(result);
    }
    getUser();
  }, [update]);

  return (
    <userContext.Provider value={{ user, updateUser, setUser }}>
      {children}
    </userContext.Provider>
  );
}

export default UserProvider;
