import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentPanel.css";
import { ProjectViewApi, projectFilterApi } from "../../api/user";

const FacultyProfile = (user_details) => {
  const [projectData, setProjectData] = useState([]);
  const [userData, setUserData] = useState({});
  const [searchValue, setSearchValue] = useState(null);

  const navigate = useNavigate();

  const handleSearch = async () => {
    const filter_response = await projectFilterApi(searchValue);
    if (filter_response.status === 200) {
      setProjectData(filter_response.data);
    }
  };

  useEffect(() => {
    setUserData({
      username: localStorage.getItem("username"),
      email: localStorage.getItem("email"),
      college: localStorage.getItem("college"),
      mobile: localStorage.getItem("mobile"),
      user_id: localStorage.getItem("uuid"),
      role: localStorage.getItem("role"),
      department: localStorage.getItem("department"),
    });
  }, []);

  useEffect(() => {
    const fetchProjectList = async () => {
      try {
        const response = await ProjectViewApi();
        if (response.status === 200) {
          const data = response.data;
          const fdata = data.filter((item) =>
            item.p_user.includes(user_details.user_details.user_id)
          );
          setProjectData(fdata);
        }
      } catch (error) {
        console.error("API error:", error);
      }
    };
    fetchProjectList();
  }, []);

  return (
    <div className="student-panel-container flex h-screen">
      {/* Left Panel: Profile Details */}
      <div className="w-[25%] bg-gray-100 p-6 overflow-y-auto border-r">
        <div className="flex flex-col">
          <div className="w-24 h-24 rounded-full bg-white overflow-hidden mb-4 mx-auto">
            <img
              src="https://i.pinimg.com/280x280_RS/e1/08/21/e10821c74b533d465ba888ea66daa30f.jpg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold mb-4 border-b pb-2">Profile Details</h2>
          <div className="text-sm space-y-3">
            <p><strong>Name:</strong> {userData?.username}</p>
            <p><strong>Email:</strong> {userData?.email}</p>
            <p><strong>College:</strong> {userData?.college}</p>
            <p><strong>Department:</strong> {userData?.department}</p>
            <p><strong>Phone:</strong> {userData?.mobile}</p>
            <p><strong>Role:</strong> {userData?.role === "true" ? "Faculty" : "Student"}</p>
            <p><strong>Projects Ongoing:</strong>{}</p>
            <p><strong>Projects Completed:</strong>{}</p>
          </div>
        </div>
      </div>

      {/* Right Panel: Research Papers */}
      <div className="w-[75%] bg-gray-200 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Research Papers</h2>
        </div>

        <div className="card-container flex flex-col gap-5">
          {projectData.map((paper) => (
            <div
              className="bg-white border rounded-lg shadow-md p-4 flex flex-row justify-between"
              key={paper.uuid}
            >
              <div className="card-content flex flex-col gap-2">
                <h5 className="text-lg font-semibold">{paper.title}</h5>
                <h6 className="text-sm"><strong>Author :</strong> {paper.user}</h6>
                <h6 className="text-sm"><strong>Supervisor :</strong> {paper.mentor}</h6>
                <button
                  className="self-start px-4 py-2 mt-2 bg-blue-600 text-white rounded hover:bg-blue-800"
                  onClick={() =>
                    navigate(`/dashboard/project/${paper.uuid}`, {
                      state: { project: paper },
                    })
                  }
                >
                  View More
                </button>
              </div>
              <div className="flex justify-end items-center w-[30%] text-sm text-right">
                <div>
                  <span className="block font-medium">Created At:</span>
                  {new Date(paper.created_at).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
