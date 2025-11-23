import HeartIcon from "./icons/HeartIcon";

function PlayerHealth({
  currentHealth,
  totalHealth,
}: {
  currentHealth: number;
  totalHealth: number;
}) {
  return (
    <div className="flex w-[31.5%] items-center justify-between gap-4 lg:gap-10">
      <div className="bg-neutral-0 w-full rounded-full p-1 md:px-[11px] md:py-[9px]">
        <div
          style={{ width: `${(currentHealth / totalHealth) * 100}%` }}
          className="h-2 rounded-full bg-indigo-600 md:h-[13px]"
        ></div>
      </div>
      <HeartIcon />
    </div>
  );
}

export default PlayerHealth;
