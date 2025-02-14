import { useState } from "react";
import axios from "axios";

export default function DetailedPage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    organisation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/submit", formData);
      alert(response.data.message);
      setFormData({ name: "", age: "", organisation: "" }); // Reset form after submission
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form");
    }
  };

  return (
    <div className="bg-[#FCF5E5] h-screen flex justify-center items-center font-roboto_mono">
      <div className="flex flex-col gap-[20px]">
        <div className="font-semibold text-[30px] text-center">Details</div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[15px]">
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="fname" className="text-[17px] font-400">Name</label>
              <input
                type="text"
                id="fname"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-96 px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-[#3B3C36] placeholder-[#FCF5E5] text-white"
              />
            </div>

            <div className="flex gap-[2px] w-96">
              <div className="flex w-[50%] gap-[8px] flex-col">
                <label htmlFor="age" className="text-[17px] font-400">Age</label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Age"
                  className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-[#3B3C36] placeholder-[#FCF5E5] text-white"
                />
              </div>
              <div className="flex flex-col gap-[8px] w-[50%]">
                <label htmlFor="Organisation" className="text-[17px] font-400">Organisation</label>
                <input
                  type="text"
                  id="Organisation"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleChange}
                  placeholder="Organisation"
                  className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-[#3B3C36] placeholder-[#FCF5E5] text-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
