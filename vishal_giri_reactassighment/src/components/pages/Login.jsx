import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';

const Login = () => {
   const { values, errors, handleChange, handleSubmit } = useForm(
      { email: '', password: '' },
      validate
    );
  
    function validate(values) {
      let errors = {};
  
      // Add your validation logic here
  
      return errors;
    }
  
    function loginUser() {
      // Implement your login logic here
      console.log('Logging in with:', values);
      // Redirect to dashboard or handle authentication success
    }
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={loginUser}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`border rounded w-full py-2 px-3 ${errors.email && 'border-red-500'}`}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password || ''}
            onChange={handleChange}
            placeholder="Enter your password"
            className={`border rounded w-full py-2 px-3 ${errors.password && 'border-red-500'}`}
          />
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
        </div>

        <div className="flex items-center justify-between mb-4">
          <label htmlFor="remember" className="flex items-center">
            <input type="checkbox" id="remember" name="remember" onChange={handleChange} />
            <span className="ml-2 text-gray-700">Remember me</span>
          </label>

          <Link to="/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Login
        </button>
      </form>

      <p className="mt-4">
        Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up here</Link>.
      </p>
    </div>
  );
};

export default Login;
