import React, { useState } from 'react';
import { EnvelopeIcon, LockClosedIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration successful!');
      } else {
        alert(data.message || 'Registration failed.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <section className="min-h-screen flex items-start justify-center bg-gray-50 px-6 pt-10 pb-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border-1 border-black-800">
        <h2 className="text-3xl font-bold text-black-800 mb-6 text-center">Register</h2>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-800">
              <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password */}
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-800">
            <LockClosedIcon className="h-5 w-5 text-gray-400 mr-2" />
            <input
            type={showPassword ? 'text' : 'password'}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full outline-none"
            placeholder="Enter your password"
            />
            <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="focus:outline-none ml-2"
            >
            {showPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-500" />
            ) : (
                <EyeIcon className="h-5 w-5 text-gray-500" />
            )}
            </button>
        </div>

            {/* Confirm Password */}
            <div className = "mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-800">
                <LockClosedIcon className="h-5 w-5 text-gray-400 mr-2" />
                <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full outline-none"
                    placeholder="Re-enter your password"
                />
                </div>
            </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
