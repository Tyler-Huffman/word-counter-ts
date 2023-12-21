export function countWords(input: string): number {
  let words: string[] = input
    .split(/[^a-zA-Z]/g)
    .filter((word: string) => word !== '')
    .map((word: string) => word.trim());
  return words.length;
}

export function countSentences(input: string): number {
  const sentences = input.split('.').filter((word) => word !== '');
  return sentences.length === 0 ? 0 : sentences.length - 1;
}

export function countParagraphs(input: string): number {
  const paragraphs = input.split('\n').filter((word) => word !== '');
  return paragraphs.length;
}

type WordCount = { [key: string]: number };

export function createWordHistogram(input: string): WordCount {
  const inputCleaned: string = input.replace(/[^a-zA-Z\s]/g, '');
  const words: string[] = inputCleaned
    .split(/[^a-zA-Z]/g)
    .filter((word) => word !== '')
    .map((word) => word.toUpperCase());
  const frequencyAnalysis = words.reduce(function (
    counts: WordCount,
    curr: string
  ) {
    curr in counts ? counts[curr]++ : (counts[curr] = 1);
    return counts;
  },
  {});
  return frequencyAnalysis;
}

export function getPercentage(wordCount: number, totalCount: number): number {
  const percent = (wordCount / totalCount) * 100;
  return Math.round(percent * 100) / 100;
}
