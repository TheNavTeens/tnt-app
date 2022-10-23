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
      <Container>
        <Hero />
        <Main>
          <VStack>
            <Heading size="lg">To know Christ</Heading>
            <Heading size="lg">To make Him known</Heading>
            <Heading size="lg">To help others do the same</Heading>
          </VStack>
        </Main>

        <Footer page="/"/>
      </Container>
    </motion.div>
  </AnimatePresence>
)

export default Index
