import React from 'react'
import { Box, Flex, Link as LinkChakra } from '@chakra-ui/react'
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <Box bg="base.orange" py="6">
      <Flex color="base.white.900">
        <LinkChakra>
          <Link href="1">Home</Link>
        </LinkChakra>
      </Flex>
    </Box>
  )
}

export default Navbar
