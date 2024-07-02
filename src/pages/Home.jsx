import React from 'react'
import Helmet from '../components/Helmet'
import { Container, Box, Flex, Text, Button, Image } from '@chakra-ui/react';
import heroImg from './../assets/images/hero-img.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {

  const MotionButton = motion(Button)
  const year = new Date().getFullYear(); // получаем актуальный год
  return (
   <Helmet title={'Home'}>
      <Box px={40} py={50} bg={'#d6e5fb'}>
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
              <MotionButton bg={'#0a1d37'}  fontSize={16} py={'15px'} px={'40px'} borderRadius={'50'}  color={'#fff'} mt={30} border={'none'}
                whileTap={{ scale: 0.9 }} >
                <Link to='/shop'>
                 Shop Now
                </Link>
              </MotionButton>                                                                                  
            </Box>
            <Box>
              <Image src={heroImg}/>
            </Box>
        </Flex>
        </Container>
      </Box>
   </Helmet>
  )
}

export default Home
