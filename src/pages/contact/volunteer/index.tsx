import { useEffect, useState } from 'react'

import {
  VStack
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

import { Container } from '../../../components/Container'
import { Banner } from '../../../components/Banner'
import { Footer } from '../../../components/Footer'

const Volunteer = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  useEffect(() => {
    const maxHeight = 850
    const maxWidth = 640
    const refreshDimensions = () => {
      const width = Math.min(maxWidth, window.innerWidth - 40)
      setWidth(width)
      setHeight(maxHeight * 0.6 * (maxWidth / width))
    }

    window.addEventListener("resize", () => {
      refreshDimensions()
    })
    refreshDimensions()
  }, [])

  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Container height="100vh">

            <Banner />
            <VStack overflow="scroll">
              <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSc8lynze71khnbeT9YcPvOtccfOAQizKHcolDZB5LAfVdvfhw/viewform?embedded=true"
              width={width}
              height={height}
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              >Loading…</iframe>
            </VStack>

            <Footer />
          </Container>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Volunteer
