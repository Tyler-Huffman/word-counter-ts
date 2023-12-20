import { Icon, HStack, Text, Link, StackDivider, Flex } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <HStack
      w='100%'
      bg='rgb(49,130,206)'
      paddingBlock='0.25rem'
      color='white'
      pos='fixed'
      left='0'
      bottom='0'
      justify='center'
      divider={<StackDivider />}
    >
      <Text>Simple & Open Source Word Counting App</Text>
      <Link href='#'>
        <Flex align='center' gap='3px'>
          <Text>View code / Report Bugs</Text> <Icon as={FaGithub} />
        </Flex>
      </Link>
      <Link href='https://www.tylerhuffman.dev/' isExternal>
        <Flex align='center' gap='3px'>
          <Text>tylerhuffman.dev</Text> <ExternalLinkIcon />
        </Flex>
      </Link>
    </HStack>
  );
}
