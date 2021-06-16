import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

const testing: React.FC = () => {
  return (
    <Box bg="white" w={{ md: '80%', lg: '70%' }} mt={6} mx="auto" textAlign="center" py={6} border="1px" borderColor="black" shadow="xl">
      <Heading as="h3" fontSize={{ base: 'md', md: '2xl', lg: '3xl' }}>
        Want to improve Your English?
      </Heading>
      <Heading as="h4" fontSize={{ base: 'sm', md: 'xl', lg: '2xl' }}>
        Join With Us on Discord{' '}
      </Heading>
      <Box d="flex" justifyContent="center" mt={6}>
        <a target="_blank" rel="noopener noreferrer" href=" https://discord.gg/7stg99r">
          <img
            src="https://img.shields.io/badge/english%20house%20-%237289DA.svg?&style=for-the-badge&logo=discord&logoColor=white"
            alt="logo"
          />
        </a>
      </Box>
    </Box>
  )
}

export default testing
