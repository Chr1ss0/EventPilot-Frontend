import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const userContext = createContext({});

function UserProvider({ children }) {
  const navigate = useNavigate();

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
      // console.log(response);
      if (!response.ok) {
        navigate('/signin');
      }
      const result = await response.json();
      console.log(result);
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
