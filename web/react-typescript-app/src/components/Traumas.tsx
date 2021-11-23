
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
import { Link } from 'react-router-dom';

export const Traumas = () => {

    const [traumaList, setTrauma] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setTrauma(data);
            })
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
                    {traumaList.map((t, index) => (
                        <Tr key={index}>
                            <Td><Link to={`/traumas/${t.userId}`}>{t.title}</Link></Td>
                        </Tr>
                    )
                    )
                    }
                </Tbody>
            </Table>
        </Box>
    );
}