import React from "react";
import amongUs from "../assets/amongUs.svg";
import { navigation } from "../constants";
const Navbar = () => {
  return (
    <div className="flex h-[6rem] items-center pt-[1rem] px-5 lg:px-5.5 xl:px-10 max-lg:py-4 bg-n-8 border-b border-n-4">
      <a className="block w-[8rem] xl:mr-8" href="#hero">
        <img src={amongUs} width={40} height={40} alt="SaaSpect" />
      </a>
      <nav className="fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
        <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
          {navigation.map((item) => (
            <a
              key={item.id}
              className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1  
                px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold
                 lg:leading-5 lg:hover:text-n-1 xl:px-12`}
            >
              <img src={item.image} height={24} width={24} />
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
