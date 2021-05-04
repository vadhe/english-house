// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react'
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    base: {
      blue: {
        100: '#065EEA',
        300: '#121D50'
      },
      white: '#F5F7FA',
      black: '#111111'
    }
  }
})

export default theme
