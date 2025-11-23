import { useMenuModal } from "../../contexts/MenuModalContext";
import MenuButton from "../../UI/MenuButton";

function GameHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { setOpenMenuModal } = useMenuModal();

  function handleClickMenu() {
    setOpenMenuModal(true);
  }

  return (
    <div
      className={`@container flex w-full items-center gap-4 md:justify-start md:gap-8 lg:gap-14 ${className}`}
    >
      <MenuButton type={"menu"} onClick={handleClickMenu} />
      <p className="text-preset-8 text-neutral-0 uppercase md:text-[48px] md:tracking-[2.5px] lg:text-[88px] lg:tracking-[0px] @[255px]:text-[40px]">
        {children}
      </p>
    </div>
  );
}

export default GameHeader;
