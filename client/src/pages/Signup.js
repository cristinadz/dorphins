import React from 'react'
import { Link } from 'react-router-dom'
import SignupForm from '../components/SignupForm'

function Signup({setUser}) {
  return (
    <div>Signup Page
        <SignupForm setUser = {setUser}/>
        <h4> already have an account? <Link to="login"> login</Link></h4>

    </div>
  )
}

export default Signup