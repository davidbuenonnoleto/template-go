
import * as React from 'react'
import { Box, Heading, Table, TableCaption, Thead, Tr, Th, Td, Tbody, Tfoot } from '@chakra-ui/react'

export const Traumas = () => (
    <Box>
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
    </Box>
)