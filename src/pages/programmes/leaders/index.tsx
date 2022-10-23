// import Link from 'next/link'
import {
  Heading,
  // Text,
  VStack
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

import { Container } from '../../../components/Container'
import { Banner } from '../../../components/Banner'
import { Footer } from '../../../components/Footer'

const WhoAreWe = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Container>

          <Banner />
          <VStack>
            <Heading>Coming soon...</Heading>
          </VStack>

          <Footer page="/programmes"/>
        </Container>
      </motion.div>
    </AnimatePresence>
  )
}

export default WhoAreWe
