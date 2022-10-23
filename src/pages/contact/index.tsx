import Link from 'next/link'
import {
  Button,
  VStack
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

import { Container } from '../../components/Container'
import { Banner } from '../../components/Banner'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'

const GetInvolved = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Container>

          <Banner />
          <Main>
            <VStack>
              <Link href="/contact/youth"><Button>I want to learn</Button></Link>
              <Link href="/contact/volunteer"><Button>I want to volunteer</Button></Link>
              <Link href="/contact/partner"><Button>I want to partner</Button></Link>
            </VStack>
          </Main>

          <Footer page="/contact"/>
        </Container>
      </motion.div>
    </AnimatePresence>
  )
}

export default GetInvolved
