import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { MenuModalProvider } from "./contexts/MenuModalContext.tsx";
import { KeyInputProvider } from "./contexts/KeyInputContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KeyInputProvider>
      <MenuModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MenuModalProvider>
    </KeyInputProvider>
  </StrictMode>,
);
