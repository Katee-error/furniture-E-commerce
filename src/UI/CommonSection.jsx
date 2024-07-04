import React from 'react'
import { Box, Center, Heading } from '@chakra-ui/react'


const CommonSection = ({title}) => {
  return (
           <Box
                bgImage="url('/common-bg.png')"
                //bgGradient="linear(rgba(0,0,0,0.562), rgba(0,0,0,0.562))"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                height="300px"
                display="flex"
                alignItems="center"
                justifyContent="center"
           >
            <Center>
                <Heading as={"h1"} fontWeight={600} color={'#000'} fontSize={'30px'} >
                    {title}
                </Heading>
            </Center>
           </Box>
  )
}

export default CommonSection

// linear gradient 