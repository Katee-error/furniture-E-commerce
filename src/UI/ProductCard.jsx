import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, Button, ButtonGroup, Flex, IconButton } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiPlus } from "react-icons/fi";

const ProductCard = ({item}) => {

const MotionImg = motion(Image)
const MotionButton = motion(Button)
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
            <MotionButton 
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
