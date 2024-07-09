import React from 'react'
import Helmet from '../components/Helmet'

import { Box, Container, Heading, Text, FormControl, FormLabel, Input, VStack, InputLeftElement, InputGroup, Button, Flex } from '@chakra-ui/react'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const SignUp = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [file, setFile] = useState(null)
  
  const MotionButton = motion(Button)
  return (
   <Helmet title='signUp'>
      <Box p={'40px'}>
        <Container maxW="container.lg" >
          <Flex flexDirection={'column'} alignItems={'center'} as='section'  >
            <Heading textAlign={'center'} mb={'30px'}>
              SignUp
            </Heading>
            <VStack as='form' spacing={'20px'} w={'45%'}  >
            <FormControl>
              <FormLabel fontSize={'sm'}>Username</FormLabel>
              <InputGroup >
              <InputLeftElement pointerEvents='none' >
                  <FiUser/>
                </InputLeftElement>
                <Input type='text'
                value={userName} 
                onChange={e => setUserName(e.target.value)}
                placeholder='Username'
                />
                </InputGroup>
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl>
              <FormLabel fontSize={'sm'}>Email</FormLabel>
              <InputGroup >
              <InputLeftElement pointerEvents='none' >
                  <FiMail/>
                </InputLeftElement>
                <Input type='email'
                value={email} 
                onChange={e => setEmail(e.target.value)}
                placeholder='Email'
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
                  placeholder='Create password'
                  pr='4.5rem'
                  />
                </InputGroup>
            </FormControl>
            <FormControl>
                  <Input
                  border={'none'}
                  type='file'
                  //type={show ? 'text' : 'password'}
                  value={file}
                  onChange={e => setFile(e.target.value)}
                 
                  pr='4.5rem'
                  />
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
                    Create an account
                  </MotionButton>
                  <Text>
                  Already have an account? <Link to="/login"> <Box as='span' fontWeight={600} color={'blue.400'}>Sign in</Box></Link>
                  </Text>
            </VStack>
          </Flex>
        </Container>
      </Box>
   </Helmet>
  )
}

export default SignUp
