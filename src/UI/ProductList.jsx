import React from 'react'
import ProductCard from './ProductCard'

//import products from '../assets/data/products'

const ProductList = ({data}) => {
  return (
    <>
      {
      data?.map((item) => (
        <ProductCard item={item}/>
      ))
      }
    </>
  )
}

export default ProductList
