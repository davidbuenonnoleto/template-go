import * as React from "react"
import {
    ChakraProvider,
    theme,
    Text,
    Avatar,
    Badge,
    Button,
    Flex,
    Box,
    VStack,
    Divider
    //Code,
    //Grid,
} from "@chakra-ui/react"

import { VscBell, VscReport } from 'react-icons/vsc'
//import { ColorModeSwitcher } from "./ColorModeSwitcher"
//import { Logo } from './Logo'
//import { Content } from './Content'
//import { SocialMediaLinks } from './SocialMediaLinks'
//import { Copyright } from './Copyright'

export const App = () => (
    <ChakraProvider theme={theme}>
        <Flex>
            <Box id="sidebar" bg="blue.600" w={385} h={930}>
                <VStack
                    spacing={2}
                    p={4}
                    align="stretch"
                >
                    <Box h="40px" bg="blue.600" color="white">
                        <Text as="samp" fontSize="lg">(LOGO -STEADLY)</Text>
                    </Box>
                    <Button
                        colorScheme="blue"
                        bg="blue.600"
                        _hover={{ bg: "blue.400" }}
                        size="md"
                        w="full"
                        py={{ md: '5' }}>Home</Button>
                    <Button
                        colorScheme="blue"
                        bg="blue.600"
                        _hover={{ bg: "blue.400" }}
                        size="md"
                        w="full"
                        py={{ md: '5' }}>Traumas</Button>
                    <Button
                        colorScheme="blue"
                        bg="blue.600"
                        _hover={{ bg: "blue.400" }}
                        size="md"
                        w="full"
                        py={{ md: '4' }}>Maps</Button>
                    <Divider borderColor="white" />
                </VStack>
                <VStack
                    spacing={2}
                    p={4}
                    align="stretch"
                >
                    <Button
                        leftIcon={<VscBell />}
                        bg="blue.600"
                        _hover={{ bg: "blue.400" }}
                        colorScheme="blue"
                        size="md"
                        w="full"
                        py={{ md: '5' }}>Notifications</Button>

                    <Button
                        leftIcon={<VscReport />}
                        bg="blue.600"
                        _hover={{ bg: "blue.400" }}
                        colorScheme="blue"
                        size="md"
                        w="full"
                        py={{ md: '5' }}>Help Center</Button>

                    <Flex>
                        <Avatar src="https://bit.ly/sage-adebayo" />
                        <Box ml="3">
                            <Text fontWeight="bold">
                                David Noleto
                                <Badge ml="1" colorScheme="green">
                                    Active
                                </Badge>
                            </Text>
                            <Text fontSize="sm" color="white">SRE Engineer</Text>
                        </Box>
                    </Flex>

                </VStack>
            </Box>
            <Box id="section-main-content" bg="white" w="100%" h={930}></Box>
        </Flex >
    </ChakraProvider >
)
