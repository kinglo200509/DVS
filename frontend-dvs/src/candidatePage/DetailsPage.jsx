import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function DetailedPage() {
  const [formData, setFormData] = useState({ name: "", age: "", organisation: "" });
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.age || !formData.organisation) {
      alert("All fields are required!");
      return;
    }
  
    if (isNaN(formData.age)) {
      alert("Age must be a number!");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/submit", formData);
      alert("User data saved successfully");
      setFormData({ name: "", age: "", organisation: "" });
      fetchUsers();

      if (response.data && response.data.candidateId) { // ✅ Change id to candidateId
        console.log(response.data.candidateId);
        navigate(`/CandidatePage/${response.data.candidateId}`);
      } else {
        console.log("No valid ID returned");
        navigate("/CandidatePage");
      }
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form");
    }
  };
  
  return (
    <div className="bg-[#FCF5E5] h-screen flex flex-col justify-center items-center font-roboto_mono">
      <div className="flex flex-col gap-[20px]">
        <div className="font-semibold text-[30px] text-center">Details</div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[15px]">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-96 px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-[#3B3C36] text-white"
            />
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
              className="w-96 px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-[#3B3C36] text-white"
            />
            <input
              type="text"
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
              placeholder="Organisation"
              className="w-96 px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-[#3B3C36] text-white"
            />
            <button type="submit" className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg">
              Submit
            </button>
          </div>
        </form>

        {/* Display Users */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">User List</h2>
          <ul className="mt-3 space-y-2">
            {users.map((user, index) => (
              <li key={index} className="bg-gray-200 p-3 rounded-lg">
                {user.name} - {user.age} - {user.organisation}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
