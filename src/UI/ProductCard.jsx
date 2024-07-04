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
    image: item.imgUrl
  }));
toast.success('Product added successfully!') // добавление уведомлениЯ о добавлении продукта в корзину
}
  return (
    <Card maxW='270px'>
        <CardBody>
            <MotionImg 
            whileHover={{ scale: 0.9 }}
            src={item.imgUrl}
            alt=''
            borderRadius='20px'
            w={'100%'}
            h={'auto'}
            />
            <Stack mt='6' spacing='3'>
            <Heading as={"h3"} fontSize={'1.3rem'} fontWeight={600} mt={'15px'}>
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
            </Heading>
            <Text fontSize={'0.9rem'}>{item.category}</Text>
            </Stack>
        </CardBody>
        <Divider />

        <Flex alignItems={'flex-end'} justifyContent={'space-between'}>
            <Text fontSize={'1.3rem'} fontWeight={500} color={'#0a1d37'}>
            ${item.price}
            </Text>
            <MotionButton onClick={addToCart}
                mt={7}
                bg={'#0a1d37'}
                borderRadius={'50px'}
                color={'#fff'}
                border={'none'}
                whileTap={{ scale: 1.2 }}
                w={30}
                h={30}
            >
            <FiPlus />
            </MotionButton>
        </Flex>

</Card>
  )
}

export default ProductCard

// поправить высоту карточек, посмотреть на выравнивание
//Иконки!!!!!!!
