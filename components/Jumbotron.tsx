import * as React from 'react'
import { Box, Text, Heading, Img } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Jumbotron: React.FC = () => (
  <Box position="relative" h="90vh">
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
      <Heading fontFamily="Bevas Neue, cursive" as="h2" fontSize={{ base: '4xl' }}>
        <motion.div initial={{ y: -250 }} transition={{ delay: 0.2, type: 'spring' }} animate={{ y: -10 }}>
          English House
        </motion.div>
      </Heading>
      <Text my={4} fontSize={{ base: 'xl', lg: '2xl' }}>
        <motion.div initial={{ x: -1000 }} transition={{ delay: 0.7, type: 'spring' }} animate={{ x: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, nesciunt.
        </motion.div>
      </Text>
      <Img
        w={{ base: '80%', md: '40%' }}
        src="https://img.shields.io/badge/englishhouse%20SERVER%20-%237289DA.svg?&style=for-the-badge&logo=discord&logoColor=white"
      />
    </Box>
  </Box>
)

export default Jumbotron
