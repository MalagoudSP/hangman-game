import { NavLink } from "react-router";
import Button from "../../UI/Button";
import LogoIcon from "../../UI/icons/LogoIcon";
import PlayButton from "../../UI/PlayButton";

function MainMenu() {
  return (
    <div className="flex min-h-dvh items-center justify-center">
      <div className="relative">
        <LogoIcon className="absolute -top-14 left-1/2 h-[130.2px] w-[263px] -translate-x-1/2 md:-top-26 md:h-[185px] md:w-[373.69px]" />
        <div
          style={{
            boxShadow: `inset 0 -8px 0 4px #140e66, inset 0 6px 0 8px #2463ff `,
          }}
          className="gradient-1 flex h-[481px] w-[324px] flex-col items-center justify-center rounded-[48px] md:h-[500px] md:w-[592px]"
        >
          <div className="mt-14.5 flex flex-col gap-14">
            <NavLink to={"/category-pick"} className="mx-auto">
              <PlayButton />
            </NavLink>
            <NavLink to={"/how-to-play"}>
              <Button>how to play</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
