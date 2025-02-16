import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CandidateDashboard() {
  const { id } = useParams(); // Get the candidate ID from URL
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch candidate details
  const fetchCandidate = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/candidate/${id}`);
      setCandidate(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching candidate details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCandidate();
  }, [id]);

  if (loading) {
    return <h2 className="text-center text-lg font-semibold">Loading candidate details...</h2>;
  }

  if (!candidate) {
    return <h2 className="text-center text-lg font-semibold text-red-500">Candidate not found</h2>;
  }

  return (
    <div className="bg-[#FCF5E5] h-screen flex flex-col justify-center items-center font-roboto_mono">
      <div className="bg-[#3B3C36] text-white p-6 rounded-lg shadow-lg w-[400px] text-center">
        <h1 className="text-3xl font-bold text-[#F9B572]">Candidate Dashboard</h1>
        <div className="mt-6 space-y-4">
          <p className="text-lg"><strong>ID:</strong> {candidate.id}</p>
          <p className="text-lg"><strong>Name:</strong> {candidate.name}</p>
          <p className="text-lg"><strong>Age:</strong> {candidate.age}</p>
          <p className="text-lg"><strong>Organisation:</strong> {candidate.organisation}</p>
          <p className="text-xl font-semibold text-[#7ED957]">
            <strong>Votes:</strong> {candidate.votes}
          </p>
        </div>
        <button 
          onClick={fetchCandidate} 
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Refresh Votes
        </button>
      </div>
    </div>
  );
}
