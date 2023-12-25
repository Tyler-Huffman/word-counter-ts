import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
} from '@chakra-ui/react';
import { countWords, getPercentage } from '../utils/CountingFunctions';

interface KeyWordCounterProps {
  sortedKeyWords: [string, number][];
  userText: string;
}

export default function KeyWordCounter(props: KeyWordCounterProps) {
  const { sortedKeyWords, userText } = props;

  const keyWordElements = sortedKeyWords.map((keyWordPair, index) => {
    const currentWord: string = keyWordPair[0];
    const currentValue: number = keyWordPair[1];
    const totalWords: number = countWords(userText);
    const percentage: number = getPercentage(currentValue, totalWords);
    return (
      <Box key={keyWordPair.toString()}>
        <Heading size='sm'>
          {sortedKeyWords.length > index ? currentWord : ''}
        </Heading>
        <Text pt='2' fontSize='sm'>
          {sortedKeyWords.length > index
            ? `${currentValue} (${percentage}%)`
            : ''}
        </Text>
      </Box>
    );
  });

  return (
    <Card w={{ base: 'sm', lg: '35%' }} bg='rgb(49,130,206)' color='white'>
      <CardHeader>
        <Heading textDecoration='underline' size='md'>
          Keywords
        </Heading>
      </CardHeader>

      <CardBody>
        {sortedKeyWords.length > 0 ? (
          <SimpleGrid columns={2} spacing='2rem'>
            {keyWordElements}
          </SimpleGrid>
        ) : (
          <Text align='center' fontSize='3xl'>
            Begin typing to see keywords
          </Text>
        )}
      </CardBody>
    </Card>
  );
}
