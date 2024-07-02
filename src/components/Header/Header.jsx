import React from 'react'
//import { useState } from 'react';
import { Box, Container, Flex, Heading, Image, Text, useColorModeValue, Link } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom'
import { FiShoppingBag } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import logo from './../../assets/images/eco-logo.png'


const Header = () => {

  // const [menu, setMenu] = useState("home"); 
  const location = useLocation();
  const activeColor = useColorModeValue('teal.500', 'teal.200');
  const inactiveColor = useColorModeValue('gray.600', 'gray.400');


  const getLinkColor = (path) => {
    return location.pathname === path ? activeColor : inactiveColor;
  };


  return (
    <Box py='20' mb={8} w={'100%'} h={'70'}>
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
                   color={getLinkColor('/shop')}
                >Shop
                </Link>
              </NavLink>   
             <NavLink to= '/cart'>
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
           <FiShoppingBag />
          </NavLink>
          <NavLink to='/fav'>
            <FiHeart />
          </NavLink>
          <NavLink to='/login'>
            <FiUser />
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
//поменять размер иконок
// Сделать смешанную верстку
// проаерерить работу картпнок 
// найти новый лого
// посмотреть по маршрутизации и переписать дизайн 