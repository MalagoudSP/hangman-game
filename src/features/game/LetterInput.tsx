function LetterInput({
  keyInput: keyInputState,
  setKeyInputState,
  setLetters,
  letters,
  setCurrentHealth,
}: {
  keyInput: { key: string; active: boolean };
  setLetters: React.Dispatch<
    React.SetStateAction<
      | {
          letter: string;
          show: boolean;
        }[]
      | undefined
    >
  >;
  letters:
    | {
        letter: string;
        show: boolean;
      }[]
    | undefined;
  setCurrentHealth: React.Dispatch<React.SetStateAction<number>>;
  setKeyInputState: React.Dispatch<
    React.SetStateAction<
      {
        key: string;
        active: boolean;
      }[]
    >
  >;
}) {
  function handleClickOnKey() {
    //// 1) IF WRONG GUESS PLAY WRONG SOUND ELSE PLAY CORRECT SOUND
    const wrongSound = new Audio("/sounds/wrong.mp3");
    const correctSound = new Audio("/sounds/correct.mp3");
    const wrong =
      letters?.every(
        (letter) => letter.letter.toUpperCase() !== keyInputState.key,
      ) && keyInputState.active;

    if (wrong) {
      // wrongSound.currentTime = 0;
      wrongSound.play();
    } else {
      correctSound.play();
    }
    //// 2) REVEAL LETTER
    setLetters((letters) =>
      letters?.map((letter) =>
        letter.letter.toUpperCase().includes(keyInputState.key)
          ? { ...letter, show: true }
          : letter,
      ),
    );

    //// 3) DEACTIVATE KEY
    setKeyInputState((prev) => {
      return prev.map((input) =>
        input.key === keyInputState.key ? { ...input, active: false } : input,
      );
    });

    //// 4) IF WRONG GUESS DECREASE HEALTH BY 1

    if (wrong) {
      setCurrentHealth((prev) => prev - 1);
    }
  }

  return (
    <p
      role="button"
      onClick={handleClickOnKey}
      className={`bg-neutral-0 text-preset-10 text-indigo-60 flex h-14 cursor-pointer items-center justify-center rounded-lg transition-opacity duration-200 md:h-21 md:rounded-3xl md:text-[48px] md:tracking-[2.5px] ${keyInputState.active === false ? "opacity-25" : "opacity-100 active:scale-92"}`}
    >
      {keyInputState.key}
    </p>
  );
}

export default LetterInput;
