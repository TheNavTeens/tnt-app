import {
  Heading,
  Text,
  Box,
  Image,
  Link,
  Button,
  VStack
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

import { Container } from '../../../components/Container'
import { Banner } from '../../../components/Banner'
import { Footer } from '../../../components/Footer'

import { ExternalLinkIcon } from '@chakra-ui/icons'

const Youth = () => {
  return (
    <div>
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
              <Heading>Empowering Youth - The Word</Heading>

              <Box boxSize='md'>
                <Image src='/images/empowering_the_youth_2_the_word.png' alt='Empowering Youth - The Word' />
              </Box>

              <Text>Have you ever wondered what God has to say to you about something you’re personally concerned about?</Text>
              <Text>Would you like to learn some ways you can study God’s word, so that you can find out for yourself?</Text>
              <Text>Come join us as we learn how to use some tools that can help us understand what the Bible has to say on today’s issues!</Text>
              <Text> You’ll also get to be in the driver’s seat, and decide on what issues you are interested in looking at God’s word to learn more about!</Text>

              <Link href="https://forms.gle/okkzNs6fzoL2w45v8" isExternal>
                <Button rightIcon={<ExternalLinkIcon mx='2px' />}>Register here!</Button>
              </Link>
            </VStack>

            <Footer />
          </Container>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}


export default Youth
