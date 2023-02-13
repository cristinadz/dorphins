import React from 'react'
import welcomeImg from '../images/welcome_img.png'
import { Link } from 'react-router-dom'
import { Button, Flex, Image, Container, VStack, Text, Heading } from '@chakra-ui/react'


function Welcome() {
  return (
    <div>
      <Flex justifyContent='center'>
        <Image mt={8} src={welcomeImg} />
      </Flex>
      <Container maxW='sm'>
        <Heading mx={3} size='xl'> welcome to</Heading>
        <Heading mx={3} color='cyan.400' size='4xl'> dorphins </Heading>
        <Text mb={9} mt={3} textAlign='right' fontSize='xl'> bring on the runners high</Text>

        <VStack align='stretch' m={3} spacing={5}>
          <Button as={ Link } to='login' bg="black" textColor="white" p={7}> login </Button>
          <Button as={ Link } to='signup'  p={7} > signup </Button>
        </VStack>
        </Container>
    </div>
  )
}

export default Welcome
