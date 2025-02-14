import { Politician } from "../Svg";

export default function HomeCandidate() {
  return (
    <div className="flex flex-col bg-[#FCF5E5] justify-center border-2 border-transparent hover:border-2 hover:border-black rounded-[8.5px]  px-2 gap-2">
      {/* candidate-name,id */}
      <div className="flex gap-4">
        <div className="text-lg font-bold"> Candidate_Name</div>
        <div className="text-lg font-bold">ID </div>
      </div>
      {/* candidate-details */}
      <div className="flex gap-4">
        {/* Image of the candidate */}
        <div>
          <div className="flex items-center justify-center">
            <Politician className="border-2 border-black rounded-full w-24 h-24 p-2" />
          </div>
        </div>
        {/* the details of the candidate */}
        <div className="flex flex-col ">
          {/* age, blah */}
          <div className=" p-2 flex gap-4">
            <div className="border-2 px-2 py-1 border-black rounded-[8.5px] font-semibold inline-flex">
              AGE: <span className="font-semibold">sdffgd </span>
            </div>

            <div className="border-2 p-1 border-black rounded-[8.5px] font-semibold">
              Pokemon
            </div>
          </div>
          {/* blahhhhhh */}
          <div className="p-2   text-center">
            <div className="border-2 border-black text-lg font-semibold">
              Resume
            </div>
          </div>
          <div></div>
        </div>
      </div>
      {/* candidate organisation */}
      <div className="p-2 text-center">

        <div className="border-2 border-black text-lg font-semibold">Organisation</div> 
      </div>
    </div>
  );
}
