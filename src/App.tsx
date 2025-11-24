import { Route, Routes, useLocation } from "react-router";
import MainMenu from "./features/mainMenu/MainMenu";
import HowToPlay from "./features/howToPlay/HowToPlay";
import CategoryPick from "./features/categoryPick/CategoryPick";
import Game from "./features/game/Game";
import DifficultyPick from "./features/difficultyPick/DifficultyPick";
import { AnimatePresence, motion } from "motion/react";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-dvh bg-[url('../assets/images/background-mobile.svg')] bg-cover bg-center bg-no-repeat md:bg-[url('../assets/images/background-tablet.svg')] lg:bg-[url('../assets/images/background-desktop.svg')]">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            index
            path="/"
            element={
              <motion.div
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ type: "keyframes", duration: 0.35 }}
                exit={{ y: "-100vh" }}
              >
                <MainMenu />
              </motion.div>
            }
          />

          <Route
            path="/how-to-play"
            element={
              <motion.div
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ type: "keyframes", duration: 0.35 }}
                exit={{ y: "-100vh" }}
              >
                <HowToPlay />
              </motion.div>
            }
          />
          <Route
            path="/category-pick"
            element={
              <motion.div
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ type: "keyframes", duration: 0.35 }}
                exit={{ y: "-100vh" }}
              >
                <CategoryPick />
              </motion.div>
            }
          />
          <Route
            path="/difficulty"
            element={
              <motion.div
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ type: "keyframes", duration: 0.35 }}
                exit={{ y: "-100vh" }}
              >
                <DifficultyPick />
              </motion.div>
            }
          />
          <Route
            path="/game"
            element={
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "keyframes", duration: 0.35 }}
                exit={{ x: "-100vw" }}
              >
                <Game />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
