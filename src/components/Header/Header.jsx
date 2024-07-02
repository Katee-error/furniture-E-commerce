import React from 'react'
//import { useState } from 'react';
import { Box, Container, Flex, Heading, Image, Text, useColorModeValue, Link, IconButton } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom'
import { FiShoppingBag } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
//import { FiUser } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { motion } from 'framer-motion'
import logo from './../../assets/images/eco-logo.png'
import userImg from './../../assets/images/user-icon.png'


const Header = () => {


  // const [menu, setMenu] = useState("home"); 
  const location = useLocation();
  const activeColor = useColorModeValue('teal.500', 'teal.200');
  const inactiveColor = useColorModeValue('gray.600', 'gray.400');

  const MotionBox = motion(Box)

  const getLinkColor = (path) => {
    return location.pathname === path ? activeColor : inactiveColor;
  };


  return (
    <Box p='40' mb={20} w={'100%'} h={'120'}>
      <Container maxW={'container.xl'}>
        <Flex as={'header'} justifyContent={'space-between'}>
          <Flex  gap={'8'} alignItems={'end'}>
            <Image src={logo} alt="logo" w={'40'} h={'40'}/> 
            <Box >
              <Heading as='h1' fontSize={'1.2rem'} fontWeight={'700'}>Multimart</Heading>
              <Text fontSize={'12px'}>Since 1995</Text>
            </Box>
          </Flex>
          <Flex as={'nav'} gap={'30'} >
            <NavLink to= '/home'>
              <Link  
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }}
                color={getLinkColor('/home')}>
              Home
              </Link>
            </NavLink>
             <NavLink to= '/shop'>
                <Link 
                   px={2}
                   py={1}
                   rounded="md"
                   _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }}
                   color={getLinkColor('/shop')}>
                Shop
                </Link>
              </NavLink>   
             <NavLink to= '/cart' >
                <Link
                   px={2}
                   py={1}
                   rounded="md"
                   _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }}
                   color={getLinkColor('/cart')}>
                Cart
                </Link>
              </NavLink>        
          </Flex>
          <Flex gap={'20'} alignItems={'center'}> 
          <NavLink to='/shop'>
            <Box pos={'relative'}>
              <IconButton as={FiShoppingBag} w={'24px'} h={'24px'} />
              <Box as='span' pos={'absolute'} top={'-8%'} right={'-18%'} content='' w={'18px'} h={'18px'} display={'flex'} bg={'#000'} color={'#fff'} borderRadius={'50px'} alignItems={'center'} justifyContent={'center'} zIndex={10} fontSize={'0.7rem'}  >
                1 
              </Box> 
            </Box>
          </NavLink>
          <NavLink to='/fav'>
          <Box pos={'relative'}>
              <IconButton as={FiHeart} w={'27px'} h={'27px'} />
              <Box as='span' pos={'absolute'} top={'-8%'} right={'-18%'} content='' w={'18px'} h={'18px'} display={'flex'} bg={'#000'} color={'#fff'} borderRadius={'50px'} alignItems={'center'} justifyContent={'center'} zIndex={10} fontSize={'0.7rem'}  >
                2
              </Box> 
            </Box>
          </NavLink>
          <NavLink to='/login'>
          <MotionBox whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
            <Image src={userImg} alt='user' w={35} h={35}/>
              {/* <IconButton as={FiUser} w={'25px'} h={'25px'} /> */}
          </MotionBox>
          </NavLink>
          </Flex>
          <Box display={'none'}>
            <FiMenu />
          </Box>
        </Flex>
    
    </Container> 
    </Box>
  )
}

export default Header


// поменять лого на другую иконки или сделать  другой 
// посмотреть по маршрутизации и переписать дизайн 

// сделать активное добавление спанов в зависимости от присутсивия товаров в корзине 




// найти новый лого





 
