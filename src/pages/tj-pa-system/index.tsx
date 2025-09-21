import {
  VStack,
} from '@chakra-ui/react'

import { Container } from '../../components/Container'
import { Banner } from '../../components/Banner'

const TJPASystem = () => {
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
