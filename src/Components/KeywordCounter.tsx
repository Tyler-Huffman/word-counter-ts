import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
} from '@chakra-ui/react';
import { countWords, calculatePercentage } from '../utils/CountingFunctions';

export default function KeywordCounter({ sortedKeywords, userText }) {
  const keywordElements = sortedKeywords.map((keyword, index) => {
    return (
      <Box key={keyword}>
        <Heading size='sm'>
          {sortedKeywords.length > index ? sortedKeywords[index][0] : ''}
        </Heading>
        <Text pt='2' fontSize='sm'>
          {sortedKeywords.length > index
            ? `${sortedKeywords[index][1]} (${calculatePercentage(
                sortedKeywords[index][1],
                countWords(userText)
              )}%)`
            : ''}
        </Text>
      </Box>
    );
  });

  return (
    <Card w='35%' bg='rgb(49,130,206)' color='white'>
      <CardHeader>
        <Heading textDecoration='underline' size='md'>
          Keywords
        </Heading>
      </CardHeader>

      <CardBody>
        {sortedKeywords.length > 0 ? (
          <SimpleGrid columns={2} spacing='2rem'>
            {keywordElements}
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
