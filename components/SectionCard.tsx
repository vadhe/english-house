import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
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
  bg: string
  bgCard: string
}

const SectionCard: React.FC<SectionCardProps> = ({ heading, cards, id, bg, bgCard }) => {
  const background = useColorModeValue(bg, 'base.dark')
  return (
    <Box id={id} mb={6} py={16} zIndex="10" bg={background} w="100%" color="white">
      <Heading my={4} as="h2" textAlign="center" fontSize={{ base: 'xl' }}>
        {heading}
      </Heading>

      <Carousel
        isRTL={false}
        breakPoints={breakPoints}
        easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={700}
        showArrows
        outerSpacing={0}
      >
        {cards.map(item => (
          <Card id={item.id} key={item.id} heading={item.heading} img={item.img} bgCard={bgCard} description={item.description} />
        ))}
      </Carousel>
    </Box>
  )
}
export default SectionCard
