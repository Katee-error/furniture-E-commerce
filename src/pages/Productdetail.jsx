import React from 'react'
import products from '../assets/data/products'
import { useParams } from 'react-router-dom'
import Helmet from '../components/Helmet'
import CommonSection from '../UI/CommonSection'
import { Box, Flex, Container, Image, Heading, IconButton, Text, Button  } from '@chakra-ui/react'
//import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiStar } from "react-icons/fi";

import { toast } from 'react-toastify'



const Productdetail = () => {

  //const [tab, setTab] = useState()

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      image: item.imgUrl
    }));
  toast.success('Product added successfully!') // добавление уведомлениЯ о добавлении продукта в корзину
  }

  const {id} = useParams();
  const product = products.find(item => item.id === id)

  const { imgUrl, productName, price, avgRating, reviews, description, shortDesc } = product;

  const MotionButton = motion(Button)

  return (
    <Helmet title={productName}>
      <CommonSection title={productName}/>
      <Box py={'60px'}>
        <Container  maxW={'container.lg'}>
          <Flex justifyContent={'space-between'} alignItems={'center'} gap={20}>
            <Image src={imgUrl} w={'60%'}/>
            <Box >
              <Heading mb={3}>
                {productName}
              </Heading>
              <Flex gap={2} alignItems={'center'} mb={3} >
                <Flex>
                  <FiStar fill='orange' stroke={'none'}/>
                  <FiStar fill='orange' stroke={'none'}/>
                  <FiStar fill='orange' stroke={'none'}/>
                  <FiStar fill='orange' stroke={'none'}/>
                  <FiStar fill='orange' stroke={'none'}/>
                </Flex>
                <Flex color={'#999'}>(<Box color={'orange.400'} fontWeight={600}>{avgRating}</Box>rating)</Flex>
              </Flex>
              <Text fontSize={'2xl'} color={'black'} fontWeight={600}>${price}</Text>
              <Text mb={5}>{shortDesc}</Text>
              <MotionButton onClick={addToCart}
                bg={'gray.800'}
                borderRadius={'50px'}
                color={'white'}
                border={'none'}
                whileTap={{ scale: 1.2 }}
            >
            Add to Cart
            </MotionButton>
            </Box>
          </Flex>
          <Box mt={'50px'}>
            <Flex gap={30}>
              <Heading  fontSize={'md'} color={'gray.600'} fontWeight={600}

              >
                Description
              </Heading>
              <Heading fontSize={'md'} color={'gray.600'} fontWeight={600} >
                Reviews ({reviews.length})
              </Heading>
            </Flex>
            <Box mt={'40px'}>
              <Text>
                {description}
              </Text>
            </Box>
          </Box>
        </Container>
      </Box>
    </Helmet>
  )
}

export default Productdetail

// разобраться с табами и переключением ревью и описания