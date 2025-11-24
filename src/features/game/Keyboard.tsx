import { useKeyInput } from "../../contexts/KeyInputContext";
import LetterInput from "./LetterInput";

function Keyboard({
  setLetters,
  letters,
  setCurrentHealth,
}: {
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
}) {
  const { keyInputState, setKeyInputState } = useKeyInput();

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex w-full gap-2 md:gap-4 lg:gap-6">
        {keyInputState.map((key, i) => {
          if (i < 9) {
            return (
              <div key={i} className="grow">
                <LetterInput
                  key={i}
                  keyInput={key}
                  setKeyInputState={setKeyInputState}
                  setLetters={setLetters}
                  letters={letters}
                  setCurrentHealth={setCurrentHealth}
                />
              </div>
            );
          }
        })}
      </div>
      <div className="flex w-full gap-2 md:gap-4 lg:gap-6">
        {keyInputState.map((key, i) => {
          if (i >= 9 && i < 18) {
            return (
              <div key={i} className="grow">
                <LetterInput
                  key={i}
                  keyInput={key}
                  setKeyInputState={setKeyInputState}
                  setLetters={setLetters}
                  letters={letters}
                  setCurrentHealth={setCurrentHealth}
                />
              </div>
            );
          }
        })}
      </div>
      <div className="flex w-[90%] gap-2 self-start md:gap-4 lg:gap-6">
        {keyInputState.map((key, i) => {
          if (i >= 18) {
            return (
              <div key={i} className="grow">
                <LetterInput
                  key={i}
                  keyInput={key}
                  setKeyInputState={setKeyInputState}
                  setLetters={setLetters}
                  letters={letters}
                  setCurrentHealth={setCurrentHealth}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Keyboard;
