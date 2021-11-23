
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

export const Trauma = (props) => {

    const [itemTrauma, setTrauma] = useState([]);

    useEffect(() => {
        setTrauma(props.match.params.id);
    }, []);

    return (
        <Box>
            <Heading as="h4" size="md">Trauma</Heading>
            <Table variant="simple">
                <TableCaption>This trauma is related to...</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Description</Th>

                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>{itemTrauma}</Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>);
}