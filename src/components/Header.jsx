import React from "react";
import { useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
  IconButton,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FiShoppingBag, FiHeart, FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";

import logo from "./../assets/images/logo-3.png";
import userImg from "./../assets/images/user.png";

const Header = () => {
  // Анимация у спана корзины и wishlist
  const bounceTransition = {
    y: {
      duration: 0.7,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeOut",
    },
  };

  const { onOpen, isOpen, onClose } = useDisclosure();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity); // добавление товара в корзину => отображение кол-ва товара добавленного в корзину

  const headerRef = useRef(null); // sticky nav
  const menuRef = useRef(null); // burger menu

  const stickyNav = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("???");
      } else {
        headerRef.current.classList.remove("???");
      }
    });
  };

  useEffect(() => {
    stickyNav();
    return () => window.removeEventListener("scroll", stickyNav);
  }, []);

  // const [menu, setMenu] = useState("home");
  const location = useLocation();
  const activeColor = useColorModeValue("gray.500");
  const inactiveColor = useColorModeValue("black");

  const MotionBox = motion(Box);
  const btnRef = React.useRef();

  const getLinkColor = (path) => {
    return location.pathname === path ? activeColor : inactiveColor;
  };

  return (
    <Box
      ref={headerRef}
      w={"100%"}
      h={"auto"}
      position="sticky"
      top="0"
      zIndex="1000"
      bg="white"
      boxShadow="sm"
    >
      <Container maxW="container.lg" p={4}>
        {/* DESKTOP */}
        <Flex
          as={"header"}
          justifyContent={"space-between"}
          alignItems={"center"}
          display={{ base: "none", md: "flex" }}
        >
          <Flex gap={2} alignItems={"stretch"}>
            <Image src={logo} alt="logo" w={"40px"} h={"40px"} />
            <Box>
              <Heading as="h1" fontSize={"xl"} fontWeight={"700"}>
                Multimart
              </Heading>
              <Text fontSize={"12px"}>Since 1995</Text>
            </Box>
          </Flex>
          <Flex as={"nav"} gap={"30px"}>
            <NavLink to="/home">
              <Link
                px={2}
                py={1}
                fontWeight={500}
                _hover={{ textDecoration: "none", fontWeight: "600" }}
                color={getLinkColor("/home")}
              >
                Home
              </Link>
            </NavLink>
            <NavLink to="/shop">
              <Link
                px={2}
                py={1}
                fontWeight={500}
                _hover={{ textDecoration: "none", fontWeight: "600" }}
                color={getLinkColor("/shop")}
              >
                Shop
              </Link>
            </NavLink>
            <NavLink to="/cart" border={"none"}>
              <Link
                px={2}
                py={1}
                fontWeight={500}
                _hover={{ textDecoration: "none", fontWeight: "600" }}
                color={getLinkColor("/cart")}
              >
                Cart
              </Link>
            </NavLink>
          </Flex>
          <Flex gap={6} alignItems={"center"}>
            <NavLink to="/cart">
              <Box pos={"relative"}>
                <IconButton
                  as={FiShoppingBag}
                  w={"25px"}
                  h={"25px"}
                  bg={"none"}
                  _hover={{ textDecoration: "none", bg: "none" }}
                />
                {/* Отображение спана с кол-вом товаров в корзине, только при > 0 */}
                {totalQuantity > 0 && (
                  <MotionBox
                    as="span"
                    pos={"absolute"}
                    top={"-15%"}
                    right={"-2%"}
                    content=""
                    w={"18px"}
                    h={"18px"}
                    display={"flex"}
                    bg={"#000"}
                    color={"#fff"}
                    borderRadius={"50px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    zIndex={10}
                    fontSize={"0.7rem"}
                    animate={{ y: ["0%", "-30%", "0%", "0%"] }}
                    transition={bounceTransition}
                  >
                    {totalQuantity}
                  </MotionBox>
                )}
              </Box>
            </NavLink>
            <NavLink to="#">
              <Box pos={"relative"}>
                <IconButton
                  as={FiHeart}
                  w={"27px"}
                  h={"27px"}
                  bg={"none"}
                  _hover={{ textDecoration: "none", bg: "none" }}
                />
                {/* <MotionBox as='span' pos={'absolute'} top={'-15%'} right={'-2%'} content='' w={'18px'} h={'18px'} display={'flex'} bg={'black'} color={'white'} borderRadius={'50px'} alignItems={'center'} justifyContent={'center'} zIndex={10} fontSize={'0.7rem'}  
                // animate={{ y: ["0%", "-30%", "0%", "0%"] }}
                // transition={bounceTransition}
                >
                  2
                </MotionBox>  */}
              </Box>
            </NavLink>
            <NavLink>
              <Menu>
                <MenuButton
                  as={Button}
                  bg={"none"}
                  _active={{ bg: "none" }}
                  _hover={{ bg: "none" }}
                  p={"0"}
                >
                  <MotionBox
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Image src={userImg} alt="user" w={35} h={35} />
                    {/* <IconButton as={FiUser} w={'25px'} h={'25px'} /> */}
                  </MotionBox>
                </MenuButton>
                <MenuList>
                  <NavLink to="/login">
                    <MenuItem>Login</MenuItem>
                  </NavLink>
                  <NavLink to="/signup">
                    <MenuItem>Sign Up</MenuItem>
                  </NavLink>
                </MenuList>
              </Menu>
            </NavLink>
          </Flex>
        </Flex>

        {/* Mobile */}
        <Flex
          display={{ base: "flex", md: "none" }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <NavLink to="/">
            <Flex alignItems={"center"} gap={"10px"}>
              <Image src={logo} alt="logo" w={"40px"} h={"40px"} />
              <Heading as="h1" fontSize={"md"} fontWeight={"700"}>
                Multimart
              </Heading>
            </Flex>
          </NavLink>
          <Flex gap={4} alignItems={"center"}>
            <NavLink to="/cart">
              <Box pos={"relative"}>
                <IconButton
                  as={FiShoppingBag}
                  w={"23px"}
                  h={"23px"}
                  bg={"none"}
                  _hover={{ textDecoration: "none", bg: "none" }}
                />
                {totalQuantity > 0 && (
                  <MotionBox
                    as="span"
                    pos={"absolute"}
                    top={"-15%"}
                    right={"-2%"}
                    content=""
                    w={"18px"}
                    h={"18px"}
                    display={"flex"}
                    bg={"#000"}
                    color={"#fff"}
                    borderRadius={"50px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    zIndex={10}
                    fontSize={"0.7rem"}
                    animate={{ y: ["0%", "-30%", "0%", "0%"] }}
                    transition={bounceTransition}
                  >
                    {totalQuantity}
                  </MotionBox>
                )}
              </Box>
            </NavLink>
            <NavLink to="/fav">
              <Box pos={"relative"}>
                <IconButton
                  as={FiHeart}
                  w={"25px"}
                  h={"25px"}
                  bg={"none"}
                  _hover={{ textDecoration: "none", bg: "none" }}
                />
                {/* <Box as='span' pos={'absolute'} top={'-12%'} right={'-1%'} content='' w={'18px'} h={'18px'} display={'flex'} bg={'black'} color={'white'} borderRadius={'50px'} alignItems={'center'} justifyContent={'center'} zIndex={10} fontSize={'0.7rem'}  >
                  2
                </Box>  */}
              </Box>
            </NavLink>
            <NavLink>
              <Menu>
                <MenuButton
                  as={Button}
                  bg={"none"}
                  _active={{ bg: "none" }}
                  _hover={{ bg: "none" }}
                  p={"0"}
                >
                  <MotionBox
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Image src={userImg} alt="user" w={"30px"} h={"30px"} />
                    {/* <IconButton as={FiUser} w={'20px'} h={'20px'} bg={'none'}  _hover={{ textDecoration: 'none',  bg:'none'}} /> */}
                  </MotionBox>
                </MenuButton>
                <MenuList>
                  <NavLink to="/login">
                    <MenuItem>Login</MenuItem>
                  </NavLink>
                  <NavLink to="/signup">
                    <MenuItem>Sign Up</MenuItem>
                  </NavLink>
                </MenuList>
              </Menu>
            </NavLink>
            {/* Menu hamburger */}
            <IconButton
              ref={btnRef}
              onClick={onOpen}
              bg={"none"}
              as={FiMenu}
              w={"27px"}
              h={"27px"}
            />
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton size={"2xl"} pt={"15px"} />
                <DrawerBody>
                  <Flex
                    py={"100px"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    gap={"40px"}
                    onClick={onClose}
                    fontSize={"2xl"}
                  >
                    <NavLink to="/home">
                      <Link
                        px={2}
                        py={1}
                        fontWeight={500}
                        _hover={{ textDecoration: "none", fontWeight: "600" }}
                        color={getLinkColor("/home")}
                      >
                        Home
                      </Link>
                    </NavLink>
                    <NavLink to="/shop">
                      <Link
                        px={2}
                        py={1}
                        fontWeight={500}
                        _hover={{ textDecoration: "none", fontWeight: "600" }}
                        color={getLinkColor("/shop")}
                      >
                        Shop
                      </Link>
                    </NavLink>
                    <NavLink to="/cart" border={"none"}>
                      <Link
                        px={2}
                        py={1}
                        fontWeight={500}
                        _hover={{ textDecoration: "none", fontWeight: "600" }}
                        color={getLinkColor("/cart")}
                      >
                        Cart
                      </Link>
                    </NavLink>
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;

// сделать анимацию с драгом на спане
