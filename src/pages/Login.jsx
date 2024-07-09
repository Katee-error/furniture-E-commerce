import React, { useState } from 'react'
import Helmet from '../components/Helmet'
import { Box, Container, Heading, Text, FormControl, FormLabel, Input, VStack, InputLeftElement, InputGroup, Button, Flex } from '@chakra-ui/react'
import { FiMail, FiLock } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const Login = () => {
 const MotionButton = motion(Button);

 const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
  return (
    <Helmet title='login'>
      <Box p={'40px'}>
        <Container maxW="container.lg" >
          <Flex flexDirection={'column'} alignItems={'center'} as='section'  >
            <Heading textAlign={'center'} mb={'30px'}>
              Login
            </Heading>
            <VStack as='form' spacing={'20px'} w={'45%'}  >
            <FormControl>
              <FormLabel fontSize={'sm'}>Email</FormLabel>
              <InputGroup >
              <InputLeftElement pointerEvents='none' >
                  <FiMail/>
                </InputLeftElement>
                <Input type='email'
                value={email} 
                onChange={e => setEmail(e.target.value)}
                placeholder='Enter email'
                />
                </InputGroup>
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl>
              <FormLabel fontSize={'sm'}>Password</FormLabel>
                <InputGroup>
                <InputLeftElement pointerEvents='none' >
                  <FiLock/>
                </InputLeftElement>
                  <Input
                  type='password'
                  //type={show ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder='Enter password'
                  pr='4.5rem'
                  />
                </InputGroup>
            </FormControl>
            <MotionButton 
                    type={'submit'}
                    w={'100%'}
                    mt={'20px'}
                    bg={'gray.800'}
                    borderRadius={10}
                    color={'white'}
                    border={'none'}
                    whileTap={{ scale: 1.2 }}
                    whileHover={{ scale: 1.05 }}
                    _hover={{bgColor:'gray.600'}}
                    p={'25px 40px'}
                  >
                    Sign In
                  </MotionButton>
                  <Link to={'/signup'}>
                  <Text> Don't have you account?{' '}
                  <Box as='span' fontWeight={600} color={'blue.400'}>Create an account</Box>
                  </Text>
                  </Link>
            </VStack>
          </Flex>
        </Container>
      </Box>
    </Helmet>
  )
}

export default Login



   
        
         
        
         
      