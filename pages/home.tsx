import * as React from 'react'
import { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import Navbar from '~/components/Navbar'
import Jumbotron from '~/components/Jumbotron'
import AboutUs from '~/components/AboutUs'
import SectionCard from '~/components/SectionCard'
import Footer from '~/components/Footer'

const englishLearning = [
  {
    id: 1,
    heading: 'english class',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    img: '/images/english-class.png'
  },
  {
    id: 2,
    heading: 'book club',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    img: '/images/book.png'
  },
  {
    id: 3,
    heading: 'daily wotd and iotd',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    img: '/images/daily.png'
  },
  {
    id: 4,
    heading: 'potw',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    img: '/images/potw.png'
  }
]

const eventCompetitions = [
  {
    id: 1,
    heading: 'Debates',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    img: '/images/english-class.png'
  },
  {
    id: 2,
    heading: 'Spelling bee',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    img: '/images/book.png'
  },
  {
    id: 3,
    heading: 'Singing',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    img: '/images/daily.png'
  },
  {
    id: 4,
    heading: 'Art competitions',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    img: '/images/potw.png'
  }
]
const Home: NextPage = () => (
  <Box>
    <Navbar />
    <Jumbotron />
    <AboutUs />
    <Box pos="relative" bg="#fff">
      <SectionCard id="english-learning" heading="English Learning" cards={englishLearning} />
      <SectionCard id="event" heading="Events and Competitions" cards={eventCompetitions} />
    </Box>
    <Footer />
  </Box>
)

export default Home
