import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, VStack, Heading, Button, Box } from '@chakra-ui/react'

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
          r.json().then((user) => setUser(user))
          .then(navigate('/home'));
        } else {
          r.json().then((err) => setErrors(err));
          console.log(errors);
        }
      })
      ;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box m={5} maxW='sm'> 
        <Heading textAlign ='center' mt={9}> welcome back! glad to see you, again! </Heading>
        <VStack align='stretch' m={3} spacing={5} >
        <Input
            variant='filled'
            p={6}
            type='text'
            placeholder='enter your username'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete='off'
          />
          <Input
          p={6}
            variant='filled'
            type='password'
            placeholder='enter your password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='current-password'
          />
          <Button p={7} bg="black" textColor="white"type='submit'>login </Button>
          </VStack>
          </Box>
      </form>
    </div>
  )
}

export default LoginForm