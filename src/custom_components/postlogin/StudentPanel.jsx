import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./StudentPanel.css";
import {ProjectViewApi} from "../../api/user"
import {ProjectViewPanel} from"./ProjectView"

const StudentPanel = () => {
  const [projectData, setProjectData] = useState([]);
  const [userData,setUserData] = useState({})

  const navigate = useNavigate();

  useEffect(()=>{

    setUserData({
      "username":localStorage.getItem("username"),
      "email":localStorage.getItem("email"),
      "college":localStorage.getItem("college"),
      "mobile":localStorage.getItem("mobile"),
      "user_id":localStorage.getItem("user_id"),
      "role":localStorage.getItem("role"),
      "department":localStorage.getItem("department")
    })
    

  },[])

  useEffect(() => {
    const fetchProjectList = async () => {
      try {
        const response = await ProjectViewApi();
        console.log(response.data);
        if (response.status === 200) {
          setProjectData(response.data);
        }
      } catch (error) {
        if (error.response) {
          console.error("Error data:", error.response.data);
          console.error("Error status:", error.response.status);
          console.error("Error headers:", error.response.headers);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error message:", error.message);
        }
      }
    };
    fetchProjectList();
  }, []);

  return (
    <div className="student-panel-container flex flex-col h-screen bg-gray-300">
      {/* Header Section */}
      <div className="h-32 bg-gray-600 flex px-10 items-center ">
        <div className="w-24 h-24 rounded-full bg-white overflow-hidden"> <img src="https://i.pinimg.com/280x280_RS/e1/08/21/e10821c74b533d465ba888ea66daa30f.jpg" alt="" /></div>
        <div className="ml-10 text-white text-lg">
          <p>user : {userData? userData["username"] : "User Name"}</p>
          <p>College : {userData? userData["college"] : "College Name"}</p>
          <p>Department : {userData? userData["department"] : "Department Name"}</p>
          
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content p-5 bg-slate-300 ">
        <h2 className="text-2xl font-bold mb-5">Research Papers</h2>
        <div className="card-container flex flex-col gap-5 border-2 border-blue-500 p-4 bg-white rounded-md shadow-md">
          {projectData.map((paper) => (
            <div
              className="card bg-white border rounded-lg shadow-md p-4"
              key={paper.id}
            >
              <div className="card-content flex flex-col gap-2">
                <h5 className="text-lg font-semibold">
                  <strong>Title:</strong> {paper.title}
                </h5>
                <h6 className="text-sm">
                  <strong>Author ID:</strong> {paper.user_uuid}
                </h6>
                <h6 className="text-sm">
                  <strong>Mentor ID:</strong> {paper.mentor_uuid}
                </h6>
                <button
                  className="self-start px-4 py-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                  onClick={() => {console.log("paper: ",paper); navigate(`/dashboard/project/${paper.id}`, { state: { project: paper } }); }}
                  >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentPanel;
