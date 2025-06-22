import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-2">
      <Image src="/images/kt-logo.svg" width={150} height={100} alt="logo" />
      <Button variant="destructive">Get a quote</Button>
    </div>
  );
};

export default Header;
