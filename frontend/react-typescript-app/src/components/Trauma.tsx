
import React, { useState, useEffect } from 'react'
import {
    Box,
    Heading,
    Table,
    TableCaption,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
} from '@chakra-ui/react'



export const Trauma = () => {

    const [itemTrauma, setTrauma] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then(response => {
                setTrauma(response);
            })
            .then((json) => console.log(json))
            .catch(error => console.log(error));
    }, []);

    return (
        <Box>
            <Heading as="h4" size="md">trauma</Heading>
            <Table variant="simple">
                <TableCaption>This taruma is related to...</TableCaption>
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
                    </Tr>
                    <Tr>
                        <Td>domestics violence</Td>
                    </Tr>
                    <Tr>
                        <Td>car accident</Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>);
}