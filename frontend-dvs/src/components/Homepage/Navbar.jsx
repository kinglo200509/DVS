import { useState, useEffect } from "react";
import logo from ".././imgs/unnamed.png";
import { AccountSvg } from "../Svg";

export default function Navbar() {
  return (
    <div className="  relative flex font-roboto_mono  justify-center h-[60px] ">
      <div className="flex justify-between fixed   bg-[#FCF5E5] border-2 border-transparent rounded-[8.5px] items-center hover:border-2 hover:border-black fix   w-[80%] p-2 "> 
        {/* logo and content */}
        <div className=" flex  justify-center items-center gap-12">
          {/* logo */}
          <div>
            <div>
              <img src={logo} alt="" className="w-10" />
            </div>
          </div>
          {/* details */}
          <div className="flex justify-center  items-center gap-7 ">
            {/* Home */}
            <button className="border-2 border-black px-5 py-1 rounded-[8.5px]">
              Home{" "}
            </button>

            <button className="border-2 border-black px-5 py-1 rounded-[8.5px]">
              About us{" "}
            </button>

            <button className="border-2 border-black px-5 py-1 rounded-[8.5px]">
              Contact us{" "}
            </button>
          </div>
        </div>
        {/* account and vote , vote-process */}
        <div className="">
          {/* Account  */}
          <div className="px-1 py-1 rounded-full hover:bg-gray-200 hover:cursor-pointer flex items-center justify-center w-12 h-12">
            <AccountSvg />
          </div>
        </div>
      </div>
    </div>
  );
}
