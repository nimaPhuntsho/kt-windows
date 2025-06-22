import React from "react";
import Image from "next/image";
import { MapPinCheckInside } from "lucide-react";
import { PhoneForwarded } from "lucide-react";
import { Send } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col text-black gap-6 p-6 mt-2 bg-[#FFE6C9] rounded-sm ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <Image src="/images/kt-logo.svg" width={250} height={1} alt="logo" />
        <div>
          <div className="flex gap-2 items-center">
            <PhoneForwarded size="18px" />
            <p>0412221212</p>
          </div>
          <div className="flex gap-2 items-center">
            <Send size="18px" />
            <p>info@ktwindows.com.au</p>
          </div>
          <div className="flex gap-2 items-center">
            <MapPinCheckInside size="18px" />
            <p>Canberra, Australia</p>
          </div>
        </div>
      </div>
      <div className="text-sm  md:text-center ">
        Copyright © {new Date().getFullYear()} ktwindows.com.au
      </div>
    </div>
  );
};

export default Footer;
