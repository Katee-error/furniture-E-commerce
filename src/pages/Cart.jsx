import React from 'react'
import Helmet from '../components/Helmet'
import CommonSection from '../UI/CommonSection'
import { Container, Flex, Table, Image, Box, Button, Text, 
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading, 
  Stack} from '@chakra-ui/react'

import { FiTrash2 } from "react-icons/fi";
import { motion } from 'framer-motion';
import { cartActions } from '../redux/slice/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  const MotionButton = motion(Button)
  
  return (
    <Helmet title={"Cart"}>
      <CommonSection title={"Shopping Cart"}/>
        <Container maxW="container.lg">
            {
              cartItems.length === 0 ? 
              <Stack textAlign={'center'} py={'100px'} spacing={5}>
                <Heading fontSize={'4xl'} >No item added to the cart!</Heading>
                <Text>Once you add something to your cart, it will appear here. Ready to get started?</Text>
                <Link to='/shop'><MotionButton 
                size={'md'}
                bg={'gray.800'}
                borderRadius={5}
                color={'white'}
                border={'none'}
                whileTap={{ scale: 1.2 }}
                whileHover={{ scale: 1.05 }}
                _hover={{bgColor:'gray.600'}}
                p={'25px 40px'}
                >Get Started</MotionButton></Link>
              </Stack> :
              <Flex justifyContent={'space-between'}>
            <TableContainer p={'40px'}>
              <Table variant='simple' w={'100%'} size='sm'>
                <Thead>
                  <Tr>
                    <Th>Image</Th>
                    <Th>Title</Th>
                    <Th isNumeric>Price</Th>
                    <Th isNumeric>Qty</Th>
                    <Th>Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    cartItems.map((item, index) => (
                    <TrR item={item} key={index}/>
                    ))
                  }
                </Tbody>
              </Table>
            </TableContainer>
            <Box p={'40px'} w={'37%'}>
              <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Heading fontSize={'xl'}>
                  Subtotal
                </Heading>
                <Box fontWeight={600} fontSize={'xl'}>
                  ${totalAmount}
                </Box>
              </Flex>
              <Text fontSize={'sm'} mb={'30px'}>taxes and shipping will calculate in checkout</Text>
              <Flex flexDirection={'column'} gap={5} >
                <Link to='/checkout'><MotionButton 
                size={'sm'}
                bg={'gray.800'}
                borderRadius={5}
                color={'white'}
                border={'none'}
                whileTap={{ scale: 1.2 }}
                whileHover={{ scale: 1.05 }}
                _hover={{bgColor:'gray.600'}}
                mt={'5px'}
                p={'25px 70px'}
                >Checkout</MotionButton></Link>
                <Link to='/shop'><MotionButton
                size={'sm'}
                bg={'gray.800'}
                borderRadius={5}
                color={'white'}
                border={'none'}
                whileTap={{ scale: 1.2 }}
                whileHover={{ scale: 1.05 }}
                _hover={{bgColor:'gray.600'}}
                p={'25px 40px'}
                >Continue Shopping</MotionButton></Link>
              </Flex>
            </Box> 
            </Flex>
        }
          
        </Container>
    </Helmet>
  )
};

const TrR = ({item}) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }
  return (
    <Tr>
     <Td>
       <Image src={item.imgUrl} objectFit={'contain'} w={'80px'} h={'80px'}/>
     </Td>
      <Td>{item.productName}</Td>
      <Td isNumeric>${item.price}</Td>
      <Td isNumeric>{item.quantity}px</Td>
      <Td cursor={'pointer'}>
       <FiTrash2 onClick={deleteProduct} />
      </Td>
  </Tr>
  )
}

export default Cart
