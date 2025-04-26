import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { name, email, password })
      .then(result => {
        console.log(result);
        navigate('/'); 
      })
      .catch(err => {
        console.log(err);
        setError('Signup failed. Please try again.');
      });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
      <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Sign Up</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          className="px-4 py-3 border border-gray-300 rounded-lg"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-3 border border-gray-300 rounded-lg"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-3 border border-gray-300 rounded-lg"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
        >
          Create Account
        </button>
        <p className="text-center text-sm text-gray-500">
          Already have an account?{' '}
          <span className="text-indigo-600 hover:underline">
            <NavLink to="/login">Log in</NavLink>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
