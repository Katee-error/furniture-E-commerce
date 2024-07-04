import React from 'react'
import { Flex, Box, Text, Grid, GridItem, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import serviceData from '../assets/data/serviceData';

const Services = () => {

    const MotionItem = motion(GridItem)
  return (
    <Box as='section' p={40} >
        <Grid templateColumns='repeat(4, 1fr)' gap={20} >
            {serviceData.map((item, i) => (
                <MotionItem alignItems={'center'} bg={item.bg} p={20} w={"100%"} h={'auto'} key={i} whileHover={{ scale: 1.05 }} >
                        <Flex alignContent={'baseline'} gap={20} alignItems={'center'}>
                            <Box as='span'>
                                <Image src={item.icon}/>
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
                </MotionItem>
            ))}
        </Grid>  
    </Box>
  )
}

export default Services
