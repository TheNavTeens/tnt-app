import {
  Heading,
  Text,
  Button,
  HStack,
} from '@chakra-ui/react'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Heading>
        To know Christ, to make Him known, and to help others do the same
      </Heading>
    </Main>

    <Footer/>
  </Container>
)

export default Index
