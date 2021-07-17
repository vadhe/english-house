import * as React from 'react'
import { Box, Heading, Img, Text } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export interface CardProps {
  id: number
  img: string
  heading: string
  description: string
}

const Card: React.FC<CardProps> = ({ img, heading, description, id }) => {
  const { ref, inView } = useInView()
  const animation = useAnimation()

  React.useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3
        }
      })
    }
    if (!inView) {
      animation.start({
        x: -200
      })
    }
  }, [inView])
  return (
    <motion.div animate={animation}>
      <Box
        ref={ref}
        className="card-hover"
        py={4}
        bg="#015045"
        d="flex"
        alignItems="center"
        flexDir="column"
        boxShadow="4xl"
        borderRadius="1rem"
        w="90%"
        p={4}
        color="white"
      >
        <Box d="none">{id}</Box>
        <Img h="200px" w="300px" src={img} />
        <Heading textTransform="uppercase" as="h3" my={4} fontFamily="Bevas Neue, cursive" fontSize="xl">
          {heading}
        </Heading>
        <Text textAlign="center">{description}</Text>
        <Box className="popup" borderRadius="1rem" px={2} py={4}>
          English Class is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy
          text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </Box>
      </Box>
    </motion.div>
  )
}

export default Card
