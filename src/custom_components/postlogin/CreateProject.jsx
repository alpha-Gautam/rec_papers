import React, { useEffect, useState } from "react";
import { createProjectapi, mentorDataApi } from "../../api/user";

const CreateProject = () => {
  const [formData, setFormData] = useState({
    editorName: localStorage.getItem("user_id") || "",
    mentorName: "",
    topic: "",
    keywords: "",
    platforms: "",
    objective: "", 
    description: "",
    githubLink: ""
  });

  const [mentorList, setMentorList] = useState([]);
  const [createNotAllowed, setCreateNotAllowed] = useState(false);

  useEffect(() => {
    const fetchMentorList = async () => {
      try {
        const response = await mentorDataApi();
        setMentorList(response.data);
      } catch (error) {
        console.error('Error fetching mentor list:', error);
      }
    };

    const faculty = localStorage.getItem("role") === "true";
    setTimeout(() => {
      if (faculty) {
        alert("Faculty are not able to create Project....!");
        setCreateNotAllowed(true);
      } else {
        fetchMentorList();
      }
    }, 1000);
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
    <div className="bg-white text-black min-h-screen flex flex-col">
      <header className="bg-white py-4 shadow-md text-center text-green-500 font-bold text-3xl">
        Create a New Project
      </header>

      <div className="flex-1 overflow-y-auto px-6 py-10 bg-gray-100">
        <div className="bg-gray-100 border border-gray-200 p-10 rounded-xl shadow-md w-full max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <FormInput
              label="Project Title"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
            />

            <FormInput
              label="Name of the Author"
              name="editorName"
              value={localStorage.getItem("username")}
              readOnly
            />

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="mentorName">
                Name of the Mentor
              </label>
              <select
                id="mentorName"
                name="mentorName"
                value={formData.mentorName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <option value="">Select a mentor</option>
                {mentorList.map((mentor) => (
                  <option key={mentor.uuid} value={mentor.uuid}>
                    {mentor.username}
                  </option>
                ))}
              </select>
            </div>

            <FormInput
              label="Platforms / Resources Used"
              name="platforms"
              value={formData.platforms}
              onChange={handleChange}
              placeholder="Separate with commas"
              required
            />

            <FormInput
              label="Keywords / Technical Stack"
              name="keywords"
              value={formData.keywords}
              onChange={handleChange}
              placeholder="Separate with commas"
              required
            />

            <FormTextarea
              label="Objective"
              name="objective"
              value={formData.objective}
              onChange={handleChange}
              rows={2}
              required
            />

            <FormTextarea
              label="Briefing about the Project"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              required
            />

            <FormInput
              label="GitHub Code Link"
              name="githubLink"
              type="url"
              value={formData.githubLink}
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={createNotAllowed}
              className={`w-full py-3 text-lg font-bold rounded-lg transition ${
                createNotAllowed
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-600 text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
              }`}
            >
              Submit Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Reusable input component
const FormInput = ({ label, name, type = "text", ...props }) => (
  <div>
    <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor={name}>
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
      {...props}
    />
  </div>
);

// Reusable textarea component
const FormTextarea = ({ label, name, rows, ...props }) => (
  <div>
    <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor={name}>
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      rows={rows}
      className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
      {...props}
    />
  </div>
);

export default CreateProject;
