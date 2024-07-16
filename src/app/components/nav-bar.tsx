"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div>
        <nav className="w-full pb-4 pt-5">
          <div className="container mx-auto px-5">
            <div className="flex items-center justify-between">
              <Link href="/">
                <Image
                  src={"/home-icon.png"}
                  alt="home-icon"
                  width={70}
                  height={70}
                />
              </Link>
              <div className="lg:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-black focus:outline-none"
                >
                  {isMenuOpen ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="#491FB8"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="#491FB8"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <div className={`${isMenuOpen ? "block" : "hidden"} lg:block`}>
                <div className="flex flex-col lg:flex-row items-center">
                  <Link
                    href={"/about"}
                    className="relative mr-6 mb-4 lg:mb-0 text-lg font-medium text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-sm after:bg-daisyPurple-800 after:transition-all after:duration-300 after:ease-linear hover:text-daisyPurple-800 hover:after:w-full xl:mr-[30px]"
                  >
                    About
                  </Link>
                  <Link
                    href={"/work"}
                    className="relative mr-6 mb-4 lg:mb-0 text-lg font-medium text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-sm after:bg-daisyPurple-800 after:transition-all after:duration-300 after:ease-linear hover:text-daisyPurple-800 hover:after:w-full xl:mr-[44px]"
                  >
                    Work
                  </Link>
                  <Link
                    href={"/say-hello"}
                    className="h-12 w-28 items-center justify-center overflow-hidden rounded border-2 border-solid border-daisyPurple-800 bg-daisyPurple-800 font-semibold text-white duration-300 ease-linear hover:bg-white hover:text-daisyPurple-800 flex"
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
