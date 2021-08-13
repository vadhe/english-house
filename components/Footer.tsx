import * as React from 'react'
import { Img, Flex } from '@chakra-ui/react'

const Footer: React.FC = () => (
  <Flex justifyContent="center" alignItems="center" bg="#015045" w="100%" textAlign="center" p={4} color="white">
    &copy; 2021 English House ||
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
  </Flex>
)
export default Footer
