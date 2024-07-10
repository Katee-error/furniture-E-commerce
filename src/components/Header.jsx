import React from 'react'
import { useRef, useEffect } from 'react';
import { NavLink, useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Box, Container, Flex, Heading, Image, Text, useColorModeValue, IconButton, Button, Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,

} from '@chakra-ui/react';
import { FiShoppingBag, FiHeart, FiMenu } from "react-icons/fi";
//import { FiUser } from "react-icons/fi";
import { motion } from 'framer-motion'

import logo from './../assets/images/eco-logo.png'
import userImg from './../assets/images/user-icon.png'



const Header = () => {
const totalQuantity = useSelector(state => state.cart.totalQuantity) // добавление товара в корзину => отображение кол-ва товара добавленного в корзину

const headerRef = useRef(null) // sticky nav
const menuRef = useRef(null) // burger menu

const stickyNav = () => {
  window.addEventListener( 'scroll', () => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    headerRef.current.classList.add( "???")
    } else{
    headerRef.current.classList.remove('???')
    }})
  } 


useEffect(() => {

    stickyNav()
    return () => window.removeEventListener('scroll', stickyNav)
  }, []) 

  // const [menu, setMenu] = useState("home"); 
  const location = useLocation();
  const activeColor = useColorModeValue('gray.500');
  const inactiveColor = useColorModeValue('black');

  const MotionBox = motion(Box)

  const getLinkColor = (path) => {
    return location.pathname === path ? activeColor : inactiveColor;
  };


  return (
    <Box ref={headerRef}
      w={'100%'} 
      h={'auto'} 
      position="sticky"
      top="0"
      zIndex="1000"
      bg="white"
      boxShadow="sm"
    >
    <Container maxW="container.lg" p={4} >
    <Flex as={'header'} justifyContent={'space-between'} alignItems={'center'}>
          <Flex  gap={2} alignItems={'stretch'}>
            <Image src={logo} alt="logo" w={'40px'} h={'40px'}/> 
            <Box >
              <Heading as='h1' fontSize={'1.2rem'} fontWeight={'700'}>Multimart</Heading>
              <Text fontSize={'12px'}>Since 1995</Text>
            </Box>
          </Flex>
          <Flex as={'nav'} gap={'30'} >
            <NavLink to= '/home' >
              <Link  
                px={2}
                py={1}
                fontWeight={500}
                _hover={{ textDecoration: 'none', fontWeight:'600'}}
                color={getLinkColor('/home')}>
              Home
              </Link>
            </NavLink>
             <NavLink to= '/shop' >
                <Link 
                   px={2}
                   py={1}
                   fontWeight={500}
                   _hover={{ textDecoration: 'none', fontWeight:'600'}}
                   color={getLinkColor('/shop')}>
                Shop
                </Link>
              </NavLink>   
             <NavLink to= '/cart' border={'none'} >
                <Link
                   px={2}
                   py={1}
                   fontWeight={500}
                   _hover={{ textDecoration: 'none', fontWeight:'600'}}
                   color={getLinkColor('/cart')}>
                Cart
                </Link>
              </NavLink>        
          </Flex>
          <Flex gap={6} alignItems={'center'}> 
            <NavLink to='/cart'>
              <Box pos={'relative'}>
                <IconButton as={FiShoppingBag} w={'25px'} h={'25px'} bg={'none'}
                _hover={{ textDecoration: 'none',  bg:'none'}}
                />
                <Box as='span' pos={'absolute'} top={'-15%'} right={'-2%'} content='' w={'18px'} h={'18px'} display={'flex'} bg={'#000'} color={'#fff'} borderRadius={'50px'} alignItems={'center'} justifyContent={'center'} zIndex={10} fontSize={'0.7rem'}  >
                  {totalQuantity} 
                </Box> 
              </Box>
            </NavLink>
            <NavLink to='/fav'>
            <Box pos={'relative'}>
                <IconButton as={FiHeart} w={'27px'} h={'27px'} bg={'none'} 
                _hover={{ textDecoration: 'none',  bg:'none'}}
                />
                <Box as='span' pos={'absolute'} top={'-15%'} right={'-2%'} content='' w={'18px'} h={'18px'} display={'flex'} bg={'black'} color={'white'} borderRadius={'50px'} alignItems={'center'} justifyContent={'center'} zIndex={10} fontSize={'0.7rem'}  >
                  2
                </Box> 
              </Box>
            </NavLink>
            <NavLink>
              <Menu >
                <MenuButton as={Button} bg={'none'} _active={{bg: 'none'}} _hover={{bg: 'none'}}>
                  <MotionBox whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
                    <Image src={userImg} alt='user' w={35} h={35}/>
                      {/* <IconButton as={FiUser} w={'25px'} h={'25px'} /> */}
                  </MotionBox>        
                </MenuButton>
                <MenuList>
                  <NavLink to='/login'><MenuItem>Login</MenuItem></NavLink>
                  <NavLink to='/signup'><MenuItem>Sign Up</MenuItem></NavLink>
                </MenuList>
                </Menu>
            </NavLink>
          </Flex>
          <Box display={'none'} >
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
// меню на мобилку
//add driver!!!!!
// сделать активное добавление спанов в зависимости от присутсивия товаров в корзине 
// найти новый лого
// сделать анимацию с драгом на спане





