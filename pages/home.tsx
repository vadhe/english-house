import * as React from 'react'
import { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import Navbar from '~/components/Navbar'
import Jumbotron from '~/components/Jumbotron'

const Home: NextPage = () => (
  <Box>
    <Navbar />
    <Jumbotron />
  </Box>
)

export default Home
