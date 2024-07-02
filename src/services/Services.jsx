import React from 'react'
import { Container, Flex, Box, Text, IconButton, Grid, GridItem } from '@chakra-ui/react'
import { FiTruck } from "react-icons/fi";
import { motion } from 'framer-motion';
import serviceData from '../assets/data/serviceData';

const Services = () => {

  return (
    <Box as='section' p={40} >
        <Grid templateColumns='repeat(4, 1fr)' gap={20} >
            {serviceData.map((item, i) => (
                <GridItem alignItems={'center'} bg={item.bg} p={20} w={"100%"} h={'auto'} key={i} >
                        <Flex alignContent={'baseline'} gap={20}>
                            <Box as='span'>
                                <IconButton w={30} h={30}>
                                    
                                </IconButton>
                            </Box>
                            <Box>
                                <Text as={'h3'} fontSize={'20px'} fontWeight={600}>
                                    {item.title}
                                </Text>
                                <Text fontSize={'12px'}>
                                   {item.subtitle}
                                </Text>
                            </Box>
                        </Flex>
                </GridItem>
            ))}
        </Grid>
        
    </Box>
  )
}

export default Services
// сделать иконки!!!!!