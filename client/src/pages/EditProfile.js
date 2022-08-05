import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {
    FormControl,
    Input, 
    FormLabel,
    Button,
    Stack,
    VStack, 
    Heading
} from '@chakra-ui/react'

function EditProfile({ user, setUser}) {
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        email: user.email,
        profile_img: user.profile_img,
      });
    
      function handleFormChange(e) {
        setProfileData((profileData) => ({
          ...profileData,
          [e.target.name]: e.target.value,
        }));
      }
    
      async function handlePatchProfile(e) {
        e.preventDefault();
    
        const res = await fetch(`/users/${user.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(profileData),
        });
    
        if (res.ok) {
          res
            .json()
            .then((updatedUser) => {
              setUser(updatedUser);
            })
            .then(navigate('/profile'));
        }
      }

  return (
    <div>
        <form onSubmit={handlePatchProfile}>
        <Heading textAlign ='center' mt={9}> edit your profile </Heading>

          <VStack px={4}>
            
          <FormControl isRequired mt={3}>
            <FormLabel>first name</FormLabel>
            <Input
                        variant='filled'
                        p={6}
              type='text'
              name='first_name'
              autoComplete='off'
              value={profileData.first_name}
              onChange={handleFormChange}
              textColor={'gray.800 '}
            />
          </FormControl>

          <FormControl isRequired mt={3}>
            <FormLabel>last name</FormLabel>
            <Input
                        variant='filled'
                        p={6}
              type='text'
              name='last_name'
              autoComplete='off'
              value={profileData.last_name}
              onChange={handleFormChange}
              textColor={'gray.800 '}
            />
          </FormControl>

          <FormControl isRequired mt={3}>
            <FormLabel>username</FormLabel>
            <Input
                        variant='filled'
                        p={6}
              type='text'
              name='username'
              autoComplete='off'
              value={profileData.username}
              onChange={handleFormChange}
              textColor={'gray.800 '}
            />
          </FormControl>
          
          <FormControl isRequired mt={3}>
            <FormLabel>email address</FormLabel>
            <Input
                        variant='filled'
                        p={6}
              type='text'
              name='email'
              autoComplete='off'
              value={profileData.email}
              onChange={handleFormChange}
            />
          </FormControl>
          <FormControl mt={3}>
            <FormLabel>image url</FormLabel>
            <Input
                        variant='filled'
                        p={6}
              type='text'
              name='profile_img'
              autoComplete='off'
              value={profileData.profile_img}
              onChange={handleFormChange}
            />
          </FormControl>

          {/* <FormControl  mt={3}>
            <FormLabel>bio</FormLabel>
            <Input
              type='text'
              name='bio'
              autoComplete='off'
              value={profileData.bio}
              onChange={handleFormChange}
              textColor={'gray.800 '}
            />
          </FormControl> */}
</VStack>
          <Stack mt={4} p={4} spacing={6} direction={['column', 'row']}>

            <Button
            bg="black" textColor="white" p={7}
              type='submit'
              color={'white'}
              w='full'
              _hover={{
                bg: 'blue.500',
              }}
            >
              save
            </Button>
            <Button
              as={Link}
              to='/profile'
              bg={'red.200'}
              p={7}
            >
              cancel
            </Button>
          </Stack>
        </form>

    </div>
  )
}

export default EditProfile