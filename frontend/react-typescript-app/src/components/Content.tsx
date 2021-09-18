import { Text, TextProps } from '@chakra-ui/layout'
import * as React from 'react'

export const Content = (props: TextProps) => (
    <Text fontSize="md" {...props}>
        Content here...
    </Text>
)