import {
  Heading,
  Text,
} from '@chakra-ui/react'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
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

    <DarkModeSwitch />
    <Footer>
      <Text></Text>
    </Footer>
  </Container>
)

export default Index
