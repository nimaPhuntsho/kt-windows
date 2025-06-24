import React from "react";
import Image from "next/image";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div style={{}} className="flex items-stretch border-b ">
      <Link className="flex-1 p-4" href="/">
        <Image src="/images/kt-logo.svg" width={150} height={150} alt="logo" />
      </Link>
      <div className="flex items-center  md:hidden p-4 cursor-pointer  active:border">
        <AlignJustify />
      </div>
      <div className="hidden md:flex  font-bold cursor-pointer items-stretch justify-stretch justify-between">
        <Link
          className="flex  p-4 active:bg-[#A1C398] hover:bg-[#FFE4C9] items-center justify-center cursor-pointer"
          href="/our-work"
        >
          <p>Our work</p>
        </Link>
        <Link
          className="flex flex-1 p-4 active:bg-[#A1C398] hover:bg-[#FFE4C9] items-center justify-center cursor-pointer"
          href="/about"
        >
          <p>About</p>
        </Link>
        <Link
          className="flex flex-1 p-4 active:bg-[#A1C398] hover:bg-[#FFE4C9] items-center justify-center cursor-pointer"
          href="/contact"
        >
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
