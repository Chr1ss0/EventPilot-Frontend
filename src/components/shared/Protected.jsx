import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Protected() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function validateUser() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + '/api/user/validate',
        { credentials: 'include' },
      );
      // console.log(response);

      if (!response.ok) navigate('/signin');

      const result = await response.json();
      console.log(result);
      setValidated(true);
    }
    validateUser();
  }, []);

  return <>{validated && <Outlet />}</>;
}
