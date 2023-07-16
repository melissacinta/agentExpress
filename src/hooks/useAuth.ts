import { useMutation } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';
import { baseUrl, notify } from '../utils';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
const login = async ({ email, password }) => {
  return axios.get(
    `${baseUrl}/login?email=${email as string}&password=${password as string}`
  );
};
export type USER = {
  id: number;
  fullName: string;
  email: string;
  target: Record<string, number>;
  displayImage: string;
};

const useAuth = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<USER | null>(() =>
    localStorage.getItem('user')
      ? (JSON.parse(localStorage.getItem('user')) as USER)
      : null
  );
  const [details, setDetails] = useState({
    email: '',
    password: '',
  });

  const { mutate } = useMutation({
    mutationFn: login,
    onError: (error) => {
      if (error instanceof AxiosError) {
        notify(error.response.data as string, {
          type: 'error',
          duration: 5000,
        });
      }

      localStorage.removeItem('user');
    },
    onSuccess: ({ data }: { data: USER }) => {
      localStorage.setItem('user', JSON.stringify(data));
      setUser(data);
      notify('user logged in successfully!', { type: 'success' });
      navigate('/dashboard');
    },
  });

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = details;
    if (email && password) {
      mutate({ email, password });
    } else {
      console.log('please fill in the required fields');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
    notify('Signed Out Successfully', { type: 'success' });
  };

  return { details, setDetails, handleLogin, user, navigate, handleLogout };
};

export default useAuth;
