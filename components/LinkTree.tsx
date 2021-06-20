import { Box, Img } from '@chakra-ui/react'
import React from 'react'
import Btn from './Btn'

const LinkTree: React.FC = () => {
  return (
    <Box py={4}>
      <Img mx="auto" w="130px" h="130px" src="/images/EH_Logo.png" />
      <Btn name="Instagram" link="https://www.instagram.com/english.house.id/?igshid=tk3fldemubfq" />
      <Btn name="Discord" link="https://discord.gg/7stg99r" />
      <Btn name="Website" link="/home" />
    </Box>
  )
}

export default LinkTree
