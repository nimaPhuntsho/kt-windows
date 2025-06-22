import React from "react";
import Image from "next/image";
import { AlignJustify } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Image src="/images/kt-logo.svg" width={200} height={150} alt="logo" />
      <AlignJustify />
    </div>
  );
};

export default Header;
