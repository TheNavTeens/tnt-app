import {
  Heading,
  Text,
  Box,
  Image,
  Link,
  VStack,
  Button
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

import { Container } from '../../../components/Container'
import { Banner } from '../../../components/Banner'
import { Footer } from '../../../components/Footer'

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
          <Container height="100%">

            <Banner />
            <VStack>
              <Heading>Empowering Youth - The Word</Heading>

              <Box boxSize={['xs', 'md', 'lg']}>
                <Image src="/images/empowering_the_youth_2_the_word.jpg" alt="Empowering Youth - The Word" />
              </Box>

              <Text>Did you know that God has much to say to you through the Bible? But how will you know if you don’t study it for yourselves?</Text>
              <Text>Come join us and learn practical ways you can study the God’s word for yourself!</Text>
              <Text>What are you waiting for??</Text>
              <Link href="https://forms.gle/okkzNs6fzoL2w45v8" isExternal>
                <Button>Sign up now!</Button>
              </Link>

              <Text>Registration closes on 5 November</Text>

              <Text>Program Details</Text>
              <Text>Date: 18 and 19 November 2022</Text>
              <Text>Time: 9-5pm (Lunch will be provided)</Text>
              <Text>Venue: t-Junction (392 Race Course Road, S218648)</Text>

            </VStack>

            <Footer />
          </Container>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}


export default Youth
