import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignupForm({ setUser }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    // const [experience, setExperience] = useState('')
    // const [newsletter, setNewsletter] = useState('')
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    function handleSubmit(e) {
      e.preventDefault();
      setErrors([]);
  
      fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          username,
          email,
          password,
          password_confirmation: passwordConfirmation,
        }),
      })
        .then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        })
        .then(navigate('/home'));
    }

  return (
    <div>
        <form onSubmit={ handleSubmit }>
            <h2> hello! register to get started </h2>
            <input 
              type="text"
              id="new_first_name"
              autoComplete='off'
              placeholder='first name'
              value={firstName}
              onChange={ e => setFirstName(e.target.value)}
              />
              
            <input 
              type="text"
              id="new_last_name"
              autoComplete='off'
              placeholder='last name'
              value={lastName}
              onChange={ e => setLastName(e.target.value)}
              />

            <input 
              type="text"
              id="new_username"
              autoComplete='off'
              placeholder='username'
              value={username}
              onChange={ e => setUsername(e.target.value)}
              />

            <input 
              type="text"
              id="email"
              autoComplete='off'
              placeholder='email'
              value={email}
              onChange={ e => setEmail(e.target.value)}
              />
            <input 
              type="password"
              id="new_password"
              autoComplete='off'
              placeholder='password'
              value={password}
              onChange={ e => setPassword(e.target.value)}
              />

            <input 
              type="password"
              id="password_confirmation"
              autoComplete='off'
              placeholder='confirm password'
              value={passwordConfirmation}
              onChange={ e => setPasswordConfirmation(e.target.value)}
              />
            <button type='submit'> register </button>

        </form>
    </div>
  )
}

export default SignupForm