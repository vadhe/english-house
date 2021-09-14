// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react'
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: ' Roboto Slab, serif',
        color: '#09101b'
      }
    }
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  colors: {
    base: {
      blue: '#3C5186',
      purple: '#9B72AA',
      semiPurple: '#C6B4CE',
      white: '#FFF5DE',
      transparan: '#00000000',
      dark: '#1a202c'
    }
  }
})

export default theme
