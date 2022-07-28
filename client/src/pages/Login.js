import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import { Text, Link,  Container, HStack } from '@chakra-ui/react'

function Login({ setUser }) {
  return (
    <div>
        <LoginForm setUser = {setUser} />
        <Container m={5} >
          <HStack >
            <Text> don't have an account?</Text>
            <Link as={ NavLink } to='/signup' color='cyan.400'> register here </Link>
          </HStack>
      </Container>
    </div>
  )
}

export default Login