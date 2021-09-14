import { Box, Heading } from '@chakra-ui/react'
import * as React from 'react'
import Navbar from '~/components/Navbar'

const reqruitment: React.FC = () => {
  return (
    <>
      <Navbar />
      <Box pos="relative" color="#000" mt="32" textAlign="center">
        <Heading as="h2">Coming Soon ....</Heading>
      </Box>
    </>
  )
}

export default reqruitment
