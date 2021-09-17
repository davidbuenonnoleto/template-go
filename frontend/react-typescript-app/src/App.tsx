import * as React from "react"
import {
    ChakraProvider,
    theme,
    Text,
    Flex,
    Box,
    VStack,
    Divider
    //Code,
    //Grid,
} from "@chakra-ui/react"
//import { ColorModeSwitcher } from "./ColorModeSwitcher"
//import { Logo } from './Logo'
//import { Content } from './Content'
//import { SocialMediaLinks } from './SocialMediaLinks'
//import { Copyright } from './Copyright'

export const App = () => (
    <ChakraProvider theme={theme}>
        <Flex>
            <Box id="sidebar" bg="cyan.600" w={385} h={930}>
                <VStack
                    spacing={4}
                    p={8}
                    align="stretch"
                >
                    <Box h="40px" bg="cyan.600" color="white">
                        <Text as="samp" fontSize="lg">(LOGO -STEADLY)</Text>
                    </Box>
                    <Box h="40px" p={2} bg="cyan.800" color="white" rounded="md">
                        <Text as="samp" fontSize="lg">Home</Text>
                    </Box>
                    <Box h="40px" p={2} bg="cyan.600" color="white" rounded="md">
                        <Text as="samp" fontSize="lg">Traumas</Text>
                    </Box>
                    <Box h="40px" p={2} bg="cyan.600" color="white" rounded="md">
                        <Text as="samp" fontSize="lg">Maps</Text>
                    </Box>
                    <Divider borderColor="white" />
                </VStack>
                <VStack
                    spacing={4}
                    p={8}
                    align="stretch"
                >
                    <Box h="40px" p={2} bg="cyan.600" color="white" rounded="md">
                        <Text as="samp" fontSize="lg">Notifications</Text>
                    </Box>
                    <Box h="40px" p={2} bg="cyan.600" color="white" rounded="md">
                        <Text as="samp" fontSize="lg">Help Center</Text>
                    </Box>

                </VStack>
            </Box>
            <Box id="section-main-content" bg="white" w="100%" h={930}></Box>
        </Flex>
    </ChakraProvider >
)
