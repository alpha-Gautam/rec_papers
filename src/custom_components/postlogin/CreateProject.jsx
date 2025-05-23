import React, { useEffect, useState } from "react";
import { createProjectapi, mentorDataApi } from "../../api/user";
import { Message } from "@mui/icons-material";

const CreateProject = () => {
  const [formData, setFormData] = useState({
    editorName: localStorage.getItem("user_id") || "",
    mentorName: "",
    semester: "",
    topic: "",
    keywords: "",
    platforms: "",
    objective: "", 
    description: "",
    githubLink: ""
  });

  const [mentorList, setMentorList] = useState([]);
  const [createNotAllowed,setCreatNotAllowed] = useState(false);

   // If user is faculty then they are not able to create project, currently ;
  const semesterList = [
    { label: "1st", value: 1 },
    { label: "2nd", value: 2 },
    { label: "3rd", value: 3 },
    { label: "4th", value: 4 },
    { label: "5th", value: 5 },
    { label: "6th", value: 6 },
    { label: "7th", value: 7 },
    { label: "8th", value: 8 },
  ];
  
  

  useEffect(() => {


    
    const fetchMentorList = async () => {
      try {
        const response = await mentorDataApi();
        setMentorList(response.data);
      } catch (error) {
        console.error('Error fetching mentor list:', error);
      }
    };
    

    // const faculty = localStorage.getItem("role") === "true";
    setTimeout(()=>{
        // if(faculty){
        //   alert("Faculty are not able to create Project....!");
        //   setCreatNotAllowed(true);
        // }
        // else{
        // }
        fetchMentorList();
      },[1000])


  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      
      title: formData.topic,
      user: formData.editorName,
      mentor: formData.mentorName,
      semester:formData.semester,
      keyword: formData.keywords,
      platform: formData.platforms,
      objective: formData.objective,
      description: formData.description,
      github_link: formData.githubLink,
      status: "Initialized"
    };

    try {
      const response = await createProjectapi(data);
      if (response.status === 200) {
        alert("Project details submitted successfully!");
      }
    } catch (error) {
      console.error("Error submitting project:", error);
      alert("Failed to submit project. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 text-black min-h-screen flex flex-col">
      <header className="bg-white py-4 shadow-md text-center text-green-500 font-bold text-3xl">
        Create a New Project
      </header>

      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="topic">
                Project Title
              </label>
              <input
                type="text"
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="editorName">
                Name of the Author
              </label>
              <input 
                type="text"
                id="editorName"
                name="editorName"
                value={localStorage.getItem("username")}
                readOnly
                className="w-full px-4 py-2 rounded-lg bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="mentorName">
                Name of the Mentor
              </label>
              <select
                id="mentorName"
                name="mentorName"
                value={formData.mentorName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <option value="">Select a mentor</option>
                {mentorList.map((mentor) => (
                  <option key={mentor.uuid} value={mentor.uuid}>
                    {mentor.username}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="mentorName">
                Semester
              </label>
              <select
                id="semester"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <option value="">Select a semester</option>
                {semesterList.map(({ label, value }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="platforms">
              Platforms / Resource used
              </label>
              <input
                type="text"
                id="platform"
                name="platforms"
                value={formData.platforms}
                onChange={handleChange}
                required
                placeholder="Separate Platforms with commas"
                className="w-full px-4 py-2 rounded-lg bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="keywords">
                Keywords / Technical Stack
              </label>
              <input
                type="text"
                id="keywords"
                name="keywords"
                value={formData.keywords}
                onChange={handleChange}
                required
                placeholder="Separate keywords with commas"
                className="w-full px-4 py-2 rounded-lg bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="objective">
                Objective
              </label>
              <textarea
                id="objective"
                name="objective"
                value={formData.objective}
                onChange={handleChange}
                rows="2"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="description">
                Briefing about the Project
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="githubLink">
                GitHub Code Link
              </label>
              <input
                type="url"
                id="githubLink"
                name="githubLink"
                value={formData.githubLink}
                onChange={handleChange}
                
                className="w-full px-4 py-2 rounded-lg bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <button
              type="submit"
              disabled={createNotAllowed}
              className={`w-full py-3 ${createNotAllowed ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-green-500 text-white font-bold rounded-lg hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300"}`}
            >
              Submit Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
