import React, { useState } from "react";

const CreateProject = () => {
  const [formData, setFormData] = useState({
    editorName: "",
    mentorName: "",
    topic: "",
    keywords: "",
    objective: "",
    file: null,
    githubLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add logic to send formData to the backend or process it
  };

  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col">
      {/* Fixed Header */}
      <header className="bg-gray-800 py-4 shadow-md text-center text-green-400 font-bold text-2xl">
        Create a New Project
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto">
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
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="editorName"
              >
                Name of the Editor
              </label>
              <input
                type="text"
                id="editorName"
                name="editorName"
                value={formData.editorName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="mentorName"
              >
                Name of the Mentor
              </label>
              <input
                type="text"
                id="mentorName"
                name="mentorName"
                value={formData.mentorName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="keywords"
              >
                Keywords
              </label>
              <input
                type="text"
                id="keywords"
                name="keywords"
                value={formData.keywords}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Separate keywords with commas"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="objective"
              >
                Objective
              </label>
              <textarea
                id="objective"
                name="objective"
                value={formData.objective}
                onChange={handleChange}
                rows="2"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="description"
              >
                Briefing about the Project
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="githubLink"
              >
                GitHub Code Link
              </label>
              <input
                type="url"
                id="githubLink"
                name="githubLink"
                value={formData.githubLink}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-2 font-bold">
                Insert Content
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-600 file:text-white hover:file:bg-gray-500"
              />
              {formData.file && (
                <p className="mt-2 text-sm text-gray-400">
                  File Selected: {formData.file.name}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-300"
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
