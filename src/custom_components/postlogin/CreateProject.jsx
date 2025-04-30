import React, { useState } from "react";
import { createProjectapi } from "../../api/user";

const CreateProject = () => {
  const [formData, setFormData] = useState({
    editorName: "",
    mentorName: "",
    topic: "",
    keywords: "",
    objective: "",
    file: null,
    githubLink: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (data) => {
    console.log("Submitted Data:", data);
    const response = await createProjectapi(data);
    console.log(response);

    if (response.status === 200) {
      console.log("data is submitted");
      alert("Project details are submitted!");
    }
  };

  return (
    <div className="bg-gray-100 text-black min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white py-4 shadow-md text-center text-green-500 font-bold text-3xl">
        Create a New Project
      </header>

      {/* Scrollable Form Area */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const data = {
                project_uuid: formData.get("topic"),
                title: formData.get("topic"),
                user_uuid: formData.get("editorName"),
                mentor_uuid: formData.get("mentorName"),
                keyword: formData.get("keywords"),
                objective: formData.get("objective"),
                description: formData.get("description"),
                github_link: formData.get("githubLink"),
                status: formData.get("status") || "Initialized",
              };
              handleSubmit(data);
            }}
            className="grid grid-cols-1 gap-6"
          >
            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="Project Title"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-100 text-black border border-gray-300 focus:ring-2 focus:ring-green-400"
            />

            <input
              type="text"
              name="editorName"
              value={formData.editorName}
              onChange={handleChange}
              placeholder="Name of the Editor"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-100 text-black border border-gray-300 focus:ring-2 focus:ring-green-400"
            />

            <input
              type="text"
              name="mentorName"
              value={formData.mentorName}
              onChange={handleChange}
              placeholder="Name of the Mentor"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-100 text-black border border-gray-300 focus:ring-2 focus:ring-green-400"
            />

            <input
              type="text"
              name="keywords"
              value={formData.keywords}
              onChange={handleChange}
              placeholder="Keywords (separate with commas)"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-100 text-black border border-gray-300 focus:ring-2 focus:ring-green-400"
            />

            <input
              type="url"
              name="githubLink"
              value={formData.githubLink}
              onChange={handleChange}
              placeholder="GitHub Link"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-100 text-black border border-gray-300 focus:ring-2 focus:ring-green-400"
            />

            <textarea
              name="objective"
              value={formData.objective}
              onChange={handleChange}
              placeholder="Objective"
              rows="3"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-100 text-black border border-gray-300 focus:ring-2 focus:ring-green-400"
            ></textarea>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Project Description"
              rows="6"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-100 text-black border border-gray-300 focus:ring-2 focus:ring-green-400"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300"
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
