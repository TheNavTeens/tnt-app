import { Flex,  HStack, Button } from '@chakra-ui/react'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import Link from 'next/link'

export const Footer = (props: any) => {
  return (
    <Flex as="footer" py="8rem" {...props}>
      <HStack>
        <Link href="/">
          <Button isDisabled={props.page === "/"}>Home</Button>
        </Link>
        <Link href="/about">
          <Button isDisabled={props.page === "/about"}>Who are we?</Button>
        </Link>
        <Link href="/contact">
          <Button isDisabled={props.page === "/contact"}>Get involved!</Button>
        </Link>
      </HStack>

      <DarkModeSwitch />
    </Flex>
  )
}
