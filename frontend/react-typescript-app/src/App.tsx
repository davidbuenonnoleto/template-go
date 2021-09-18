import * as React from "react"
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
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
    Divider,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Heading
} from "@chakra-ui/react"

import { VscBell, VscReport } from 'react-icons/vsc'
//import { ColorModeSwitcher } from "./ColorModeSwitcher"
//import { Logo } from './Logo'
//import { Content } from './Content'
//import { SocialMediaLinks } from './SocialMediaLinks'
//import { Copyright } from './Copyright'
import { Maps } from './components/Map'

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

                        <Link to="/">
                            <Button
                                colorScheme="blue"
                                bg="blue.600"
                                _hover={{ bg: "blue.400" }}
                                size="md"
                                w="full"
                                py={{ md: '5' }}>Home</Button></Link>
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
                                <Text fontSize="sm" color="white">SRE Engineer</Text>
                            </Box>
                        </Flex>

                    </VStack>
                </Box>
                <Box id="section-main-content" bg="white" w="100%" h={930}>

                    <Switch>
                        <Route path="/map">
                            <Map />
                        </Route>
                        <Route path="/traumas">
                            <Traumas />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Box>
            </Flex >
        </Router>
    </ChakraProvider >
)

function Home() {
    return <h2>Home</h2>;
}

function Traumas() {
    return <Box>
        <Heading as="h4" size="md">Traumas</Heading>
        <Table variant="simple">
            <TableCaption>List of events that can trigger a trauma and its results</TableCaption>
            <Thead>
                <Tr>
                    <Th>Kind</Th>
                    <Th>Trigger</Th>
                    <Th>Result</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>sexual abuse</Td>
                    <Td>tension/stress</Td>
                    <Td>pornography addiction</Td>
                </Tr>
                <Tr>
                    <Td>domestics violence</Td>
                    <Td>arguing</Td>
                    <Td>violent communication</Td>
                </Tr>
                <Tr>
                    <Td>car accident</Td>
                    <Td>radical sports</Td>
                    <Td>fear of anything</Td>
                </Tr>
            </Tbody>
            <Tfoot>
                <Tr>
                    <Th>Accept</Th>
                    <Th>Treat</Th>
                    <Th>It will Change</Th>
                </Tr>
            </Tfoot>
        </Table>
    </Box>;
}

function Map() {
    return <Maps />;
}
