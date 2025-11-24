import HeartIcon from "./icons/HeartIcon";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

function PlayerHealth({
  currentHealth,
  totalHealth,
}: {
  currentHealth: number;
  totalHealth: number;
}) {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShake(true);
    const t = setTimeout(() => setShake(false), 300);
    return () => clearTimeout(t);
  }, [currentHealth]);

  return (
    <div className="flex w-[31.5%] items-center justify-between gap-4 lg:gap-10">
      <div className="bg-neutral-0 w-full rounded-full p-1 md:px-[11px] md:py-[9px]">
        <div
          style={{ width: `${(currentHealth / totalHealth) * 100}%` }}
          className="h-2 rounded-full bg-indigo-600 transition-all duration-200 md:h-[13px]"
        ></div>
      </div>
      <motion.div
        animate={
          shake
            ? { x: [-6, 6, -6, 6, -3, 3, 0] }
            : { scale: currentHealth / totalHealth }
        }
        transition={
          shake
            ? { duration: 0.35, ease: "easeInOut" }
            : { type: "spring", stiffness: 300, damping: 15 }
        }
        className="w-full"
      >
        <HeartIcon className="w-full" />
      </motion.div>
    </div>
  );
}

export default PlayerHealth;
