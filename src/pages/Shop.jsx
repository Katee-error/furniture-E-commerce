import React, { useState } from 'react'

import {Box, Flex, Select, Stack, FormControl, Container, FormLabel, Input, InputGroup, InputLeftElement, Heading, SimpleGrid } from '@chakra-ui/react';
import Helmet from '../components/Helmet'
import CommonSection from '../UI/CommonSection'
import { FiFilter, FiSearch } from "react-icons/fi";
import ProductList from '../UI/ProductList';
import products from '../assets/data/products';


const Shop = () => {

  const [productsData, setProductsData] = useState(products); 

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
      (item) => item.category === "sofa") ;

    setProductsData(filteredProducts);
  } 
    if (filterValue === "chair") {
      const filteredProducts = products.filter(
      (item) => item.category === "chair") ;

    setProductsData(filteredProducts);
  } 
    if (filterValue === "wardrobe") {
      const filteredProducts = products.filter(
      (item) => item.category === "wardrobe") ;

    setProductsData(filteredProducts);
  } 
    if (filterValue === "table") {
      const filteredProducts = products.filter(
      (item) => item.category === "table") ;table
    setProductsData(filteredProducts);
  } 
    if (filterValue === "desk") {
      const filteredProducts = products.filter(
      (item) => item.category === "desk") ;

    setProductsData(filteredProducts);
  } 
}// фильтрация по категориям

const handleSearch = (e) => {
  const searchTeam = e.target.value

  const searchedProducts = products.filter(item => item.productName.
    toLowerCase().includes(searchTeam.toLowerCase()))

  setProductsData(searchedProducts);

} // фильтрация по работе search input

  return (
    <Helmet title={'Shop'}>
      <CommonSection title={'Products'}/>
      <Box  py={'40px'}>
        <Container maxW={'container.lg'}>
          <Flex justifyContent={'space-between'} gap={{ base: "15px", md: "40px" }} textAlign={'center'} flexDirection={{ base: "column", md: "row" }}>
            <FormControl>
              <Select placeholder="Filter By Catrgory" onChange={handleFilter}> 
                <option value="sofa">Sofa</option>
                <option value="chair">Chair</option>
                <option value="wardrobe">Wardrobe</option>
                <option value="table">Table</option>
                <option value="desk">Desk</option>
              </Select>
            </FormControl>
            <FormControl>
              <Select placeholder="Filter By Catrgory">
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </Select>
            </FormControl>
            <InputGroup >
            <InputLeftElement pointerEvents='none' >
              <FiSearch/>
            </InputLeftElement>
            <Input type='text' placeholder='Search....' onChange={handleSearch} />
          </InputGroup>
        </Flex> 
        </Container>  
      </Box>
     
    <Box>
      <Container maxW={'container.xl'}>
        <SimpleGrid minChildWidth='300px' >
                {
                productsData.length === 0? 
                  <Heading>No products are found! </Heading>:
                <ProductList data={productsData}/>
              }
        </SimpleGrid>
      </Container>
      
    </Box>
    
   </Helmet>
  )
}

export default Shop
// Прописать ебучую форму, которая не срабатыает для фильтрации 
