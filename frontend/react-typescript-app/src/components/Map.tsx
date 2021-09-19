
import * as React from 'react'
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'

export const Map = () => (
    <Box>
        <Tabs isFitted size="md" variant="enclosed">
            <TabList>
                <Tab>Trauma</Tab>
                <Tab>Trigger</Tab>
                <Tab>Action</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <p>Sexual abuse</p>
                </TabPanel>
                <TabPanel>
                    <p>Stress</p>
                </TabPanel>
                <TabPanel>
                    <p>Living the moment</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Box >
)