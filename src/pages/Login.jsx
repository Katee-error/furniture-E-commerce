import Helmet from '../components/Helmet'
import { Box, Container, Heading, Text, FormControl, FormLabel, Input, VStack, InputLeftElement, InputGroup, Button, Flex } from '@chakra-ui/react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { setUser } from '../redux/slice/userSlice'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import FormLogin from '../components/FormLogin';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useState } from 'react';

const Login = () => {
  
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
     .then(({user}) => {

      setLoading(false)
        console.log(user)
        dispatch(setUser({
            email: user.email, 
            id: user.uid, 
            token: user.accessToken 
        }));
        toast.success('Successfully logged in')
        navigate('/shop')
     })
     .catch(error => {
      setLoading(false)
      toast.error(error.message)
     })
}
  return (
    <Helmet title='login'>
      <Box p={'40px'}>
        <Container maxW="container.lg" >
            {
              loading ? 
              <Flex py={'100px'}  textAlign={'center '}>
                <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.800'
                size='xl'/>
                <Text>Loading...</Text>
              </Flex> :
                <Flex flexDirection={'column'} alignItems={'center'} as='section'  >
              <Heading textAlign={'center'} mb={'30px'}>
              Login
            </Heading>
            <FormLogin handleClick={handleLogin}/>
            <Link to={'/signup'}>
                  <Text> Don't have you account?{' '}
                  <Box as='span' fontWeight={600} color={'blue.400'}>Create an account</Box>
                  </Text>
                  </Link> 
            </Flex>
            }
        </Container>
      </Box>
    </Helmet>
  )
}

export default Login



   
        
         
        
         
      