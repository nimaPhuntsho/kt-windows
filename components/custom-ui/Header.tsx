import React from "react";
import Image from "next/image";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <Image src="/images/kt-logo.svg" width={200} height={150} alt="logo" />
      </Link>
      <AlignJustify />
    </div>
  );
};

export default Header;
