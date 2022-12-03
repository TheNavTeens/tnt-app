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
              <VStack overflow="scroll">
                <iframe 
                  src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FSingapore&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&src=ODVnOWQ4YW5sM2syaWVjNDM3Nmw1czFvaWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aDBubHZndnVhZTI4bG5jZ3RpMDRsNWdqazBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YmtnNHNxZTE3YzkwZWRqZ2lsM2JpbXNjODRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=djUwYTlzZnF1djlrYWo4dDI2MDM1c205ajhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZTA1MWQxbTZyMGo0cGQwZmM2cHRuMzJ2ZXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cGFubm9zMGNnazAwMmpwNzAzdWoyZmZnZDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23D50000&color=%23EF6C00&color=%239E69AF&color=%230B8043&color=%233F51B5&color=%23D81B60" 
                  width="800"
                  height="600"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}>
                  Loading...
                  </iframe> 
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack overflow="scroll">
                <iframe
                  title="Book t-Junction"
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdkLNQI1aI6xcoCimu6-YhNxk4qpg1e7pUD5cgy8OEPmrqZfQ/viewform?embedded=true"
                  width={width}
                  height={height}
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}>
                  Loading…
                </iframe>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </div>
  )
}

export default BookTJ
