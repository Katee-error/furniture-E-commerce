import Helmet from '../components/Helmet'
import { Box, Container, Heading, Text, FormControl, FormLabel, Input, VStack, InputLeftElement, InputGroup, Button, Flex } from '@chakra-ui/react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { setUser } from '../redux/slice/userSlice'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import FormLogin from '../components/FormLogin';
import { Link } from 'react-router-dom'

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
     .then(({user}) => {
        console.log(user)
        dispatch(setUser({
            email: user.email, 
            id: user.uid, 
            token: user.accessToken 
        }));
        navigate('/login')
     })
     .catch(console.error)
}
  return (
    <Helmet title='login'>
      <Box p={'40px'}>
        <Container maxW="container.lg" >
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
        </Container>
      </Box>
    </Helmet>
  )
}

export default Login



   
        
         
        
         
      