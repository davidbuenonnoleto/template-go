import * as React from "react"
import ReactDOM from "react-dom"
import {
  ChakraProvider,
  Box,
  theme,
  ColorModeScript
} from "@chakra-ui/react"


ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
  </React.StrictMode>,
  document.getElementById("root"),
)

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">

    </Box>
  </ChakraProvider>
)
