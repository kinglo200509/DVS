import { useEffect, useRef } from "react";
import { Candidate, Votes, Time } from "../Svg";
import HomeCandidate from "./HomeCandidate";
import jazzicon from "jazzicon";
import { contractAddress, ABI, privateKey } from "./../../Constanst/Constants";
import { ethers } from "ethers";


export default function Maindisplay({ address = "Not Connected" }) {
  const iconContainerRef = useRef(null);

  useEffect(() => {
    const container = iconContainerRef.current;
    if (container) {
      // Clear any previous icons to avoid duplicates
      container.innerHTML = "";
      const el = jazzicon(55, Math.round(Math.random() * 10000000)); // Generate one Jazzicon
      container.appendChild(el);
    }
  }, []);
  
  // connecting the blockchain to frontend
  // provider
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  // wallet and contract instance
  const wallet = new ethers.Wallet(privateKey, provider)
  const contract  = new ethers.Contract(contractAddress,ABI,wallet);
  


  return (
    <div className="flex justify-center font-roboto_mono items-center">
      <div className="p-2 gap-5 w-[80%] flex flex-col justify-center items-center">
        {/* User Section */}
        <div className="w-[100%] gap-4 flex">
          {/* Welcome Back */}
          <div className="flex flex-col gap-2 bg-[#FCF5E5] hover:cursor-pointer border-2 border-transparent hover:border-black p-2 rounded-[8.5px]">
            <div className="font-semibold text-2xl">Welcome Back</div>
            <div className="flex items-center gap-2">
              {/* Profile Picture */}
              <div ref={iconContainerRef} />
              {/* User Details */}
              <div className="flex justify-center gap-1 items-center">
                <div className="font-medium text-lg ">Voter</div>
                <div className="font-medium text-lg ">:</div>
                <div>{address}</div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="w-full bg-[#FCF5E5] hover:cursor-pointer border-2 border-transparent hover:border-black rounded-[8.5px] flex gap-4">
            <div className="flex flex-col gap-2 justify-center p-2">
              {/* Candidates */}
              <div className="flex gap-1 items-center">
                <Candidate />
                <div className="flex flex-col gap-0">
                  <div className="text-xl font-semibold">Candidates</div>
                  <div className="text-base font-medium">12,000</div>
                </div>
              </div>
              {/* Votes */}
              <div className="flex gap-2 items-center">
                <Votes />
                <div className="flex flex-col gap-0">
                  <div className="text-xl font-semibold">Votes</div>
                  <div className="text-base font-medium">12,000</div>
                </div>
              </div>
            </div>

            {/* Time Left */}
            <div className="p-2">
              <div className="flex items-center gap-2">
                <Time />
                <div>
                  <div className="text-xl font-semibold">Time Left</div>
                  <div className="text-base font-medium">5:02</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Candidate Section */}
        <div className="flex justify-center items-center w-[100%]">
          <div className="p-2 flex gap-2">
            <HomeCandidate />
            <HomeCandidate />
            <HomeCandidate />
          </div>
        </div>
      </div>
    </div>
  );
}
