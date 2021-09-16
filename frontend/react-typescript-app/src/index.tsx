import * as React from "react"
import ReactDOM from "react-dom"
import {
  ChakraProvider,
  Box,
  Stack,
  theme
} from "@chakra-ui/react"

import { Logo } from './Logo'
import { Content } from './Content'
import { SocialMediaLinks } from './SocialMediaLinks'
import { Copyright } from './Copyright'

class App extends React.Component {
  render() {
    return <ChakraProvider theme={theme}>
      <Logo mx="auto" h="6" mb={{ base: '10', md: '20' }} />
      <Box as="section" maxW="5xl" mx="auto" py="12" px={{ base: '6', md: '8' }}>
        <Content />
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
