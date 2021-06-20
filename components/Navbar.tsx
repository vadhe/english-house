// import React from 'react'
// import { Box, Flex, Link } from '@chakra-ui/react'
// import NextLink from 'next/link'

// const Navbar: React.FC = () => {
//   return (
//     <Box bg="#b165ad" py="6">
//       <Flex color="base.white.900">
//         <Link color="#000">
//           <NextLink href="1">Home</NextLink>
//         </Link>
//       </Flex>
//     </Box>
//   )
// }

// export default Navbar

import { Box, Flex, Text, Link } from '@chakra-ui/react'
import * as React from 'react'
import { CgMenuGridO } from 'react-icons/cg'
import NextLink from 'next/link'
// import showHidden from 'utils/showHidden.ts';

const Navbar: React.FC = () => {
  const [showHidden, setShowHidden] = React.useState<string>('none')
  const handleShowHidden = () => {
    if (showHidden === 'none') {
      setShowHidden('block')
    } else {
      setShowHidden('none')
    }
  }

  return (
    <Box
      borderBottom="1px"
      borderColor="#46be91"
      borderStyle="solid"
      bg="#b165ad"
      minH="1rem"
      paddingY="1rem"
      justifyItems="center"
      color="#fff"
      // px="1rem"
      d={{ base: 'block', md: ' flex' }}
    >
      <Flex justifyContent="space-between" mx="0.8rem">
        <NextLink href="/" passHref>
          English-House
        </NextLink>
        <Box onClick={handleShowHidden} display={{ base: 'block', md: 'none' }} cursor="pointer">
          <CgMenuGridO size={40} color="#fff" />
        </Box>
      </Flex>
      <Box w={{ base: '100%', lg: '80%' }} display={{ base: showHidden, lg: 'flex' }} justifyContent="center" alignContent="center">
        <Box px={4}>
          {/* <Link marginY={{ base: '1rem', md: '0' }} href="https://chakra-ui.com">
          History
        </Link> */}
          <Link d={{ base: 'block', lg: 'inline-block' }} marginY={{ base: '1rem', md: '0' }} href="https://chakra-ui.com">
            About-Us
          </Link>
          <Link d={{ base: 'block', lg: 'inline-block' }} mx={{ lg: '4' }} marginY={{ base: '1rem', md: '0' }} href="https://chakra-ui.com">
            News
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
