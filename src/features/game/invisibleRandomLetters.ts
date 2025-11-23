import type { Word } from "../../../type";
import { pushUniqueIndexOFInvisibleLetter } from "./pushUniqueIndexOFInvisibleLetter";

export function invisibleRandomLetters(randomWord: Word) {
  const randomName = randomWord.name;
  const numOfInvisibleLetter = Math.ceil((randomName.length * 40) / 100);
  const arrLetters = randomName.split("").map((letter) => {
    return { letter, show: true };
  });

  const indexOfInvisibleLetters = pushUniqueIndexOFInvisibleLetter(
    numOfInvisibleLetter,
    randomName,
  );

  const letters = arrLetters.map((letter) => {
    if (indexOfInvisibleLetters?.includes(arrLetters.indexOf(letter))) {
      return {
        letter: letter.letter,
        show:
          letter.letter === " " ? (letter.show = true) : (letter.show = false),
      };
    } else {
      return letter;
    }
  });

  return letters;
}
