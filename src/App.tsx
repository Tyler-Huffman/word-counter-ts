import { useState } from 'react';
import WordCounter from './Components/WordCounter';
import KeywordCounter from './Components/KeywordCounter';
import { countWords, createWordHistogram } from './utils/CountingFunctions';
import {
  Flex,
  Box,
  Textarea,
  Heading,
  Button,
  useToast,
} from '@chakra-ui/react';
import { CopyIcon, DeleteIcon } from '@chakra-ui/icons';
import Footer from './Components/Footer';

export default function App() {
  const [userText, setUserText] = useState('');
  const [wordHistogram, setWordHistogram] = useState({});

  const toast = useToast();

  // creates a sorted array of arrays with keyword histogram pairs
  //  with just top 4 keywords/values ie [['hello', 3]...]

  const keyWordValuePairs: [string, number][] = Object.entries(wordHistogram);
  const sortedKeywords: [string, number][] = keyWordValuePairs
    .sort(([, currValue], [, compValue]) => compValue - currValue)
    .slice(0, 4);

  function handleTextInput(event: InputEvent): void {
    const text: string = (event.target as HTMLInputElement).value;
    setUserText(text);
    setWordHistogram(createWordHistogram(text));
  }

  function clearTextarea(): void {
    setUserText('');
    setWordHistogram({});
  }

  function copyWordCountToClipboard(): void {
    const wordCount: number = countWords(userText);
    navigator.clipboard.writeText(wordCount.toString());
    toast({
      title: 'Word Count Copied',
      description: `"${wordCount}" was copied to your clipboard!`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <Flex direction='column' align='center'>
      <Flex w='80%' align='center' justify='space-between' marginBlock='1.5rem'>
        <Heading color='rgb(49,130,206)'>Word Counter</Heading>
        <Box>
          <Button
            onClick={clearTextarea}
            rightIcon={<DeleteIcon />}
            colorScheme='blue'
            mr='1.5rem'
          >
            Clear Text
          </Button>
          <Button
            onClick={copyWordCountToClipboard}
            rightIcon={<CopyIcon />}
            colorScheme='blue'
          >
            Copy Word Count
          </Button>
        </Box>
      </Flex>
      <Textarea
        autoFocus
        placeholder='TYPE/PASTE HERE'
        value={userText}
        w='80%'
        h='22.5rem'
        resize='none'
        onChange={handleTextInput}
        focusBorderColor='rgb(49,130,206)'
      ></Textarea>
      <Flex justify='space-around' width='80%' marginBlock='25px'>
        <WordCounter userText={userText} />
        <KeywordCounter sortedKeywords={sortedKeywords} userText={userText} />
        <Footer />
      </Flex>
    </Flex>
  );
}
