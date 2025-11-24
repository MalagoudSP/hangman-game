import type { Letters } from "../../type";
import { motion } from "motion/react";

function Letter({ letter, index }: { letter: Letters; index: number }) {
  if (letter.letter === " ")
    return <div className="h-[66px] w-4 md:h-28 md:w-6 lg:h-32 lg:w-8"></div>;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: index * 0.1 }}
      style={{
        boxShadow: `inset 0 -2px 0 3px #140e66, inset 0 1px 0 6px #3c74ff`,
      }}
      className={`text-preset-7 text-neutral-0 flex h-[66px] w-10 items-center justify-center rounded-xl bg-blue-600 p-3 uppercase md:h-28 md:w-22 md:rounded-4xl lg:h-32 lg:w-28 lg:rounded-[40px] ${letter.show === false ? "opacity-25" : "opacity-100"}`}
    >
      {
        <p
          className={`${letter.show ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"} transition-all duration-200`}
        >
          {letter.letter}
        </p>
      }
    </motion.div>
  );
}

export default Letter;
