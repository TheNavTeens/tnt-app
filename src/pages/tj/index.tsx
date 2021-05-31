import {
  VStack
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
      setHeight(maxHeight / (width / maxWidth))
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
        <VStack>
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
      </Container>
    </div>
  )
}

export default BookTJ
