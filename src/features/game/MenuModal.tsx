import { NavLink } from "react-router";
import { useMenuModal } from "../../contexts/MenuModalContext";
import Button from "../../UI/Button";
import { useKeyInput } from "../../contexts/KeyInputContext";
import { AnimatePresence, motion } from "motion/react";

function MenuModal() {
  const { openMenuModal, setOpenMenuModal } = useMenuModal();
  const { setKeyInputState } = useKeyInput();
  // if (!openMenuModal) return null;

  return (
    <AnimatePresence mode="popLayout">
      {openMenuModal && (
        <div>
          <div className="color-gradient-5 fixed inset-0 opacity-75" />
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ scale: 0.85, opacity: 0, transition: { duration: 0.2 } }}
            className="absolute top-1/2 left-1/2 z-9 flex h-dvh -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          >
            <div className="relative">
              <p
                style={{
                  textShadow:
                    "0 0 6px #000, 0 0 10px #000, 0 0 14px #000, 0 0 18px #000",
                }}
                className="text-preset-3 absolute -top-14 left-1/2 -translate-x-1/2 text-[#B3DAFF] capitalize md:-top-22 md:text-[136px]"
              >
                paused
              </p>
              <div
                style={{
                  boxShadow: `inset 0 -8px 0 4px #140e66, inset 0 6px 0 8px #2463ff `,
                }}
                className="gradient-1 flex h-[481px] w-[324px] flex-col items-center justify-center rounded-[48px] md:h-[500px] md:w-[592px]"
              >
                <div className="mt-14.5 space-y-8 text-center">
                  <Button onClick={() => setOpenMenuModal(false)}>
                    continue
                  </Button>
                  <NavLink className="block" to={"/category-pick"}>
                    <Button
                      onClick={() => {
                        // close modal
                        setOpenMenuModal(false);
                        // reactivate key
                        setKeyInputState((inputs) =>
                          inputs.map((input) => ({ ...input, active: true })),
                        );
                      }}
                      className="block"
                    >
                      new category
                    </Button>
                  </NavLink>
                  <NavLink to={"/"}>
                    <Button
                      onClick={() => {
                        // close modal
                        setOpenMenuModal(false);
                        // reactivate key
                        setKeyInputState((inputs) =>
                          inputs.map((input) => ({ ...input, active: true })),
                        );
                      }}
                      variant="destructive"
                    >
                      quit game
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default MenuModal;
