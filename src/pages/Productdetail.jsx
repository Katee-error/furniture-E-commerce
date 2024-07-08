import React, { useRef } from 'react'
import products from '../assets/data/products'
import { useParams } from 'react-router-dom'
import Helmet from '../components/Helmet'
import CommonSection from '../UI/CommonSection'
import { Box, Flex, Container, Image, Heading, IconButton, Text, Button, Tabs, TabList, TabPanels, Tab, TabPanel, FormControl, InputGroup, Input, Textarea, SimpleGrid } from '@chakra-ui/react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiStar } from "react-icons/fi";
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slice/cartSlice'
import ProductList from '../UI/ProductList'

import { toast } from 'react-toastify'



const Productdetail = () => {

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { userName, value } = e.target;
    setFormData({
      ...formData,
      [userName]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    console.log(reviewObj)
    toast.success('Review submited!')

    setFormData({
      userName: '',
      text: '',
  }
)
  }

  const [rating, setRating] = useState(null)

  const reviewUser = useRef('')
  const reviewMsg = useRef('')

  const dispatch = useDispatch()
  const {id} = useParams();
  const product = products.find(item => item.id === id)

  
  const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category} = product;

  const relatedProduct = products.filter(item => item.category === category)

  

  const MotionButton = motion(Button)
  const MotionRating = motion(Flex)

const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      productName,
      price,
      image: imgUrl
    }));
  toast.success('Product added successfully!') 
   }


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
              <Flex justifyContent={'space-between'} alignItems={'center'} >
                 <Text fontSize={'2xl'} color={'black'} fontWeight={600} >${price}</Text>
                 <Text>Category:{category}</Text>
              </Flex>
             
              
              <Text my={5}>{shortDesc}</Text>
              <MotionButton onClick={addToCart}
                bg={'gray.800'}
                borderRadius={5}
                color={'white'}
                border={'none'}
                whileTap={{ scale: 1.2 }}
                _hover={{bgColor:'gray.600'}}
            >
            Add to Cart
            </MotionButton>
            </Box>
          </Flex>
          <Box mt={'50px'}>
          <Tabs size='md' variant='enclosed'>
          <TabList>
            <Tab>
            <Heading  fontSize={'md'} color={'gray.600'} fontWeight={600}>
             Description
             </Heading>
            </Tab>
            <Tab>
              <Heading fontSize={'md'} color={'gray.600'} fontWeight={600}>
                Reviews ({reviews.length})
              </Heading>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Text>{description}</Text>
            </TabPanel>
            <TabPanel>
              <Text >{reviews?.map ((item, index) => (
                <Box kew={index} mb={'20px'}>
                <Heading fontSize={'md'} color={'gray.600'} mb={'8px'}>Name author</Heading>
                  <Box color={'orange'}>{item.rating}(rating)</Box>
                  <Box>{item.text}</Box>
                </Box>
                ))}
              </Text>
              <Box w={'80%'} mt={'50px'} onSubmit={handleSubmit} as='form'>
                <Heading mb={'20px'}>Leave your expirience</Heading>
                <FormControl mb={'10px'} isRequired>
                  <Input type='text' placeholder='Enter your name'  ref={reviewUser} onChange={(e) => handleChange(e.target.value)}/>
                </FormControl>
                <Flex gap={5} color={'orange'} mb={'15px'} >
                  <MotionRating whileTap={{scale: 0.9}} as='span' alignItems={'center'} gap={'3px'} onClick={() => setRating(1)} cursor={'pointer'} >
                    1
                  <FiStar fill='orange' stroke={'none'}/>
                  </MotionRating>
                  <MotionRating whileTap={{scale: 0.9}} as='span' alignItems={'center'} gap={'3px'} onClick={() => setRating(2)} cursor={'pointer'} >
                    2
                    <FiStar fill='orange' stroke={'none'}/>
                  </MotionRating>
                  <MotionRating whileTap={{scale: 0.9}} as='span' alignItems={'center'} gap={'3px'} onClick={() => setRating(3)} cursor={'pointer'} >
                    3
                    <FiStar fill='orange' stroke={'none'}/>
                  </MotionRating>
                  <MotionRating whileTap={{scale: 0.9}} as='span' alignItems={'center'} gap={'3px'} onClick={() => setRating(4)} cursor={'pointer'} >
                    4
                    <FiStar fill='orange' stroke={'none'}/>
                  </MotionRating>
                  <MotionRating whileTap={{scale: 0.9}} as='span' alignItems={'center'} gap={'3px'} onClick={() => setRating(5)} cursor={'pointer'} >
                    5
                    <FiStar fill='orange' stroke={'none'}/>
                  </MotionRating> 
                </Flex>
                <FormControl mb={'20px'} isRequired>
                  <InputGroup>
                    <Textarea  type='text' placeholder='Review message....'  ref={reviewMsg} onChange={(e) => handleChange(e.target.value)}/>
                  </InputGroup>
                </FormControl>
                <MotionButton bgColor={'#0a1d37'} color={'white'} _hover={{bgColor:'gray.600'}} whileTap={{ scale: 1.2 }} type='submit'>Submit</MotionButton>
              </Box>
            </TabPanel>
          </TabPanels>  
        </Tabs>
        </Box>
        <Box p={'40px'}>
          <Heading>
            You might also like
          </Heading>
          <SimpleGrid minChildWidth='280px' spacing={5}>
             <ProductList data={relatedProduct}/>
          </SimpleGrid>  
        </Box> 
        </Container>
      </Box>
    </Helmet>
  )
}

export default Productdetail

// сделать валидацию формы 
//очистка формы после сабмита 
