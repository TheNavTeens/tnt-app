import { Flex, FlexProps, Button } from '@chakra-ui/react'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import Link from 'next/link'

export const Footer = (props: FlexProps) => (
  <Flex as="footer" py="8rem">
    <Link href="/"><Button>Home</Button></Link>
    {/* <Link href="/resources"><Button>Resources</Button></Link> */}
    <Link href="/contact"><Button>Get involved!</Button></Link>
    <DarkModeSwitch />
  </Flex>
)
