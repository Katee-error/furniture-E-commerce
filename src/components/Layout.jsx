import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Routers from '../router/Routers'
import { Box, Flex } from '@chakra-ui/react'

const Layout = () => {
  return (
    <Flex flexDirection={'column'} minH={'100vh'}> 
    <Header/>
      <div>
      <Routers/>
      </div>
      <Footer/>
    </Flex>
  )
}

export default Layout
