import { Box, Heading, Img, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

const AboutUs: React.FC = () => {
  const bg = useColorModeValue('#9B72AA', 'base.dark')
  const ehImage = useColorModeValue('eh.png', 'eh-black.png')

  return (
    <Box borderY="1px" bg={bg} py={16} id="about" pt={6} color="#fff" position="relative" zIndex="10">
      <Heading my={4} as="h2" textAlign="center" fontSize={{ base: '2xl' }}>
        take the first step to know more about us!
      </Heading>
      <SimpleGrid gap={4} columns={{ base: 1, lg: 2 }} px={{ lg: 32 }}>
        <Img my={4} w="70%" mx={{ base: 'auto' }} borderRadius={{ md: '1rem' }} src={`/images/${ehImage}`} />
        <Box textAlign={{ base: 'center', lg: 'left' }}>
          <Heading mt={4} as="h2" textAlign={{ base: 'center', lg: 'left' }} fontSize={{ base: 'xl' }}>
            English House
          </Heading>
          <Text>English community discord</Text>
          <Text my={4} textAlign="left" px={{ base: 2, lg: 0 }}>
            English House is an English community server made for English learners based in Indonesia. Regardless Indonesian majority, every
            nationality and race is welcome. The Community was established on the 12th of December, 2017. The vision of English House is to
            Encourage members of the Community to have a positive attitude towards learning English and maintain tolerance and mutual
            respect among the members of the Community. English House also provide classes, programs, events, and activities that enhances
            the skills and aspirations of the members in learning English and control and maintain a safe and healthy learning and social
            environment as its missions. English House is a home which we believe where English learners around the world can improve their
            English without getting bullied or disrespect.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  )
}
export default AboutUs
