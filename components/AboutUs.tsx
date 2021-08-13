import * as React from 'react'
import { Box, Heading, Img, Text, SimpleGrid } from '@chakra-ui/react'

const AboutUs: React.FC = () => (
  <Box py={16} id="about" pt={6} bg="#015045" position="relative" zIndex="10">
    <Heading my={4} fontFamily="Bevas Neue, cursive" as="h2" textAlign="center" fontSize={{ base: '4xl' }}>
      About Us
    </Heading>
    <SimpleGrid gap={4} columns={{ base: 1, lg: 2 }} px={{ lg: 32 }}>
      <Img my={4} w="70%" mx={{ base: 'auto' }} borderRadius={{ md: '1rem' }} src="/images/EH_Logo.png" />
      <Box textAlign={{ base: 'center', lg: 'left' }}>
        <Heading mt={4} fontFamily="Bevas Neue, cursive" as="h2" textAlign={{ base: 'center', lg: 'left' }} fontSize={{ base: '4xl' }}>
          English House
        </Heading>
        <Text>English cominity discord</Text>
        <Text my={4} textAlign="left" px={{ base: 2, lg: 0 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores hic ad sit id iusto earum, dicta sint quae totam neque
          reprehenderit natus dolore pariatur accusamus laboriosam veritatis est dolores quas modi omnis. Dicta enim praesentium tenetur
          laboriosam, at ducimus culpa assumenda et sequi dolore aut corporis totam quasi, minus vel maiores nihil! Nisi eum delectus
          voluptate corporis. Itaque consequuntur tempore voluptatem blanditiis. Autem eveniet explicabo corrupti quidem. Cupiditate earum
          reprehenderit recusandae doloribus autem? Cumque laudantium culpa delectus, architecto libero rem quaerat sequi enim blanditiis,
          numquam officia repellat earum aliquam aut quis quas minus consequuntur molestiae. Itaque voluptas cumque a.
        </Text>
      </Box>
    </SimpleGrid>
  </Box>
)
export default AboutUs
