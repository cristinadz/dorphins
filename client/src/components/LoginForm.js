import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function LoginForm({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
          console.log(errors);
        }
      })
      .then(navigate('/home'));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>welcome back! glad to see you, again!</h2>
        <input
            type='text'
            placeholder='enter your username'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete='off'
          />
          <input
            type='password'
            placeholder='enter your password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='current-password'
          />
          <button type='submit'>login </button>
      </form>
    </div>
  )
}

export default LoginForm