import React from 'react'

import { useState } from 'react'
import { Box, Container, Heading, Text, FormControl, FormLabel, Input, VStack, InputLeftElement, InputGroup, Button, Flex } from '@chakra-ui/react'
import { FiMail, FiLock } from 'react-icons/fi'

import { motion } from 'framer-motion'


const FormLogin = ({handleClick}) => {
    
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const MotionButton = motion(Button)

  return (
    <Box w={'45%'} mb={'15px'}>
        <VStack as='form' spacing={'20px'} >
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
                    onClick={() => handleClick(email, password)}
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
            </VStack>
    </Box>
  )
}

export default FormLogin
