import { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const userContext = createContext(null);

function UserProvider({ children }) {
  const [user, setUser] = useState(userContext);
  const { pathname } = useLocation();
  const [hasUser, setHasUser] = useState(false);
  const [update, setUpdate] = useState(true);

  const navigate = useNavigate();

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
      const result = await response.json();
      console.log(result);
      if (
        result.message === 'Token invalid.' &&
        pathname !== '/signup' &&
        pathname !== '/signin' &&
        pathname !== '/'
      ) {
        navigate('/signin');
      }
      setHasUser(true);
      if (!response.ok) {
        return;
      }
      setUser(result);
    }
    getUser();
  }, [update]);

  return (
    <userContext.Provider value={{ user, updateUser, setUser }}>
      {hasUser && children}
    </userContext.Provider>
  );
}

export default UserProvider;
