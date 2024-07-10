import React from 'react'
import { Box, Container, Flex, Grid, GridItem, Image, Heading, Text, List, ListItem, } from '@chakra-ui/react'
import logoFooter from './../assets/images/logo-3.png'
import { Link } from 'react-router-dom'

import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <Box py={'60px'} bg={'#0a1d37'} as="footer" color="white" mt={'auto'} >
      <Container maxW="container.lg">
        <Grid templateColumns='repeat(4, 1fr)' gap={7} alignItems={'start'}>
          <GridItem>
            <Flex alignItems={'center'} gap={'5px'}>
              <Flex>
                <Image src={logoFooter} alt="logo" w={'40px'} h={'40px'}/> 
              </Flex>
              <Heading fontSize={'1.2rem'} fontWeight={'700'}>Multimart</Heading>
            </Flex>
            <Text fontSize={'12px'} color={'gray.500'} mt={'15px'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam eaque dolore repudiandae explicabo non officiis assumenda nobis voluptatum hic voluptate.</Text>
          </GridItem>
          <GridItem>
            <Heading fontSize={'md'} mb={'15px'}>
              Top Categories
            </Heading>
            <List fontSize={'sm'} color={'gray.400'} spacing={3} textDecoration={'underline'}>
              <ListItem>
                <Link>Modern Sofa</Link>
              </ListItem>
              <ListItem>
                <Link>Arm Chair</Link>
              </ListItem>
              <ListItem>
                <Link>Wardrobe</Link>
              </ListItem>
            </List>   
          </GridItem>
          <GridItem>
          <Heading fontSize={'md'} mb={'15px'}>
              Useful Links
            </Heading>
            <List fontSize={'sm'} color={'gray.400'} spacing={3} textDecoration={'underline'}>
              <ListItem>
                <Link to='/shop'>Shop</Link>
              </ListItem>
              <ListItem>
                <Link to='/cart'>Cart</Link>
              </ListItem>
              <ListItem>
                <Link to='/login'>Login</Link>
              </ListItem>
              <ListItem>
                <Link to='#'>Privacy Policy</Link>
              </ListItem>
            </List>   
          </GridItem>
          <GridItem>
          <Heading fontSize={'md'} mb={'15px'}>
              Contact
            </Heading>
            <List fontSize={'sm'} color={'gray.400'} spacing={3}>
              <ListItem>
                <Link to='#'>
                  <Flex alignItems={'center'} gap={'7px'}>
                    <FiMapPin />
                    <Text> 123 ZindaBazar, Bangladesh</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem>
                <Link to='#'>
                  <Flex alignItems={'center'} gap={'7px'}>
                    <FiPhone />
                    <Text>+0881234567890</Text>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem>
                <Link to='#'>
                  <Flex alignItems={'center'} gap={'7px'}>
                    <FiMail/>
                    <Text>example123@mail.com</Text>
                  </Flex>
                </Link>
              </ListItem>
              
            </List>   
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
