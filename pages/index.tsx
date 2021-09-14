import * as React from 'react'
import { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import Navbar from '~/components/Navbar'
import Jumbotron from '~/components/Jumbotron'
import AboutUs from '~/components/AboutUs'
import SectionCard from '~/components/SectionCard'
import Footer from '~/components/Footer'

const englishEducation = [
  {
    id: 1,
    heading: 'English Class',
    description:
      ' Lorem ipsum dolor site amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore. Lorem ipsum dolor siteamet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore.. ',
    img: '/images/english-class.png'
  },
  {
    id: 2,
    heading: 'Lecture Hall',
    description:
      ' Lorem ipsum dolor site amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore. Lorem ipsum dolor site   amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore.. ',
    img: '/images/english-class.png'
  },
  {
    id: 3,
    heading: 'Proof Reading',
    description:
      ' Lorem ipsum dolor site amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore. Lorem ipsum dolor site   amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore.. ',
    img: '/images/english-class.png'
  }
]
const englishLearning = [
  {
    id: 1,
    heading: 'Book Club',
    description:
      ' Lorem ipsum dolor site amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore. Lorem ipsum dolor site   amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore.. ',
    img: '/images/english-class.png'
  },
  {
    id: 2,
    heading: 'IOTD',
    description:
      ' Lorem ipsum dolor site amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore. Lorem ipsum dolor site   amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore.. ',
    img: '/images/english-class.png'
  },
  {
    id: 3,
    heading: 'WOTD',
    description:
      ' Lorem ipsum dolor site amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore. Lorem ipsum dolor site   amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore.. ',
    img: '/images/english-class.png'
  }
]
const eventCompetitions = [
  {
    id: 1,
    heading: 'Debates',
    description:
      ' Lorem ipsum dolor site amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore. Lorem ipsum dolor site   amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore.. ',
    img: '/images/english-class.png'
  },
  {
    id: 2,
    heading: 'Spelling bee',
    description:
      ' Lorem ipsum dolor site amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore. Lorem ipsum dolor site   amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore.. ',
    img: '/images/book.png'
  },
  {
    id: 3,
    heading: 'Singing',
    description:
      ' Lorem ipsum dolor site amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore. Lorem ipsum dolor site   amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore.. ',
    img: '/images/daily.png'
  },
  {
    id: 4,
    heading: 'Art competitions',
    description:
      ' Lorem ipsum dolor site amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore. Lorem ipsum dolor site   amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore.. ',
    img: '/images/potw.png'
  },
  {
    id: 5,
    heading: 'Poetry',
    description:
      ' Lorem ipsum dolor site amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore. Lorem ipsum dolor site   amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore.. ',
    img: '/images/potw.png'
  },
  {
    id: 6,
    heading: 'Artfest',
    description:
      ' Lorem ipsum dolor site amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore. Lorem ipsum dolor site   amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore.. ',
    img: '/images/potw.png'
  },
  {
    id: 7,
    heading: 'Storytelling',
    description:
      ' Lorem ipsum dolor site amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore. Lorem ipsum dolor site   amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore.. ',
    img: '/images/potw.png'
  },
  {
    id: 8,
    heading: 'Seasonal Events',
    description:
      ' Lorem ipsum dolor site amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore. Lorem ipsum dolor site   amet techno adipisicing elit sed dreamit eiusmod tempor incididunt labore dolore.. ',
    img: '/images/potw.png'
  }
]
const Home: NextPage = () => (
  <Box>
    <Navbar />
    <Jumbotron />
    <AboutUs />
    <Box pos="relative" bg="#fff">
      <SectionCard bg="base.blue" bgCard="base.purple" id="english-education" heading="English Education" cards={englishEducation} />
      <SectionCard bg="base.purple" bgCard="base.blue" id="english-learning" heading="English Learning" cards={englishLearning} />
      <SectionCard bg="base.blue" bgCard="base.purple" id="event" heading="Events and Competitions" cards={eventCompetitions} />
    </Box>
    <Footer />
  </Box>
)

export default Home
