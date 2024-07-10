import React, { useEffect, useState } from 'react'
import { Box, Center, Flex, Heading,  } from '@chakra-ui/react'


const TimerCount = () => {

  const [days, setDays] = useState()
  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()

  let interval;
  const countDown = () => {
    const destination = new Date('Jul 20, 2024'). getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()
      const different = destination - now 

      const days = Math.floor(different / (1000 * 60 * 60 * 24))
      const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
      const minutes = Math.floor(different % (1000 * 60 * 60) / (1000 * 60))
      const seconds = Math.floor(different % (1000 * 60 ) / 1000)

      if(destination < 0) clearInterval(interval.current)
        else {
          setDays(days)
          setHours(hours)
          setMinutes(minutes)
          setSeconds(seconds)
      }
    })
  }

  useEffect(() => {
    countDown()
  }, [])


  return (
    <Flex alignItems={'center'} gap={5}>
        <Flex alignItems={'center'} gap={3} color={'white'} >
          <Box textAlign={'center'} mr={'5px'}>
            <Heading as='h2'  fontSize={'5xl'}>
              {days}
            </Heading>
            <Heading as='h5'  fontSize={'sm'}>
              days
            </Heading>
          </Box>
          <Box as='span' fontSize={'3xl'} >
            :
          </Box>
        </Flex>
        <Flex alignItems={'center'} gap={5} color={'white'} >
          <Box textAlign={'center'} mr={'5px'}>
            <Heading as='h2'  fontSize={'5xl'}>
              {hours}
            </Heading>
            <Heading as='h5'  fontSize={'sm'}>
              hours
            </Heading>
          </Box>
          <Box as='span' fontSize={'3xl'} >
            :
          </Box>
        </Flex>
        <Flex alignItems={'center'} gap={5} color={'white'} >
          <Box textAlign={'center'} mr={'5px'}>
            <Heading as='h2'  fontSize={'5xl'}>
              {minutes}
            </Heading>
            <Heading as='h5'  fontSize={'sm'}>
              minutes
            </Heading>
          </Box>
          <Box as='span' fontSize={'3xl'} >
            :
          </Box>
        </Flex>
        <Flex alignItems={'center'} gap={5} color={'white'} >
          <Box textAlign={'center'} mr={'5px'}>
            <Heading as='h2'  fontSize={'5xl'}>
              {seconds}
            </Heading>
            <Heading as='h5'  fontSize={'sm'}>
              seconds
            </Heading>
          </Box>
        </Flex>
        
    </Flex>
  )
}

export default TimerCount




