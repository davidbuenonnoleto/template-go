import * as React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

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
} from "@chakra-ui/react"

import { VscBell, VscReport } from 'react-icons/vsc'
//import { ColorModeSwitcher } from "./ColorModeSwitcher"
//import { Logo } from './Logo'
//import { Content } from './Content'
//import { SocialMediaLinks } from './SocialMediaLinks'
//import { Copyright } from './Copyright'
import { Account } from './components/Account'
import { Trauma } from './components/Trauma'
import { Traumas } from './components/Traumas'
import { Map } from './components/Map'

export const App = () => (
    <ChakraProvider theme={theme}>
        <Router>
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

                        <Link to="/account">
                            <Button
                                colorScheme="blue"
                                bg="blue.600"
                                _hover={{ bg: "blue.400" }}
                                size="md"
                                w="full"
                                py={{ md: '5' }}>Account</Button></Link>
                        <Link to="/traumas">
                            <Button
                                colorScheme="blue"
                                bg="blue.600"
                                _hover={{ bg: "blue.400" }}
                                size="md"
                                w="full"
                                py={{ md: '5' }}>Traumas</Button></Link>
                        <Link to="/map">
                            <Button
                                colorScheme="blue"
                                bg="blue.600"
                                _hover={{ bg: "blue.400" }}
                                size="md"
                                w="full"
                                py={{ md: '4' }}>Map</Button></Link>
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
                            <Avatar src="/me.jpg" />
                            <Box ml="3">
                                <Text fontWeight="bold" color="white">
                                    David Noleto
                                    <Badge ml="1" colorScheme="blue">
                                        Active
                                    </Badge>
                                </Text>
                                <Text fontSize="sm" color="white">Software Engineer</Text>
                            </Box>
                        </Flex>

                    </VStack>
                </Box>
                <Box id="section-main-content" p={4} bg="white" w="100%" h={930}>
                    <Switch>
                        <Route path="/account"><Account /></Route>
                        <Route path="/traumas/:id" component={Trauma} />
                        <Route path="/traumas"><Traumas /></Route>
                        <Route path="/map"><Map /></Route>
                    </Switch>
                </Box>
            </Flex >
        </Router>
    </ChakraProvider >
)