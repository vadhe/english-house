import React from 'react'
import { Box, Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const Navbar: React.FC = () => {
  return (
    <Box bg="base.purple.300" py="6">
      <Flex color="base.white.900">
        <Link color="#000">
          <NextLink href="1">Home</NextLink>
        </Link>
      </Flex>
    </Box>
  )
}

export default Navbar
