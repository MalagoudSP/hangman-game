import { createContext, useContext, useState } from "react";

type MenuModalType = {
  openMenuModal: boolean;
  setOpenMenuModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuModalContext = createContext<MenuModalType | undefined>(undefined);

export function MenuModalProvider({ children }: { children: React.ReactNode }) {
  const [openMenuModal, setOpenMenuModal] = useState(false);

  return (
    <MenuModalContext.Provider
      value={{
        openMenuModal,
        setOpenMenuModal,
      }}
    >
      {children}
    </MenuModalContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useMenuModal = () => {
  const context = useContext(MenuModalContext);
  if (!context)
    throw new Error(
      "Menu modal context was used outside of menu modal provider",
    );
  return context;
};
