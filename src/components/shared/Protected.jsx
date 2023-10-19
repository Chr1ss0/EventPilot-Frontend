import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Protected() {
  const navigate = useNavigate();

  useEffect(() => {
    async function validateUser() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + '/api/user/validate',
        { credentials: 'include' },
      );
      console.log(response);
      if (!response.ok) return;
      const result = await response.json();
      console.log(result);
    }
    validateUser();
  }, []);

  return <Outlet />;
}
