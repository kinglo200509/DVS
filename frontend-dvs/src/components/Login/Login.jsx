import voting from "../imgs/voting.jpg";
import { useNavigate } from "react-router-dom";

export default function Login() {

  // creating an instance of the useNvaigate
  const navigate = useNavigate();
  // creating routee
  const handleClickOnVoters = () => {
    navigate('/VoterLogin');
  };
  const handleClickOnCandidates = () => {
    navigate('/CandidateLogin');
  };

  return (
    <div className="">
      <div className=" bg-[#FCF5E5] h-screen  p-4 flex justify-center items-center gap-4 font-roboto_mono">
        {/* Imgs*/}
        <div className="gap-2">
          <div>
            <img src={voting} alt="" className="w-96 rounded-[8.5px]" />
          </div>
        </div>
        {/* login_metamask */}
        <div className="">
          <div className="flex flex-col justify-center px-5 gap-10 ">
            {/* login with metamask */}
            <div className="flex flex-col gap-1">
              <div className="text-3xl font-semibold">Welcome To Login</div>
              <div className="text-[15px] font-semibold text-[#4C4646]">
                Secure. Simple. Your Voice, Your Choice
              </div>
            </div>
            {/* who are u  */}
            <div className="flex flex-col justify-start   gap-4  py-2">
              <p className="text-[20px] font-bold ">Choose Who You Are</p>
              {/* voters */}
              <div className="flex justify-start gap-4">
                <div className="border-2 border-transparent  px-2  rounded-[8.5px] bg-[#3B3C36]">
                  <button className="text-lg font-semibold text-[#FCF5E5]"
                  onClick={handleClickOnVoters}>
                    Voters
                  </button>
                </div>
                {/* candidate */}
                <div className="border-2 border-black px-2  rounded-[8.5px] bg-[#3B3C36]">
                  <button className="text-lg font-semibold text-[#FCF5E5]"
                  onClick={handleClickOnCandidates}>
                    Candidate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
