import {
  VStack,
} from '@chakra-ui/react'

import { Container } from '../../components/Container'
import { Banner } from '../../components/Banner'

import { useEffect, useState } from 'react'

const TJPASystem = () => {
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
        <VStack overflow="scroll">
          <iframe src="https://docs.google.com/document/d/e/2PACX-1vR31vwphgLurp3NuRxDggtqQpiR0gsJRb3FFOQKK_GD8vRje8NEGoFgaqNzp9ynTD2sFhu9qeC0mDQ2/pub?embedded=true"></iframe>
        </VStack>
      </Container>
    </div>
  )
}

export default TJPASystem
