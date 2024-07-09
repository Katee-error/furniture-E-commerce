import React from 'react'
import Helmet from '../components/Helmet'
import CommonSection from '../UI/CommonSection'
import { Box, Container, FormControl, Input, Stack, Heading, Button, Flex, Text, Divider }  from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion';

const CheckOut = () => {

const totalQuantity = useSelector(state => state.cart.totalQuantity)
const totalAmount = useSelector(state => state.cart.totalAmount)

const MotionButton = motion(Button)

  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout'/>
        <Box>
          <Container maxW="container.lg">
            <Flex justifyContent={'space-between'} py={'40px'} gap={'10px'} >
              <Stack as='form' spacing={5} w={'50%'} >
              <FormControl>
                <Input type='text' placeholder='Enter your name' />
              </FormControl>
              <FormControl>
                <Input type='email' placeholder='Enter your email'/>
              </FormControl>
              <FormControl>
                <Input type='number' placeholder='Phone number' />
              </FormControl>
              <FormControl>
                <Input type='text'  placeholder='Street address' />
              </FormControl>
              <FormControl>
                <Input type='text'  placeholder='City' />
              </FormControl>
              <FormControl>
                <Input type='text'  placeholder='Postal code' />
              </FormControl>
              <FormControl>
                <Input type='text'  placeholder='Country' />
              </FormControl>
              </Stack>
              <Stack  bg={'#0a1d37'} color={'white'} w={"40%"} p={'20px'} h={'60%'} spacing={'15px'} borderRadius={5}>
                <Flex justifyContent={'space-between'} >
                  <Heading fontSize={'md'} fontWeight={400}>
                    Total Quantity:
                  </Heading>
                  <Box as='span'>
                    {totalQuantity}
                  </Box>
                </Flex>
                <Flex justifyContent={'space-between'}>
                  <Heading fontSize={'md'} fontWeight={400}>
                    Subtotal:
                  </Heading>
                  <Box as='span'>
                    ${totalAmount}
                  </Box>
                </Flex>
                <Flex justifyContent={'space-between'}>
                  <Box>
                    <Heading fontSize={'md'} fontWeight={400}>
                      Shipping:
                    </Heading>
                    <Text fontSize={'xs'}>
                      Free shipping
                    </Text>
                  </Box>
                  <Box as='span'>
                    0
                  </Box>
                </Flex>
                <Divider/>
                <Flex justifyContent={'space-between'} >
                  <Heading fontSize={'2xl'} fontWeight={600}>
                    Total Cost:
                  </Heading>
                  <Box as='span' fontWeight={600}>
                    ${totalAmount}
                  </Box>
                </Flex>
                <MotionButton>
                  Place in Order
                </MotionButton>
              </Stack>
            </Flex>
          </Container>
        </Box>
    </Helmet>
  )
}

export default CheckOut
