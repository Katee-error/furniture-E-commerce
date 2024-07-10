import React from 'react'
import { Flex, Box, Text, GridItem, Image, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import serviceData from '../assets/data/serviceData';
import { Container } from 'reactstrap';

const Services = () => {

    const MotionItem = motion(GridItem)
  return (
    <Box as='section' p={'60px'} >
        <Container maxW='container.lg'>
            <SimpleGrid minChildWidth='230px' gap={'20px'} >
            {serviceData.map((item, i) => (
                <MotionItem alignItems={'center'} bg={item.bg} p={5} w={"100%"} h={'auto'} key={i} whileHover={{ scale: 1.05 }} >
                    <Flex alignContent={'baseline'} gap={5} alignItems={'center'}>
                        <Box as='span'>
                            <Image src={item.icon}/>
                        </Box>
                        <Box>
                            <Text as={'h3'} fontSize={'xl'} fontWeight={600}>
                                {item.title}
                            </Text>
                            <Text fontSize={'xs'}>
                                {item.subtitle}
                            </Text>
                            </Box>
                        </Flex>
                </MotionItem>
            ))}
            </SimpleGrid>  
        </Container>
    </Box>
  )
}

export default Services
