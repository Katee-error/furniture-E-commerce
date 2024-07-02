import React, { useEffect, useState } from 'react'
import Helmet from '../components/Helmet'
import { Container, Box, Flex, Text, Button, Image, Grid, Heading, Center } from '@chakra-ui/react';
import heroImg from './../assets/images/hero-img.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Services from '../services/Services';
import ProductList from '../UI/ProductList';
import products from '../assets/data/products';

const Home = () => {

  const MotionButton = motion(Button)
  const year = new Date().getFullYear(); // получаем актуальный год

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter((item) => item.category === 'chair');
    const filteredBestSalesProducts = products.filter((item) => item.category === 'sofa');

    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
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
        <Grid p={40} templateColumns='repeat(4, 1fr)' gap={10}>
            <ProductList data={trendingProducts}/>
        </Grid>
      </Box>
      <Box as='section'  px={40} py={50}>
        <Center>
          <Heading>Best Sales</Heading>
        </Center>
        <Grid p={40} templateColumns='repeat(4, 1fr)' gap={10}>
          <ProductList data={bestSalesProducts}/>
        </Grid>
      </Box>
   </Helmet>
   
  )
}

export default Home
