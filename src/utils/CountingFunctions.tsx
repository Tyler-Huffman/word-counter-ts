export function countWords(input: string): number {
  let words: string[] = input
    .split(/[^a-zA-Z]/g)
    .filter((word) => word !== '')
    .map((word) => word.trim());
  return words.length;
}

export function countSentences(input: string): number {
  const sentences = input.split('.').filter((word) => word !== '');
  return sentences.length === 0 ? 0 : sentences.length - 1;
}

export function countParagraphs(input: string): number {
  const paragraphs: string[] = input.split('\n').filter((word) => word !== '');
  return paragraphs.length;
}

type WordCount = { [key: string]: number };

export function createWordHistogram(input: string): WordCount {
  const inputCleaned: string = input.replace(/[^a-zA-Z\s]/g, '');
  const words: string[] = inputCleaned
    .split(/[^a-zA-Z]/g)
    .filter((word) => word !== '')
    .map((word) => word.toUpperCase());
  const frequencyAnalysis = Object.create(null);
  for (const word of words) {
    if (word in frequencyAnalysis) {
      frequencyAnalysis[word] += 1;
    } else {
      frequencyAnalysis[word] = 1;
    }
  }
  return frequencyAnalysis;
}

export function getPercentage(wordCount: number, totalCount: number): number {
  const percent = (wordCount / totalCount) * 100;
  return Math.round(percent * 100) / 100;
}
