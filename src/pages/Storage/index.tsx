import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Storage = () => {
  const navigate = useNavigate();

  // TODO - implement logic with redirect to login, when not auth

  useEffect(() => {
    navigate('/login');
  }, []);

  return (
      <div>Storage</div>
  );
};
