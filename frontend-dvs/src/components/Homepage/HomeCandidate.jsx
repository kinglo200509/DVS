import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Politician } from "../Svg";
import { contractAddress, ABI } from "../../Constanst/Constants.js";

export default function HomeCandidate() {
  const [candidates, setCandidates] = useState([]);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    fetchCandidatesFromBackend();
  }, []);

  const fetchCandidatesFromBackend = async () => {
    try {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      setCandidates(data);
    } catch (error) {
      console.error("Error fetching candidates from backend:", error);
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum === "undefined") {
      console.error("MetaMask is not installed");
      return;
    }

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, ABI, signer);

      setProvider(provider);
      setSigner(signer);
      setContract(contract);
      setAccount(await signer.getAddress());
      console.log("Connected to MetaMask:", await signer.getAddress());
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };

  const fetchCandidatesFromContract = async () => {
    if (!contract) return;
    try {
      const count = await contract.getCandidateCount();
      let fetchedCandidates = [];
      
      for (let i = 0; i < count; i++) {
        let candidate = await contract.getCandidate(i);
        fetchedCandidates.push({ id: i, name: candidate.name, votes: candidate.voteCount });
      }
      setCandidates(fetchedCandidates);
    } catch (error) {
      console.error("Error fetching candidates from contract:", error);
    }
  };

  // const checkCandidateExists = async (id) => {
  //   try {
  //     console.log(`This is ID: ${id}`);
      
  //     const totalCandidates = await contract.candidates.length;
  //     console.log(totalCandidates)
      
  //     if (id < totalCandidates) {
  //       return true;
  //     } else {
  //       console.error("Invalid candidate ID:", id);
  //       return false;
  //     }
  //   } catch (error) {
  //     console.error("Error checking candidate ID:", id, error);
  //     return false;
  //   }
  // };
  
  const voteForCandidate = async (candidateId) => {
    console.log("Voting for candidate ID:", candidateId);
  
    if (!contract) {
      alert("Contract is not loaded!");
      return;
    }
  
    if (!account) {
      alert("Please connect your wallet first!");
      return;
    }
  
    try {
      const id = ethers.BigNumber.from(candidateId);
      const tx = await contract.voteForCandidate(id, { gasLimit: 500000 });
      console.log("Transaction sent:", tx);
      await tx.wait();
      alert(`Successfully voted for candidate ${candidateId}`);
      fetchCandidatesFromContract();
    } catch (error) {
      console.error("Error while voting:", error);
      alert("Voting failed! Check the console for more details.");
    }
  };
  
  return (
    <div className="flex flex-col gap-4">
      {candidates.map((candidate) => (
        <div
          key={candidate.id}
          className="flex flex-col bg-[#FCF5E5] justify-center border-2 border-transparent hover:border-black rounded-[8.5px] px-2 gap-2"
        >
          <div className="flex gap-4">
            <div className="text-lg font-bold">{candidate.name}</div>
            <div className="text-lg font-bold">ID: {candidate.id}</div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center justify-center">
              <Politician className="border-2 border-black rounded-full w-24 h-24 p-2" />
            </div>
            <div className="flex flex-col">
              <div className="p-2 flex gap-4">
                <div className="border-2 px-2 py-1 border-black rounded-[8.5px] font-semibold">
                  AGE: <span className="font-semibold">{candidate.age}</span>
                </div>
                <div className="border-2 p-1 border-black rounded-[8.5px] font-semibold">
                  Votes: {candidate.votes}
                </div>
              </div>
              <div className="p-2 text-center">
                <div className="border-2 border-black text-lg font-semibold">
                  Resume
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 text-center">
            <div className="border-2 border-black text-lg font-semibold">
              {candidate.organisation}
            </div>
          </div>
          <div className="p-2 text-center">
            <button
              onClick={() => voteForCandidate(candidate.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
