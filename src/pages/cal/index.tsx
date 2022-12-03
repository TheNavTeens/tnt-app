import {
  VStack
} from '@chakra-ui/react'

import { Container } from '../../components/Container'
import { Banner } from '../../components/Banner'

// import { useEffect, useState } from 'react'

const TNTCalendar = () => {
  // const [width, setWidth] = useState(0)
  // const [height, setHeight] = useState(0)
  // useEffect(() => {
  //   const maxHeight = 2200
  //   const maxWidth = 640
  //   const refreshDimensions = () => {
  //     const width = Math.min(maxWidth, window.innerWidth - 40)
  //     setWidth(width)
  //     setHeight(maxHeight * 0.6 * (maxWidth / width))
  //   }

  //   window.addEventListener("resize", () => {
  //     refreshDimensions()
  //   })
  //   refreshDimensions()
  // }, [])

  return (
    <div>
      <Container height="100vh">
        <Banner />
        <VStack overflow="scroll">
        <iframe 
          src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FSingapore&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&src=bDlrZGNkMWZjY2VqcmJ0dDhjbXMxa3BrazRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB" 
          width="800"
          height="600"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}>
          Loading...</iframe>
        </VStack>
      </Container>
    </div>
  )
}

export default TNTCalendar
