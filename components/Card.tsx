import * as React from 'react'
import { Box, Heading, Img, Text } from '@chakra-ui/react'

interface CardProps {
  img: string
  heading: string
  description: string
}
const Card: React.FC<CardProps> = ({ img, heading, description }) => (
  <Box py={4} bg="red" d="flex" alignItems="center" flexDir="column" boxShadow="4xl" borderRadius="1rem" w="100%" p={4} color="white">
    <Img h="200px" w="300px" src={img} />
    <Heading textTransform="uppercase" as="h3" my={4} fontFamily="Bevas Neue, cursive" fontSize="xl">
      {heading}
    </Heading>
    <Text textAlign="center">{description}</Text>
  </Box>
)
export default Card
