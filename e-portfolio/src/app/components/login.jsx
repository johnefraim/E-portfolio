'use client'
import React, { useState } from 'react';
import Image from 'next/image'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-0">
      <Image 
      src="/assets/images/Seal_of_University_of_Nueva_Caceres.png" 
      alt="UNC Logo" 
      width={180}
      height={180}/>
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-96">
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Email or Phone number"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="mt-2 text-sm text-blue-600">
              <a href="#">Forgot password?</a>
            </div>
          </div>
          <button
            type="button"
            className="bg-[#CC0000] text-white px-4 py-2 rounded-md hover:bg-red-600 w-full"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-sm">
          <div className="mb-2 text-center">or</div>
          <button
            type="button"
            className="bg-[#CC0000] text-white px-4 py-2 rounded-md hover:bg-red-600 w-full"
          >
            Continue with Google Account
          </button>
          <div className="mt-2">
            <span>Don&apos;t have an Account? </span><a className="text-blue-600">Create now!</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
