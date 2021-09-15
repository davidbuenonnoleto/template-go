import * as React from "react"
import ReactDOM from "react-dom"
import {
  ChakraProvider,
  Box,
  Stack,
  theme,
  Heading,
  Button,
  Text,
  SimpleGrid,
  ColorModeScript
} from "@chakra-ui/react"

import { FcDocument, FcMultipleDevices, FcPrivacy, FcReadingEbook } from 'react-icons/fc'

import { Copyright } from './Copyright'
import { Logo } from './Logo'
import { SocialMediaLinks } from './SocialMediaLinks'
import { Feature } from './Feature'

class App extends React.Component {
  render() {
    return <ChakraProvider theme={theme}>
      <Box maxW="md" mx="auto">
        <React.StrictMode><ColorModeScript /></React.StrictMode>
        <Logo mx="auto" h="6" mb={{ base: '10', md: '20' }} />
      </Box>
      <Box as="section">
        <Box
          maxW="2xl"
          mx="auto"
          px={{ base: '6', lg: '8' }}
          py={{ base: '16', sm: '20' }}
          textAlign="center"
        >
          <Heading as="h2" size="3xl" fontWeight="extrabold" letterSpacing="tight">
            Ready to tell your true
          </Heading>
          <Text mt="4" fontSize="lg">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
            sagittis vel nulla nec.
          </Text>
          <Button mt="8" as="a" href="#" size="lg" colorScheme="blue" fontWeight="bold">
            Start Free Trial
          </Button>
        </Box>
      </Box>
      <Box as="section" maxW="5xl" mx="auto" py="12" px={{ base: '6', md: '8' }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacingX="10" spacingY={{ base: '8', md: '14' }}>
          <Feature title="Security is our main feature" icon={<FcPrivacy />}>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus.
          </Feature>
          <Feature title="Always up to date" icon={<FcReadingEbook />}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore.
          </Feature>
          <Feature title="Information that you can trust" icon={<FcDocument />}>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus.
          </Feature>
          <Feature title="Access everywhere" icon={<FcMultipleDevices />}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore.
          </Feature>
        </SimpleGrid>
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
