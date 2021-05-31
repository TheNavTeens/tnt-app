import {
  Heading, VStack,
} from '@chakra-ui/react'

import { motion, AnimatePresence } from 'framer-motion'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'

const Index = () => (
  <AnimatePresence>
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <Container height="100vh">
        <Hero />
        <Main>
          <VStack>
            <Heading>To know Christ</Heading>
            <Heading>to make Him known</Heading>
            <Heading>and to help others do the same</Heading>
          </VStack>
        </Main>

        <Footer page="/"/>
      </Container>
    </motion.div>
  </AnimatePresence>
)

export default Index
