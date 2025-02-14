import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VoterLogin() {
  // State for connection status
  const [onConnection, setOnConnection] = useState(false);
  // State for wallet address
  const [address, setAddress] = useState(null);
  // State for signer instance
  const [signer, setSigner] = useState(null);
  
  // React Router navigation
  const navigate = useNavigate();
  
  // provider for connecting backend and frontend (wallet based)
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  








  // Function to navigate to the homepage
  function navigateHomepage(walletAddress) {
    setTimeout(() => {
      console.log("Redirecting to the homepage with address:", walletAddress);
      navigate("/Votepage", { state: { address: walletAddress } });
    }, 1000); // Short delay for better UX
  }
  
  // Function to connect wallet
  async function ConnectWallet() {

    if (window.ethereum) {
      try {
        // Request accounts from MetaMask
        await provider.send("eth_requestAccounts", []);
        const signerInstance = provider.getSigner();

        // Fetch the wallet address
        const signerAddress = await signerInstance.getAddress();
        console.log("Wallet Address is:", signerAddress);

        // Update state with address and signer
        setAddress(signerAddress);
        setSigner(signerInstance);

        // Listen for account changes
        window.ethereum.on("accountsChanged", (accounts) => {
          if (accounts.length > 0) {
            setAddress(accounts[0]);
            console.log("Accounts changed to:", accounts);
          }
        });
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      console.error("Please install MetaMask");
    }
  }

  // UseEffect to log connection status
  useEffect(() => {
    if (onConnection) {
      console.log("The button connection is:", onConnection);
    } else {
      console.log("Connection not initiated.");
    }
  }, [onConnection]);

  // UseEffect to handle navigation when address is set
  useEffect(() => {
    setTimeout(() => {
      if (address) {
        console.log("Address updated, navigating to homepage:", address);
        navigate("/Votepage", { state: { address } });
      }
    },1000);
  }, [address, navigate]);

  return (
    <div>
      <div className="font-roboto_mono text-[#FCF5E5] p-4 h-screen flex items-center justify-center bg-[#3B3C36]">
        <div className="flex flex-col gap-4">
          {/* Header Text */}
          <div className="text-[35px] font-[700] tracking-tight flex flex-col text-center">
            Register now and shape
            <span>The future with your vote</span>
          </div>
          {/* Brief Explanation */}
          <div className="text-center flex flex-col gap-1 text-sm">
            Manage and track your votes seamlessly with our decentralized voting
            system.
            <span>
              Connect your MetaMask wallet or view voting activity for any
              Ethereum address.
            </span>
          </div>
          {/* MetaMask Connection Button */}
          <div className="text-center">
            <button
              onClick={async () => {
                setOnConnection(true);
                console.log("Attempting wallet connection...");
                await ConnectWallet(); // Connect wallet
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
  );
}
