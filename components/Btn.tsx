import { Button, Link, Box } from '@chakra-ui/react'
import * as React from 'react'

interface Button {
  link: string
  name: string
}
const Btn: React.FC<Button> = ({ link, name }) => {
  return (
    <Box w={{ base: '80%', lg: '50%' }} mx="auto">
      <Link href={link} mx="auto" target="_blank">
        <Button
          _hover={{ backgroundColor: '#881282' }}
          _active={{ backgroundColor: '#881282' }}
          h="50px"
          w="full"
          p="7"
          my={6}
          mx="auto"
          color="#fff"
          bg="#b165ad"
        >
          {name}
        </Button>
      </Link>
    </Box>
  )
}

export default Btn
