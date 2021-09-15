import * as React from "react"
import ReactDOM from "react-dom"
import {
  ChakraProvider,
  Box,
  Stack,
  theme,
  ColorModeScript
} from "@chakra-ui/react"

import { Copyright } from './Copyright'
import { Logo } from './Logo'
import { SocialMediaLinks } from './SocialMediaLinks'

class App extends React.Component {
  render() {
    return <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <React.StrictMode><ColorModeScript /></React.StrictMode>
      </Box>
      <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
        <Stack>
          <Stack direction="row" spacing="4" align="center" justify="space-between">
            <Logo />
            <SocialMediaLinks />
          </Stack>
          <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
        </Stack>
      </Box>
    </ChakraProvider>
  }
}
ReactDOM.render(<App />, document.getElementById("root"),)
