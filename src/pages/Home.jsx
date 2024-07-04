import React, { useEffect, useState } from 'react'
import Helmet from '../components/Helmet'
import { Container, Box, Flex, Text, Button, Image, Grid, Heading, Center, SimpleGrid } from '@chakra-ui/react';
import heroImg from './../assets/images/hero-img.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Services from '../services/Services';
import ProductList from '../UI/ProductList';
import products from '../assets/data/products';
import timerImg from './../assets/images/counter-timer-img.png'
import TimerCount from '../components/TimerCount';
const Home = () => {

  const MotionButton = motion(Button)
  const year = new Date().getFullYear(); // получаем актуальный год

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [wardrobeProducts, setwardrobeProducts] = useState([]);
  const [deskProducts, setdeskProducts] = useState([]);
  const [tableProducts, setTableProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter((item) => item.category === 'chair');
    const filteredBestSalesProducts = products.filter((item) => item.category === 'sofa');
    const filteredWardrobeProducts = products.filter((item) => item.category === 'wardrobe');
    const filteredDeskProducts = products.filter((item) => item.category === 'desk');
    const filteredTableProducts = products.filter((item) => item.category === 'table');

    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
    setwardrobeProducts(filteredWardrobeProducts)
    setdeskProducts(filteredDeskProducts)
    setTableProducts(filteredTableProducts)
  }, [])

  return (
   <Helmet title={'Home'}>
      <Box as='section' px={40} py={50} bg={'#d6e5fb'}>
        <Container>
          <Flex gap={40} justifyContent={"space-between"} alignItems={'center'}>
            <Box>
              <Text>
                Trending product in {year}
              </Text>
              <Text as={'h2'} fontSize={'2.5rem'} fontWeight={600} py={20}>
                Make Your Interior More Minimalistic & Modern
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam eaque dolore repudiandae explicabo non officiis assumenda nobis voluptatum hic voluptate.
              </Text>
              <Link to='/shop'>
              <MotionButton bg={'#0a1d37'}  fontSize={16} py={'15px'} px={'40px'} borderRadius={'50'}  color={'#fff'} mt={30} border={'none'}
                whileTap={{ scale: 0.9 }} whileHover={{scale: 1.05}}>
                 Shop Now
              </MotionButton>  
              </Link>                                                                                
            </Box>
            <Box>
              <Image src={heroImg}/>
            </Box>
        </Flex>
        </Container>
      </Box>
      <Services/>
      <Box as='section' px={40} py={50}>
        <Center>
          <Heading>Trending Product</Heading>
        </Center>
        <SimpleGrid px={40} minChildWidth='230px' spacing={40}>
            <ProductList data={trendingProducts}/>
        </SimpleGrid>
      </Box>
      <Box as='section'  px={40} py={50}>
        <Center>
          <Heading>Best Sales</Heading>
        </Center>
        <SimpleGrid px={40} minChildWidth='230px' spacing={40}>
          <ProductList data={bestSalesProducts}/>
        </SimpleGrid>
      </Box>
      <Box as='section'  px={40} pt={60}  bg={'#0a1d37'} h={'auto'}>
        <Flex alignItems={'center'} justifyContent={'space-around'}>
          <Box color={'#fff'} mb={'20px'}>
            <Heading as={'h4'} mb={'5px'} fontSize={'15px'} >
              Limited Offers
            </Heading>
            <Heading as={'h3'} mb={"30px"} >
              Quality Armchair
            </Heading>
            <TimerCount/>
            <Link to='/shop'>
            <MotionButton whileTap={{ scale: 0.9 }}
                bg={'#fff'}  fontSize={16} py={'12px'} px={'40px'} borderRadius={'50'}  color={'#0a1d37'} mt={30} border={'none'}
            > Visit Store
            </MotionButton>
            </Link>
          </Box>
          <Image src={timerImg} w={'30%'} h={'30%'}  />
        </Flex>
      </Box>
      <Box as='section' px={40} py={50}>
        <Center>
          <Heading py={40}>Wardrobe</Heading>
        </Center>
        <SimpleGrid px={40} minChildWidth='230px' spacing={40}>
            <ProductList data={wardrobeProducts}/>
        </SimpleGrid>
      </Box>
      <Box as='section'  px={40} py={50}>
        <Center>
          <Heading  py={40}>Desk</Heading>
        </Center>
        <SimpleGrid px={40} minChildWidth='230px' spacing={40}>
          <ProductList data={deskProducts}/>
        </SimpleGrid>
      </Box>
      <Box as='section' px={40} py={50}>
        <Center>
          <Heading  py={40}>Table</Heading>
        </Center>
        <SimpleGrid px={40} minChildWidth='230px' spacing={40}>
            <ProductList data={tableProducts}/>
        </SimpleGrid>
      </Box>   
   </Helmet>
   
  )
}

export default Home
// разбить на компоненты страницу????
// ывнести в компонент кнопку???
