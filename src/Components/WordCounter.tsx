import {
  Card,
  CardHeader,
  CardBody,
  SimpleGrid,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';
import {
  countWords,
  countSentences,
  countParagraphs,
} from '../utils/CountingFunctions';

interface countElementProps {
  header: string;
  value: number;
}

function CountElement({ header, value }: countElementProps) {
  return (
    <Box>
      <Heading size='sm'>{header}:</Heading>
      <Text pt='2' fontSize='sm'>
        {value}
      </Text>
    </Box>
  );
}

export default function WordCounter({ userText }: { userText: string }) {
  return (
    <Card w='35%' bg='rgb(49,130,206)' color='white'>
      <CardHeader>
        <Heading textDecoration='underline' size='md'>
          Counts
        </Heading>
      </CardHeader>

      <CardBody>
        <SimpleGrid columns={2} spacing='2rem'>
          <CountElement header='WORDS' value={countWords(userText)} />
          <CountElement header='CHARACTERS' value={userText.length} />
          <CountElement header='SENTENCES' value={countSentences(userText)} />
          <CountElement header='PARAGRAPHS' value={countParagraphs(userText)} />
        </SimpleGrid>
      </CardBody>
    </Card>
  );
}
