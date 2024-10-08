import React, { useEffect, useState } from 'react'
import Helmet from '../components/Helmet'
import { Container, Box, Flex, Text, Button, Image, Heading, Center, SimpleGrid } from '@chakra-ui/react';
import heroImg from './../assets/images/hero-img.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Services from '../services/Services';
import ProductList from '../UI/ProductList';
import products from '../assets/data/products';
import timerImg from './../assets/images/timer-3.jpg'
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
      <Box as='section' py={{base: '0', md: '60px'}} 
      bgImage="url('/main-bg-01.jpg')"
      bgPosition="center center"
      bgRepeat="no-repeat"
      bgSize="cover"
      height="600px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      >
        <Container maxW={"container.lg"}>
          <Flex gap={5} justifyContent={"space-between"} alignItems={'center'}>
            <Box w={{base: '100%', md: '50%'}} textAlign={{base: 'center'}}>
              <Text>
                Trending product in {year}
              </Text>
              <Text as={'h1'} fontSize={{base: '2xl', md: '4xl'}} fontWeight={600} p={'8px 0 20px'}>
                Make Your Interior More Minimalistic & Modern
              </Text>
              <Text fontSize={{base: 'xs'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam eaque dolore repudiandae explicabo non officiis assumenda nobis voluptatum hic voluptate.
              </Text>
              <Link to='/shop'>
              <MotionButton 
                bg={'gray.800'}
                borderRadius={10}
                color={'white'}
                border={'none'}
                whileTap={{ scale: 1.2 }}
                whileHover={{ scale: 1.05 }}
                _hover={{bgColor:'gray.600'}}
                mt={'25px'}
                p={'25px 40px'}
            >
            Shop Now
            </MotionButton>
              </Link>                                                                                
            </Box>
            {/* <Box>
              <Image src={heroImg}/>
            </Box> */}
        </Flex>
        </Container>
      </Box>
      <Services/>
      <Box as='section' py={'60px'}>
        <Container maxW={'container.xl'}>
          <Center>
          <Heading>Trending Product</Heading>
        </Center>
        <SimpleGrid minChildWidth='280px' spacing={5}>
            <ProductList data={trendingProducts}/>
        </SimpleGrid>
        </Container>
      </Box>
      <Box as='section' py={'40px'}>
      <Container maxW={'container.xl'}>
        <Center>
          <Heading>Best Sales</Heading>
        </Center>
        <SimpleGrid  minChildWidth='270px' spacing={5}>
          <ProductList data={bestSalesProducts}/>
        </SimpleGrid>
        </Container>
      </Box>
      <Box as='section' py={'60px'} bg={'#0a1d37'}>
        <Flex alignItems={'center'} justifyContent={'space-around'} flexDirection={{base: 'column', md: 'row'}}>
          <Box color={'white'} mb={'20px'} textAlign={{base: 'center'}}>
            <Heading as={'h4'} mb={'5px'} fontSize={'xs'} >
              Limited Offers
            </Heading>
            <Heading as={'h3'} mb={"30px"} >
              Quality Armchair
            </Heading>
            <TimerCount/>
            <Link to='/shop'>
            <MotionButton whileTap={{ scale: 0.9 }}
                bg={'#fff'}  fontSize={'sm'} py={'12px'} px={'40px'} borderRadius={'50'}  color={'#0a1d37'} mt={30} border={'none'}
            > Visit Store
            </MotionButton>
            </Link>
          </Box>
          <Image src={timerImg} w={{base: '100%', md: '40%'}} borderRadius={10}/>
        </Flex>
      </Box>
      <Box as='section' py={'40px'}>
      <Container maxW={'container.xl'}>
        <Center>
          <Heading>Wardrobe</Heading>
        </Center>
        <SimpleGrid  minChildWidth='270px' spacing={5}>
          <ProductList data={wardrobeProducts}/>
        </SimpleGrid>
        </Container>
      </Box>
      <Box as='section' py={'40px'}>
      <Container maxW={'container.xl'}>
        <Center>
          <Heading>Desk</Heading>
        </Center>
        <SimpleGrid minChildWidth='270px' spacing={5}>
          <ProductList data={deskProducts}/>
        </SimpleGrid>
        </Container>
      </Box>
      <Box as='section' py={'40px'}>
        <Container maxW={'container.xl'} >
           <Center>
          <Heading>Table</Heading>
        </Center>
        <SimpleGrid minChildWidth='270px' spacing={5}>
            <ProductList data={tableProducts}/>
        </SimpleGrid>
        </Container>
       
      </Box>   
   </Helmet>
   
  )
}

export default Home
// разбить на компоненты страницу????
// ывнести в компонент кнопку???
