// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react'
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'base.yellow'
      }
    }
  },
  colors: {
    base: {
      black: '#212121',
      white: {
        900: '#d6d3d3'
      },
      orange: '#f95a2c',
      yellow: '#ffbd12',
      purple: {
        200: '#71336a',
        300: '#fecaff'
      }
    }
  }
})

export default theme
