import React, { useEffect, useState } from 'react'
import { Box, Center, Flex, Heading,  } from '@chakra-ui/react'


const TimerCount = () => {

  const [days, setDays] = useState()
  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()

  let interval;
  const countDown = () => {
    const destination = new Date('Jul 10, 2024'). getTime()

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
    <Flex alignItems={'center'} gap={7}>
        <Flex alignItems={'center'} gap={5} color={'#fff'} >
          <Box textAlign={'center'} mr={'5px'}>
            <Heading as='h2'  fontSize={'50px'}>
              {days}
            </Heading>
            <Heading as='h5'  fontSize={'12px'}>
              days
            </Heading>
          </Box>
          <Box as='span' fontSize={'30px'} >
            :
          </Box>
        </Flex>
        <Flex alignItems={'center'} gap={5}>
          <Box textAlign={'center'} m={'10px'}>
            <Heading as='h2'  fontSize={'50px'}>
              {hours}
            </Heading>
            <Heading as='h5' fontSize={'12px'}>
              hours
            </Heading>
          </Box>
          <Box as='span' fontSize={'30px'}>
            :
          </Box>
        </Flex>
        <Flex alignItems={'center'} gap={5}>
          <Box textAlign={'center'} m={'10px'}>
            <Heading as='h2'  fontSize={'50px'}>
              {minutes}
            </Heading>
            <Heading as='h5'  fontSize={'12px'}>
              min
            </Heading>
          </Box>
          <Box as='span' fontSize={'30px'}>
            :
          </Box>
        </Flex>
        <Flex alignItems={'center'} gap={5}>
          <Box textAlign={'center'} m={'10px'}>
            <Heading as='h2'   fontSize={'50px'}>
              {seconds}
            </Heading>
            <Heading as='h5'  fontSize={'12px'}>
              sec
            </Heading>
          </Box>
        </Flex>
    </Flex>
  )
}

export default TimerCount




