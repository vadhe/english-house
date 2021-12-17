import { MoonIcon } from '@chakra-ui/icons'
import { Box, Img, Link, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import * as React from 'react'

const links = [
  {
    link: '/',
    name: 'home'
  },
  {
    link: '/#about',
    name: 'about'
  },
  {
    link: '/#english-education',
    name: 'english education'
  },
  {
    link: '/#english-learning',
    name: 'english learning'
  },

  {
    link: '/#event',
    name: 'Events and Competitions'
  },
  {
    link: '/reqruitment',
    name: 'Recruitment Staff'
  }
]
const Navbar: React.FC = () => {
  const { toggleColorMode } = useColorMode()

  const [showHidden, setShowHidden] = React.useState<string>('none')
  const handleShowHidden = () => {
    if (showHidden === 'none') {
      setShowHidden('block')
    } else {
      setShowHidden('none')
    }
  }
  const [offset, setOffset] = React.useState(false)

  React.useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset >= 530) {
        setOffset(true)
      } else {
        setOffset(false)
      }
    }
  }, [offset])
  const bg = useColorModeValue('base.transparn', 'base.dark')
  const bgMobile = useColorModeValue('base.purple', 'base.dark')
  return (
    <Box
      color="#fff"
      id="home"
      d={{ base: 'flex', lg: 'flex' }}
      justifyContent="space-between"
      alignItems="center"
      h="0.5rem"
      justifyItems="center"
      textTransform="uppercase"
      py="32px"
      px={{ base: '1rem', lg: '48px' }}
      fontSize="sm"
      position="sticky"
      w="100%"
      top="0"
      boxShadow={offset ? 'rgb(0 0 0 / 5%) 0px 15px 25px' : ''}
      bg={offset ? 'rgba(255,255,255,0.5)' : bg}
      zIndex="11"
      style={{ backdropFilter: offset ? 'saturate(200%) blur(15px)' : '' }}
    >
      <Text fontWeight="extrabold">Welcome 👋</Text>
      <Img d={{ lg: 'none' }} onClick={handleShowHidden} w="40px" src="/images/bar.png" />
      <Box
        d={{ base: showHidden, lg: 'flex' }}
        top="0"
        left="0"
        px={6}
        bg={{ base: bgMobile, lg: '#00000000' }}
        position={{ base: 'absolute', lg: 'relative' }}
        w={{ base: '80%', lg: 'auto' }}
        h={{ base: '100vh', lg: 'auto' }}
      >
        {links.map(item => (
          <NextLink passHref href={item.link} key={item.name}>
            <Link onClick={handleShowHidden} my={{ base: 4, lg: 0 }} mx={{ lg: 4 }}>
              {item.name}
            </Link>
          </NextLink>
        ))}
        <MoonIcon mt={1} onClick={toggleColorMode} />
      </Box>
    </Box>
  )
}

export default Navbar
