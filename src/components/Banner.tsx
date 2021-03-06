import { Flex, Heading } from '@chakra-ui/react'

export const Banner = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="30vh"
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
  >
    <Heading fontSize="6xl">{title}</Heading>
  </Flex>
)

Banner.defaultProps = {
  title: 'TNT',
}
