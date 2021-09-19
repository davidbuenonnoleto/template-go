
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
    Tbody
} from '@chakra-ui/react'

export const Traumas = () => {

    const [oneTrauma, setTrauma] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setTrauma(data);
            })
            /*.then((response) => response.json())
                .then((json) => console.log(json))
                .then(response => {
                    setTrauma([]);
                })*/
            .catch(error => console.log(error));
    }, []);

    return (
        <Box>
            <Heading as="h4" size="md">Traumas</Heading>
            <Table variant="simple">
                <TableCaption>List of events that can trigger a trauma and its results</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Description</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {oneTrauma.map((t, index) => (
                        <Tr key={index}>
                            <Td> {t.title}</Td>
                        </Tr>
                    )
                    )
                    }
                </Tbody>
            </Table>
        </Box>
    );
}