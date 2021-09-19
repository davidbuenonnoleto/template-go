
import * as React from 'react'
import {
    Box,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Table,
    TableCaption,
    Thead,
    Tr,
    Th,
    Td,
    Tbody
} from '@chakra-ui/react'

export const Account = () => (
    <Box>
        <Tabs isFitted size="md" isLazy variant="enclosed">
            <TabList>
                <Tab>Profile</Tab>
                <Tab>Payments</Tab>
                <Tab>Preferences</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <Table variant="simple" size="md">
                        <TableCaption></TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Password</Th>
                                <Th>Subscription plan</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>David</Td>
                                <Td>david@hotmail.com</Td>
                                <Td>*******</Td>
                                <Td>Free</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TabPanel>
                <TabPanel>
                    <Table variant="simple" size="md">
                        <TableCaption></TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Date</Th>
                                <Th>From</Th>
                                <Th>Total</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>04/24/2021</Td>
                                <Td>0500</Td>
                                <Td>-$242.98</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TabPanel>
                <TabPanel>
                    <Table variant="simple" size="md">
                        <TableCaption></TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Password</Th>
                                <Th>Subscription plan</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>David</Td>
                                <Td>david@hotmail.com</Td>
                                <Td>*******</Td>
                                <Td>Free</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Box >
)