//imports
import { useState, useEffect } from "react"; 
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";


export default function CandidateLogin() {

  // useStates
  const [address , setAddress] = useState(null);

  // Navigate
  const navigate = useNavigate()

  // provider- an abstraction used to connect the ethereum blockchain, used to connect and read data
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // fucntion-connectWallet
  async function ConnectMetamask(){
    if(window.ethereum){
      
      // request accounts
      await provider.send("eth_requestAccounts",[]);
      const signerInstance =  provider.getSigner();
      
      // fetch the signer address
      const signerAddress = await signerInstance.getAddress();
      console.log(signerAddress)
      setAddress(signerAddress); 
    }
  }

  // navigate function
  function naviatateDetialePage(){
    setTimeout(()=>{
      console.log("Redirecting to the dtails page")
      navigate("/DetailedPage" , {state:{address:address}})
    },1000)
  }


  return (
    <div>
      <div>
        <div className="font-roboto_mono text-[#FCF5E5] p-4 h-screen flex items-center justify-center bg-[#3B3C36]">
          <div className="flex flex-col gap-4">
            {/* Header Text */}
            <div className="text-[35px] font-[700] tracking-tight flex flex-col text-center">
              Join the journey and lead
              <span> The future with your voice</span>
            </div>
            {/* Brief Explanation */}
            <div className="text-center flex flex-col gap-1 text-sm">
              Effortlessly manage and monitor your votes with our secure
              decentralized voting platform.
              <span>
                Connect your MetaMask wallet or explore voting activity for any
                Ethereum address.
              </span>
            </div>
            {/* MetaMask Connection Button */}
            <div className="text-center">
              <button 
              onClick={()=>{
                ConnectMetamask(),
                naviatateDetialePage()   
              }}
                className="border-2 border-black px-4 py-2 rounded-[8.5px] 
              bg-[#5C9EAD] text-white text-lg font-bold"
              >
                Connect to MetaMask <br />
                {address}
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
