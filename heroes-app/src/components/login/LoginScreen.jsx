import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginScreen = ({history}) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/')
  }

  return (
    <div className='container'>
        <h1>Login Screen</h1>
        <button 
        className='btn btn-primary'
        onClick={handleLogin}
        >
          Login
        </button>
    </div>
  )
}
