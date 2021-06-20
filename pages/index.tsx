import * as React from 'react'
import { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import LinkTree from '~/components/LinkTree'

const IndexPage: NextPage = () => (
  <Box>
    <LinkTree />
  </Box>
)

export default IndexPage
