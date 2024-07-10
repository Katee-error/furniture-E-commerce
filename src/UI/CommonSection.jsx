import React from 'react'
import { Box, Center, Heading } from '@chakra-ui/react'


const CommonSection = ({title}) => {
  return (
           <Box
                bgImage="url('/common-bg.png')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                height="300px"
                display="flex"
                alignItems="center"
                justifyContent="center"
           >
            <Center>
                <Heading as={"h1"} fontWeight={600} color={'white'} fontSize={'3xl'} >
                    {title}
                </Heading>
            </Center>
           </Box>
  )
}

export default CommonSection

// linear gradient 