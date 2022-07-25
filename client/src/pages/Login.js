import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'

function Login({ setUser }) {
  return (
    <div>
      <LoginForm setUser = {setUser} />
      <h4> don't have an account? <Link to="login"> register here </Link></h4>

    </div>
  )
}

export default Login