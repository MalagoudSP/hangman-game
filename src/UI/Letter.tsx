import type { Letters } from "../../type";

function Letter({ letter }: { letter: Letters }) {
  if (letter.letter === " ")
    return <div className="h-[66px] w-4 md:h-28 md:w-6 lg:h-32 lg:w-8"></div>;

  return (
    <div
      style={{
        boxShadow: `inset 0 -2px 0 3px #140e66, inset 0 1px 0 6px #3c74ff`,
      }}
      className={`text-preset-7 text-neutral-0 flex h-[66px] w-10 items-center justify-center rounded-xl bg-blue-600 p-3 uppercase md:h-28 md:w-22 md:rounded-4xl lg:h-32 lg:w-28 lg:rounded-[40px] ${letter.show === false ? "opacity-25" : "opacity-100"}`}
    >
      {letter.show && <p>{letter.letter}</p>}
    </div>
  );
}

export default Letter;
