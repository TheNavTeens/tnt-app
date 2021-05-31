import {
  VStack
} from '@chakra-ui/react'

import { Container } from '../../components/Container'
import { Banner } from '../../components/Banner'
import { Footer } from '../../components/Footer'

import { useEffect, useState } from 'react'

const GetInvolved = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  useEffect(() => {
    const maxHeight = 1200
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
            title="Get involved!"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfTU4i0jb3tuZ732U38aUVwh_Z5puJEE65fiGpnmw7OJe9fjg/viewform?embedded=true"
            width={width}
            height={height}
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}>
            Loading…
          </iframe>
        </VStack>

        <Footer />
      </Container>
    </div>
  )
}

export default GetInvolved
