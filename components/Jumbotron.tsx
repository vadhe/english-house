import { Box, Heading, Img, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import * as React from 'react'

const Jumbotron: React.FC<{ content: string }> = ({ content }) => {
  const bg = useColorModeValue('', 'base.dark')
  return (
    <Box bg={bg} position="relative" h="90vh" color="#fff">
      <Box
        px={1}
        w={{ lg: '50%' }}
        mx={{ lg: 'auto' }}
        textAlign="center"
        d="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        right="0"
        left="0"
        top="180"
        position="fixed"
      >
        {/* <Heading as="h2" fontSize={{ base: '2xl' }}> */}
        <motion.div initial={{ y: -250 }} transition={{ delay: 1, type: 'spring', duration: 2 }} animate={{ y: -10 }}>
          <Img w="32px" h="32px" my={2} src="images/eh-head.png" />
        </motion.div>
        {/* </Heading> */}
        <Heading as="h2" fontSize={{ base: '2xl' }}>
          <motion.div initial={{ y: -250 }} transition={{ delay: 1, type: 'spring', duration: 2 }} animate={{ y: -10 }}>
            English House
          </motion.div>
        </Heading>
        <Text my={4} fontSize="xl">
          <motion.div initial={{ x: -1000 }} transition={{ delay: 2, type: 'spring', duration: 1 }} animate={{ x: 0 }}>
            {content}
          </motion.div>
        </Text>
        <a href="https://discord.gg/7stg99r">
          <motion.img
            initial={{ y: -5000 }}
            transition={{ delay: 1, type: 'spring', duration: 2 }}
            animate={{ y: 0 }}
            src="https://img.shields.io/badge/englishhouse%20SERVER%20-%237289DA.svg?&style=for-the-badge&logo=discord&logoColor=white"
          />
        </a>
      </Box>
    </Box>
  )
}

export default Jumbotron
