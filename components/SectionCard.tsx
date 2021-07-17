import * as React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import Carousel from 'react-elastic-carousel'
import Card, { CardProps } from './Card'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 }
]
interface SectionCardProps {
  heading: string
  cards: CardProps[]
  id: string
}

const SectionCard: React.FC<SectionCardProps> = ({ heading, cards, id }) => (
  <Box id={id} mb={6} py={16} zIndex="10" bg="#020d22" w="100%" color="white">
    <Heading my={4} fontFamily="Bevas Neue, cursive" as="h2" textAlign="center" fontSize={{ base: '4xl' }}>
      {heading}
    </Heading>
    <Carousel
      isRTL={false}
      breakPoints={breakPoints}
      easing="cubic-bezier(1,.15,.55,1.54)"
      tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
      transitionMs={700}
      showArrows={false}
      outerSpacing={4}
    >
      {cards.map(item => (
        <Card id={item.id} key={item.id} heading={item.heading} img={item.img} description={item.description} />
      ))}
    </Carousel>
  </Box>
)
export default SectionCard
