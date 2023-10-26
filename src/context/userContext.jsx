import { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const userContext = createContext(null);

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [update, setUpdate] = useState(false);
  const allowedPaths = ['/signup', '/signin', '/'];
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function updateUser() {
    setUpdate((prev) => !prev);
  }

  useEffect(() => {
    if (allowedPaths.includes(pathname)) return;
    async function getUser() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + '/api/user/data',
        { credentials: 'include' },
      );

      // console.log(response);
      const result = await response.json();

      if (result.message === 'Token invalid.') return navigate('/signin');
      if (!response.ok) return console.error(result.message);
      console.log(result);
      setUser(result);
    }
    getUser();
  }, [update]);

  if (!user && !allowedPaths.includes(pathname)) return;

  return (
    <userContext.Provider value={{ user, updateUser }}>
      {children}
    </userContext.Provider>
  );
}

export default UserProvider;
