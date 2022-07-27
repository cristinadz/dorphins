import React from 'react'
import { NavLink } from 'react-router-dom'
import SignupForm from '../components/SignupForm'
import { IconButton, Text, Link,  Container, Heading, HStack } from '@chakra-ui/react'

function Signup({setUser}) {
  return (
    <div>Signup Page
        <SignupForm setUser = {setUser}/>
        <HStack>
          <Text> already have an account? </Text>
          <Link as={NavLink} to='/login' color='cyan.400'> login </Link>
        </HStack>
    </div>
  )
}

export default Signup