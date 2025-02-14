import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Maindisplay from "./Maindisplay";
import { useLocation } from "react-router-dom";

export default function Votepage() {
  // can not directly use props
  const location = useLocation()
  const address = location.state?.address;

  console.log("This is the address from the voterPage",address)  
  return (
    <div className="h-[20000px] p-4 bg-[#3B3C36] flex flex-col gap-8">
      <div>
        <Navbar />
      </div>
      <div>
        <Maindisplay address={address}/>
      </div>
    </div>
  );
}
