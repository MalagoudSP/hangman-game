import { createContext, useContext, useState } from "react";

// prettier-ignore
const keyboard = [
  { key: "A", active: true }, { key: "B", active: true }, { key: "C", active: true },
  { key: "D", active: true }, { key: "E", active: true }, { key: "F", active: true },
  { key: "G", active: true }, { key: "H", active: true }, { key: "I", active: true },
  { key: "J", active: true }, { key: "K", active: true }, { key: "L", active: true },
  { key: "M", active: true }, { key: "N", active: true }, { key: "O", active: true },
  { key: "P", active: true }, { key: "Q", active: true }, { key: "R", active: true },
  { key: "S", active: true }, { key: "T", active: true }, { key: "U", active: true },
  { key: "V", active: true }, { key: "W", active: true }, { key: "X", active: true },
  { key: "Y", active: true }, { key: "Z", active: true }
];

type KeyInputType = {
  keyInputState: {
    key: string;
    active: boolean;
  }[];
  setKeyInputState: React.Dispatch<
    React.SetStateAction<
      {
        key: string;
        active: boolean;
      }[]
    >
  >;
};

const KeyInputContext = createContext<KeyInputType | undefined>(undefined);

export function KeyInputProvider({ children }: { children: React.ReactNode }) {
  const [keyInputState, setKeyInputState] = useState(keyboard);

  return (
    <KeyInputContext.Provider
      value={{
        keyInputState,
        setKeyInputState,
      }}
    >
      {children}
    </KeyInputContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useKeyInput = () => {
  const context = useContext(KeyInputContext);
  if (!context)
    throw new Error("Key input context was used outside of key input provider");
  return context;
};
