import type { Word } from "../../../type";

export function getRandomWord(words: Word[]) {
  if (words.every((word) => word.selected === true)) {
    words.forEach((word) => (word.selected = false));
  }
  const numOfWords = words.length;
  const randomNumber = Math.trunc(Math.random() * numOfWords);
  const randomWord = words.at(randomNumber);
  if (randomWord?.selected === false) {
    randomWord.selected = true;
    return randomWord;
  } else {
    return getRandomWord(words);
  }
}
