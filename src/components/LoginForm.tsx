import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import Spinner from './Spinner';

const LoginForm = () => {
  const { details, setDetails, handleLogin, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <form className="space-y-6 py-6 " onSubmit={handleLogin}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 "
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={details.email}
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              required
              className="dark:bg-primary-dark block w-full rounded-full border-0 py-2 px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 "
            >
              Password
            </label>
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-1 relative">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              value={details.password}
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              required
              className="dark:bg-primary-dark block w-full rounded-full border-0 py-2 px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
              role="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FiEye className="dark:text-primary-light hover:text-gray-400 text-primary-dark dark:hover:text-primary-light text-sm" />
              ) : (
                <FiEyeOff className="dark:text-primary-light hover:text-gray-400 text-primary-dark dark:hover:text-primary-light text-sm" />
              )}
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full justify-center rounded-full bg-gradient-linear hover:bg-gradient-rev px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm transition-all duration-700 linear"
          >
            {isLoading ? <Spinner /> : 'Sign in'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
