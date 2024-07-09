import React from 'react'
import Helmet from '../components/Helmet'

import { Box, Container, Heading, Text, FormControl, FormLabel, Input, VStack, InputLeftElement, InputGroup, Button, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setUser } from './../redux/slice/userSlice'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import FormSignUp from '../components/FormSignUp'


const SignUp = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
    const handleRegister = (email, password, userName) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password, userName)
        .then(({user}) => {
          console.log(user)
          dispatch(setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken
          }));
          navigate('/')
       })
       .catch(console.error)
  }
    
  return (
   <Helmet title='signUp'>
      <Box p={'40px'}>
        <Container maxW="container.lg" >
          <Flex flexDirection={'column'} alignItems={'center'} as='section'  >
            <Heading textAlign={'center'} mb={'30px'}>
              SignUp
            </Heading>
            <FormSignUp handleClick={handleRegister}/>
              <Text>
                Already have an account? <Link to="/login"> <Box as='span' fontWeight={600} color={'blue.400'}>Sign in</Box></Link>
              </Text>
          </Flex>
        </Container>
      </Box>
   </Helmet>
  )
}

export default SignUp
