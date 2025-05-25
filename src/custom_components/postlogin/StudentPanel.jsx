import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentPanel.css";
import { ProjectViewApi, projectFilterApi } from "../../api/user";

const StudentPanel = () => {
  const [projectData, setProjectData] = useState([]);
  const [userData, setUserData] = useState({});
  const [searchValue, setSearchValue] = useState(null);

  const navigate = useNavigate();

  const handleSearch = async () => {
    console.log("search value", searchValue)
    const filter_response = await projectFilterApi(searchValue);
    console.log("response",filter_response)
    if(filter_response.status===200){
      setProjectData(filter_response.data)
    }
  };

  useEffect(() => {
    setUserData({
      "username": localStorage.getItem("username"),
      "email": localStorage.getItem("email"),
      "college": localStorage.getItem("college"),
      "mobile": localStorage.getItem("mobile"),
      "user_id": localStorage.getItem("uuid"),
      "role": localStorage.getItem("role"),
      "department": localStorage.getItem("department")
    });
  }, []);

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
    <div className="student-panel-container  flex flex-col h-screen bg-gray-300">
      {/* Header Section */}
      {/* <div className="h-35 bg-gray-500 flex px-10 items-center ">
        <div className="w-24 h-24 rounded-full bg-white overflow-hidden"> <img src="https://i.pinimg.com/280x280_RS/e1/08/21/e10821c74b533d465ba888ea66daa30f.jpg" alt="" /></div>
        <div className="ml-10 text-white text-lg gap-2">
          <p>User Name : {userData ? userData["username"] : "User Name"}</p>
          <p>College : {userData ? userData["college"] : "College Name"}</p>
          <p>Department : {userData ? userData["department"] : "Department Name"}</p>
          <p>Role: {userData ? (userData["role"] === "true" ? "Faculty" : "Student") : "Role"}</p>
        </div>
      </div> */}

      {/* Main Content */}
      <main className="main-content py-2 px-3 bg-gray-200 ">
        <div className="flex flex-col sm:flex-row justify-between items-center  h-[50px] rounded-sm bg-gray500 my-3 px-3 ">
          <div className="">
            <h2 className="text-3xl font-bold text-nowrap">Research Papers</h2>
          </div>
          
          <div className="flex  items-center bg-gray100 rounded-3xl h-full w-[40%] border-2 bordergreen-400"> 

            <div className="flex justify-center items-center bg-gray-100 rounded-3xl h-full w-[60%] border-2 border-green-400">
              <input type="text"
              placeholder="Search by title, authors, etc.." 
              className="w-full h-full rounded-3xl px-2" 
              onChange={(e) => setSearchValue(e.target.value)} />
            </div>

            <div className="flex justify-center items-center bg-gray-100 rounded-3xl h-full w-[20%] border-2 border-green-400">
                <button className="hover:scale-110" onClick={handleSearch} disabled={searchValue===null}>
                  Search</button>
            </div>
          
          </div>

          <div></div>

        </div>
        <div className="card-container flex flex-col gap-5 border-2 border-blue-500 p-4 bg-white rounded-md shadow-md">
          {projectData.map((paper) => (
            <div
              className=" bg-white border rounded-lg shadow-md p-4 flex flex-row justify-between"
              key={paper.uuid}
            >
            {/* <div
              className="card bg-white border rounded-lg shadow-md p-4 flex flex-row justify-between"
              key={paper.uuid}
            > */}
              <div className="card-content flex flex-col gap-2">
                <h5 className="text-lg font-semibold">
                  <strong></strong> {paper.title}
                </h5>
                <h6 className="text-sm">
                  <strong>Author :</strong> {paper.user}
                </h6>
                <h6 className="text-sm">
                  <strong>Supervisor :</strong> {paper.mentor}
                </h6>
                <button
                  className="self-start px-4 py-2 mt-2 bg-blue-600 text-white rounded hover:bg-blue-800"
                  onClick={() => {console.log("paper: ",paper); navigate(`/dashboard/project/${paper.uuid}`, { state: { project: paper } }); }}
                  >
                  View More
                </button>
              </div>
              <div className="flex justify-end p-2 w-[20%] text-[20px]">
                <div className="flex flex-col gap-2">
                  
                Created At : {new Date(paper.created_at).toLocaleDateString()}
                <div className="flex flex-row gap-2"><strong>Sem: </strong><p>{ paper.semester}</p></div>
                {paper["verified"]?(<strong className='text-blue-600'>Verified</strong>):(<strong className='text-red-600'>Not Verified</strong>)}

                </div>
                
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentPanel;
