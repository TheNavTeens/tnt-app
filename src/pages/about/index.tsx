import Link from 'next/link'
import {
  Heading,
  Text,
  VStack
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

import { Container } from '../../components/Container'
import { Banner } from '../../components/Banner'
import { Footer } from '../../components/Footer'

const WhoAreWe = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Container height="100vh">

          <Banner />
          <VStack>
            <Heading>Mission</Heading>
            <Text>TNT stands for The NavTeens, and we are a Christian para-church organization with a calling to raise disciples and disciple-makers among youth</Text>

            <Heading>Ministry</Heading>
            <Text>TNT specializes in discipleship, training, and training for discipleship!</Text>
            <Text>Our staff and volunteers are regularly on the ground with teenagers in and out of schools, teaching the many and prayerfully discipling a few</Text>
            <Text>We also offer programmes for youth who want to grow in their discipleship journey, and youth leaders who want to grow in their disciple-making skills</Text>
            <Text>If you are interested to learn more, <Text as="u"><Link href="/contact">give us a ping</Link></Text> and we will get in contact with you!</Text>
          </VStack>

          <Footer page="/about"/>
        </Container>
      </motion.div>
    </AnimatePresence>
  )
}

export default WhoAreWe
