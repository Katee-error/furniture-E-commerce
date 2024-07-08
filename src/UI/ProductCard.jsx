import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, Button, ButtonGroup, Flex, IconButton } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiPlus } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slice/cartSlice';

import { toast } from 'react-toastify';// добавление уведомлениЯ о добавлении продукта в корзину

const ProductCard = ({item}) => {

const MotionImg = motion(Image)
const MotionButton = motion(Button)

const dispatch = useDispatch()

const addToCart = () => {
  dispatch(cartActions.addItem({
    id: item.id,
    productName: item.productName,
    price: item.price,
    imgUrl: item.imgUrl
  }));
toast.success('Product added successfully!') // добавление уведомлениЯ о добавлении продукта в корзину
}
  return (
    <Card p={'20px 15px'} boxShadow={'none'}>
        <CardBody p='none'>
            <MotionImg 
            whileHover={{ scale: 0.9 }}
            src={item.imgUrl}
            alt=''
            borderRadius='20px'
            w={'100%'}
            h={'auto'}
            />
            <Stack mt='6px'>
            <Heading as={"h3"} fontSize={'1.3rem'} fontWeight={600} mt={'15px'}>
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
            </Heading>
            <Text fontSize={'xs'}>{item.category}</Text>
            </Stack>
        </CardBody>
       
        <Flex alignItems={'center'} justifyContent={'space-between'} mt={'20px'}>
            <Text fontSize={'lg'} fontWeight={500} color={'gray.800'}>
            ${item.price}
            </Text>
            <MotionButton onClick={addToCart}
                bg={'gray.800'}
                borderRadius={'50px'}
                color={'white'}
                border={'none'}
                whileTap={{ scale: 1.2 }}
                w={'30px'}
                h={'30px'}
            >
            <IconButton as={FiPlus} w={'15px'} h={'15px'} bg={'none'} color={'white'} />
            </MotionButton>
        </Flex>

</Card>
  )
}

export default ProductCard

// поправить высоту карточек, посмотреть на выравнивание
//Иконки!!!!!!!
