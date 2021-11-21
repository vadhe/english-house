/* eslint-disable react/no-unescaped-entities */
import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import * as React from 'react'
import Navbar from '~/components/Navbar'

const reqruitment: React.FC = () => {
  const bg = useColorModeValue('', 'base.dark')
  return (
    <>
      <Navbar />
      <Box h="100vh" w="full" bg={bg} color="#fff" position="relative">
        <Box
          px={1}
          w={{ lg: '80%' }}
          mx={{ lg: 'auto' }}
          // textAlign="center"
          d="flex"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          right="0"
          left="0"
          top="180"
          position="fixed"
        >
          <Text fontSize="xl">
            <motion.div initial={{ x: -1000 }} transition={{ delay: 1, type: 'spring', duration: 1 }} animate={{ x: 0 }}>
              English House has people who can handle the maintenance and safety of the server, including educational programs such as IOTD,
              WOTD, Book Club, and English Class. As time goes on, we will always need people to make these programs keep running depends on
              the situation. <br /> <br /> <br /> For those who are keen to help the community to learn English nor just the fundamentals of
              running this server. From the backbone of building and keeping the server safe and comfortable to the members. We sometimes
              open staff recruitment so these programs that people love can last forever. Let's build this community to be bigger and better
              and help us reach a wider amount of people!
            </motion.div>
          </Text>
          {/* <Text mt={5} fontSize="md" fontStyle="italic">
            <motion.div initial={{ x: -1000 }} transition={{ delay: 2, type: 'spring', duration: 1 }} animate={{ x: 0 }}>
              "We will post when we are open to the opportunity here! stay tuned"
            </motion.div>
          </Text> */}
        </Box>
      </Box>
    </>
  )
}

export default reqruitment
