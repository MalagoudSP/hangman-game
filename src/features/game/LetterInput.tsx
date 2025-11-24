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
    const wrongSound = new Audio("/sounds/wrong.mp3");
    //// 1) REVEAL LETTER
    setLetters((letters) =>
      letters?.map((letter) =>
        letter.letter.toUpperCase().includes(keyInputState.key)
          ? { ...letter, show: true }
          : letter,
      ),
    );

    //// 2) DEACTIVATE KEY
    setKeyInputState((prev) => {
      return prev.map((input) =>
        input.key === keyInputState.key ? { ...input, active: false } : input,
      );
    });

    //// 3) IF WRONG GUESS DECREASE HEALTH BY 1
    if (
      letters?.every(
        (letter) => letter.letter.toUpperCase() !== keyInputState.key,
      ) &&
      keyInputState.active
    ) {
      //// 4) PLAY SOUNDS
      wrongSound.play();
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
