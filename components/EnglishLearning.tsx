import * as React from 'react'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import Card from './Card'

const EnglishLearning: React.FC = () => (
  <Box id="english-learning" py={16} pos="relative" zIndex="10" bg="tomato" w="100%" color="white">
    <Heading my={4} fontFamily="Bevas Neue, cursive" as="h2" textAlign="center" fontSize={{ base: '4xl' }}>
      English Learning
    </Heading>
    <SimpleGrid px={{ base: 4, lg: 32 }} columns={{ md: 2, lg: 3 }} gap={10}>
      <Card
        heading="book club"
        img="/images/book.png"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
      />

      <Card
        heading="daily wotd and iotd"
        img="/images/daily.png"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
      />

      <Card
        heading="potw"
        img="/images/potw.png"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
      />
    </SimpleGrid>
  </Box>
)
export default EnglishLearning
