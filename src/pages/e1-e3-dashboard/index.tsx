import {
  VStack,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel
} from '@chakra-ui/react'

import { Container } from '../../components/Container'
import { Banner } from '../../components/Banner'

import { useEffect, useState } from 'react'

const BookTJ = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  useEffect(() => {
    const maxHeight = 2200
    const maxWidth = 640
    const refreshDimensions = () => {
      const width = Math.min(maxWidth, window.innerWidth - 40)
      setWidth(width)
      setHeight(maxHeight * 0.6 * (maxWidth / width))
    }

    window.addEventListener("resize", () => {
      refreshDimensions()
    })
    refreshDimensions()
  }, [])

  return (
    <div>
      <Container height="100vh">
        <Banner /> 
        <Tabs>
          <TabList>
            <Tab>Calendar</Tab>
            <Tab>Booking Form</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <h2>E1</h2>
              <VStack overflow="scroll">
                <iframe width="800" height="500" seamless frameborder="0" scrolling="yes" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSLOWTa8Qo8WWSZ6PZLOTaKOVGia-vdPmqOa3dY2OUkSNvV-G1yN_x7hruLqw0ytj4giXFJAHUtjA5Z/pubchart?oid=803854579&amp;format=interactive"></iframe>
              </VStack>
              <VStack overflow="scroll">
                <iframe width="800" height="500" seamless frameborder="0" scrolling="yes" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSLOWTa8Qo8WWSZ6PZLOTaKOVGia-vdPmqOa3dY2OUkSNvV-G1yN_x7hruLqw0ytj4giXFJAHUtjA5Z/pubchart?oid=37917538&amp;format=interactive"></iframe>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </div>
  )
}

export default BookTJ
