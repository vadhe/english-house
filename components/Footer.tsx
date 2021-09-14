import * as React from 'react'
import { Img, Flex, useColorModeValue } from '@chakra-ui/react'

const Footer: React.FC = () => {
  const bg = useColorModeValue('base.purple', 'base.dark')
  return (
    <Flex color="#fff" justifyContent="center" alignItems="center" bg={bg} w="100%" textAlign="center" p={4}>
      &copy; English House ||
      <a
        href=" https://discord.gg/7stg99r
       "
        target="_blank"
      >
        <Img w="30px" src="/images/discord.svg" ml={1} mr={2} />
      </a>
      ||
      <a rel="noreferrer" href="https://www.instagram.com/english.house.id/?igshid=tk3fldemubfq" target="_blank">
        <Img ml={1} w="30px" src="/images/instagram.svg" />
      </a>
      ||
      <a rel="noreferrer" href="https://github.com/vadhe/english-house" target="_blank">
        <Img ml={1} w="30px" src="/images/github.png" />
      </a>
    </Flex>
  )
}
export default Footer
