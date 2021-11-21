import { Box, Heading, Img, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

const AboutUs: React.FC = () => {
  const bg = useColorModeValue('#9B72AA', 'base.dark')
  const ehImage = useColorModeValue('eh.png', 'eh-black.png')

  return (
    <Box borderY="1px" bg={bg} py={16} id="about" pt={6} color="#fff" position="relative" zIndex="10">
      <Heading my={4} as="h2" textAlign="center" fontSize={{ base: '2xl' }}>
        About Us
      </Heading>
      <SimpleGrid gap={4} columns={{ base: 1, lg: 2 }} px={{ lg: 32 }}>
        <Img my={4} w="70%" mx={{ base: 'auto' }} borderRadius={{ md: '1rem' }} src={`/images/${ehImage}`} />
        <Box textAlign={{ base: 'center', lg: 'left' }}>
          <Heading mt={4} as="h2" textAlign={{ base: 'center', lg: 'left' }} fontSize={{ base: 'xl' }}>
            English House
          </Heading>
          <Text>English community discord</Text>
          <Text my={4} textAlign="left" px={{ base: 2, lg: 0 }}>
            English house is a non-profit socio-educational community for people around the world to learn English, practice their
            listening, reading, writing, and speaking skills, through formal and informal interactions on the online Discord platform.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  )
}
export default AboutUs
