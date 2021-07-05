import * as React from 'react'
import { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import Navbar from '~/components/Navbar'
import Jumbotron from '~/components/Jumbotron'
import AboutUs from '~/components/AboutUs'
import EnglishLearning from '~/components/EnglishLearning'

const Home: NextPage = () => (
  <Box>
    <Navbar />
    <Jumbotron />
    <AboutUs />
    <EnglishLearning />
  </Box>
)

export default Home
