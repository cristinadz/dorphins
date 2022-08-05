import React from 'react'
import { NavLink } from 'react-router-dom'
import SignupForm from '../components/SignupForm'
import { Text, Link, HStack, Container } from '@chakra-ui/react'

function Signup({setUser}) {
  return (
    <div>
        <SignupForm setUser = {setUser}/>
        <HStack justify={'center'}>
          <Text> already have an account? </Text>
          <Link as={NavLink} to='/login' color='cyan.400'> login </Link>
        </HStack>
    </div>
  )
}

export default Signup