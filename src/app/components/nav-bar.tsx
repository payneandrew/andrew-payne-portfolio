import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <>
      <div>
        <nav className="w-full pb-4 pt-5">
          <div className="container mx-auto px-5">
            <div className="flex items-center justify-between">
              <Link href="/">
                <Image
                  src={"/home-icon.png"}
                  alt="andrew-payne-headshot"
                  width={70}
                  height={70}
                />
              </Link>
              <div className="hidden lg:block">
                <div className="flex items-center">
                  <Link
                    href={"/."}
                    className="relative mr-6 text-lg font-medium text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-sm after:bg-daisyPurple-800 after:transition-all after:duration-300 after:ease-linear hover:text-daisyPurple-800 hover:after:w-full xl:mr-[30px]"
                  >
                    About
                  </Link>
                  <Link
                    href={"/."}
                    className="relative mr-6 text-lg font-medium text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-sm after:bg-daisyPurple-800 after:transition-all after:duration-300 after:ease-linear hover:text-daisyPurple-800 hover:after:w-full xl:mr-[44px]"
                  >
                    Work
                  </Link>
                  <Link
                    href={"/."}
                    className="hidden h-[47px] w-[122px] items-center justify-center overflow-hidden rounded border-2 border-solid border-daisyPurple-800 bg-daisyPurple-800 text-base font-semibold text-white duration-300 ease-linear hover:bg-white hover:text-daisyPurple-800 sm:flex"
                  >
                    Say Hello
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
