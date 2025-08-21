import React, { useEffect, useState } from "react";
import {
  projectDataApi,
  projectLogApi,
  ProjectFilesApi,
  UploadFileApi,
  deleteFileAPI,
  projectVerifyAPI,
  fileVisibilityAPI,
} from "../../api/user";
import { useNavigate } from "react-router-dom";
import PopUpPlus from "./ProjectLog"; // Import the popup component
import EditPopup from "./ProjectEditPopup";
import pdf_image from "../../assets/images/pdf_image.jpg";
import { ChIconAddCircle } from "../../assets/images/icon";
import { Loader2 } from "lucide-react";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import SchoolIcon from "@mui/icons-material/School";
import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Typography,
} from "@mui/material";
import PDFIcon from "../../assets/icons/PDF";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  
} from "../../components/UI/accordion"
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import toast from "react-hot-toast";
const collaborators=[
    {
        college: "Rajkiya Engineering College Sonbhadra",
        students: ["Abhinav Maurya", "Shashank Dwivedi"],
        mentor: "Dr. Anurag Sewak",
    },
    
]

const ProjectViewPanel = () => {
  const [pro_Edit, setPro_Edit] = useState(false);
  const [projectItem, setprojectItem] = useState("");
  const [ProjectItemValue, setProjectItemValue] = useState("");
  const [user_auth, setUser_auth] = useState(false);
  const [editMode, setEditMde] = useState(false);
  const [showFileDataPopup, setShowFileDataPopup] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileLabel, setFileLabel] = useState("");
  const [uploading, setUploading] = useState(false);

  const [userRole, setUserRole] = useState(false);

  const [projectFiles, setProjectFiles] = useState([]);

  const [data, setData] = useState({});
  const [projectLog, setProjectLog] = useState([]);
  const [addProjectLog, setAddProjectLog] = useState(false);
  const [pro_Log, setPro_Log] = useState(false);

  const navigate = useNavigate();

  const projectId = window.location.href.split("/")[5];
  const current_user = localStorage.getItem("user_id");
  console.log("project uuid is : ", projectId);

  async function fetchData() {
    const responsedata = await projectDataApi(projectId);
    if (responsedata.status === 200) {
      setData(responsedata.data);

      const data = {
        project_id: projectId,
        user_id: current_user,
      };
      const fileResponse = await ProjectFilesApi(data);
      if (fileResponse.status === 200) {
        setProjectFiles(fileResponse.data);
      }
    }
  }
  useEffect(() => {
    fetchData();
  }, [pro_Edit]);

  const handleProjectVerification = async () => {
    const data = {
      project: projectId,
      user: current_user,
      verification: "",
    };
    try {
      const response = await projectVerifyAPI(data);
      if (response.status === 200) {
        alert("Project Varification status is updated!");
      } else {
        alert("something went wrong!", response.message);
      }
    } catch {
      alert("something went wrong!/ Account is not verified");
    } finally {
      fetchData();
    }
  };
  const handleProjectVisibility = async () => {
    const data = {
      project: projectId,
      user: current_user,
      visibility: "",
    };
    try {
      const response = await projectVerifyAPI(data);
      if (response.status === 200) {
        alert("Project Visibility status is updated!");
      } else if (response.status === 201) {
        // toast.error("Project is not verified");
        alert("Project is not verified! Project Verification Required", response.data.message);
      }
    } catch {
      alert("something went wrong!/ Account is not verified");
    } finally {
      fetchData();
    }
  };
  const handleFileVisibility = async (file_uuid) => {
    const data = {
      file: file_uuid,
      user: current_user,
      visibility: "",
    };
    try {
      const response = await fileVisibilityAPI(data);
      if (response.status === 200) {
        alert("File Visibility status is updated!");
      } else {
        alert("something went wrong!", response.message);
      }
    } catch {
      alert("something went wrong!/ Account is not verified");
    } finally {
      fetchData();
    }
  };

  const fetchLog = async () => {
    const responsedata = await projectLogApi(projectId);
    if (responsedata.status === 202) {
      setProjectLog(responsedata.data);
    }
  };

  useEffect(() => {
    setUserRole(localStorage.getItem("role"));
    console.log("role check ", userRole);
    const user = localStorage.getItem("user_id");
    if (data["p_user"]?.includes(user)) {
      setPro_Log(true);
      setUser_auth(true);
      fetchLog();
    }
  }, [data]);

  const handleprojectLogCreate = () => {
    console.log("project mentor check ", data["mentor"]);
    if (userRole === "true") {
      setAddProjectLog(true);
    } else {
      alert("Student are not allow to create Log !");
    }
  };

  const handleEditClick = (item, value) => {
    if (!pro_Edit) {
      // Only fetch if not already in edit mode
      setPro_Edit(true);
      setprojectItem(item);
      setProjectItemValue(value);
    }
  };

  const handleFileUpload = async (event) => {
    if (selectedFile) {
      // You can perform actions with the file here, such as uploading it
      console.log("Selected file:", selectedFile);
      setUploading(true);
      // Example: Create a FormData object to send the file to an API
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("message", fileLabel);
      const response = await UploadFileApi(projectId, formData);
      if (response.status === 200 || response.status === 201) {
        alert("File is uploaded successfully !");
        fetchData();
        setUploading(false);
        setShowFileDataPopup(false);
        setFileLabel("");
      } else {
        alert("File Uploading Failed !");
        setUploading(false);
      }

      // You can then use your API to upload the file
      // Example: await uploadFileApi(formData);
    } else {
      console.log("No file selected");
      alert("Please select a file to upload.");
      setUploading(false);
    }
  };

  const handleFileDelete = async (file_id) => {
    const response = await deleteFileAPI(file_id);
    if (response.status === 200 || response.status === 2001) {
      alert("File Deletion Successful !");
      fetchData();
    } else {
      alert("File Deletion Failed !");
    }
  };

  return (
    <div className="mentor_panel_container h-full w-full bg-gray-50 p-5">
      <div className="flex justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-0 bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-800 transition-all shadow-md mb-4"
        >
          ←
        </button>
        <div>
        {user_auth && (
          <button
            onClick={() => setEditMde(!editMode)}
            className={`flex transition-all hover:scale-110 shadow-md bg-gray-500 p-2 h-[50px] rounded-full text-white ${
              editMode ? "bg-red-600" : ""
            }`}
          >
            <EditTwoToneIcon className="w-6 h-6" />
            {/* {editMode ? <p>Disable Edit Mode</p> : <p>Enable Edit Mode</p>} */}
          </button>
          
          )}
          
          
        </div>
      </div>

      <div className="maincontent bg-gray-499 flex flex-col gap-4">
        <div className="flex gap-2 items-start">
          <h1 className="text-gray-900 font-bold text-2xl">
            {data["title"] || "No data found"}
          </h1>
          <div className="flex gap-1">
            {data["public"] ? (
              <div className="border border-green-500 text-green-500 px-2 py-1 rounded-full text-xs font-semibold">
                Public
              </div>
            ) : (
              <div className="border border-red-500 text-red-500 px-2 py-1 rounded-full text-xs font-semibold">
                Private
              </div>
            )}
            {data["verified"] ? (
              <div className="border border-green-500 text-green-500 px-2 py-1 rounded-full text-xs font-semibold">
                Verified
              </div>
            ) : (
              <div className="border border-red-500 text-red-500 px-2 py-1 rounded-full text-xs font-semibold">
                Not Verified
              </div>
            )}
          </div>
                   {(editMode && userRole === "true")&&(!data["verified"]?(<button onClick={handleProjectVerification} className='px-1 h-[30px] bg-blue-500 rounded-sm'>Click to verify</button>):(<button onClick={handleProjectVerification} className='px-1 h-[30px] bg-red-500 rounded-lg'>Click to Un-verify</button>))}
                 {(editMode && userRole === "true")&&(<button onClick={handleProjectVisibility} className='px-1 h-[30px] bg-blue-500 rounded-sm'>Click to change Visibility</button>)}
          {/* <div className=' flex flex-col text-nowrap'>
          </div>
          <div className=' flex flex-col text-nowrap'>
          </div> */}
        </div>
        <div className="grid grid-cols-12 gap-4 justify-between">
          <div className="col-span-12 md:col-span-8 flex flex-col gap-4 border-r pr-4">
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <div className="text-nowrap flex items-center gap-1 text-gray-700">
                  <PersonIcon className="w-4 h-4" />
                  <span>
                    Author:{" "}
                    <span className="font-semibold text-gray-800">
                      {data["user"] || "No data found"}
                    </span>
                  </span>
                </div>
                <div className="text-nowrap flex items-center gap-1 text-gray-700">
                  <SupervisedUserCircleIcon className="w-4 h-4" />
                  <span>
                    Mentor:{" "}
                    <span className="font-semibold text-gray-800">
                      {data["mentor"] || "No data found"}
                    </span>
                  </span>
                </div>
                <div className="text-nowrap flex items-center gap-1 text-gray-700">
                  <AccountBalanceIcon className="w-4 h-4" />
                  <span>
                    Institute:{" "}
                    <span className="font-semibold text-gray-800">
                      {data["college"] || "No data found"}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-1 text-gray-700">
                  <CalendarTodayIcon className="w-4 h-4" />
                  <span className="text-gray-700">Created Date:</span>{" "}
                  <span className="text-gray-800">
                    {new Date(data["created_at"]).toLocaleDateString() ||
                      "No data found"}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-gray-700">
                  <SchoolIcon className="w-4 h-4" />
                  <span>
                    Sem:{" "}
                    <span className="font-semibold text-gray-800">
                      {data.semester || "No data found"}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <strong>Objective: </strong>
              <span className="">{data["objective"] || "No data found"}</span>
              {editMode && (
                <button
                  // className="w-[50px] h-[40px] bg-blue-500 rounded-lg"
                  onClick={() =>
                    handleEditClick("objective", data["objective"])
                  }
                >
                  <EditTwoToneIcon className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="">
              <strong>Description: </strong>
              <span className="">{data["description"] || "No data found"}</span>
              {editMode && (
                <button
                  // className="w-[50px] h-[40px] bg-blue-500 rounded-lg"
                  onClick={() =>
                    handleEditClick("description", data["description"])
                  }
                >
                  <EditTwoToneIcon className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="flex flex-col gap-4  min-h-[100px] ">
              <strong className="text-nowrap">Files :</strong>

              <div className="flex gap-4 ">
                {projectFiles.map((filesdata, index) => (
                  <div
                    className="flex flex-col gap-4 border rounded-lg px-4 py-2"
                    key={index}
                  >
                    {/* {editMode && (
                      <button
                        className="p-1 bg-blue-500 rounded-lg"
                        onClick={() => handleFileVisibility(filesdata["uuid"])}
                      >
                        Change visibility
                      </button>
                    )} */}

                    <div className="flex overflow-hidden">
                      {filesdata["file"].includes(".pdf") ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            // Use an iframe viewer or Google PDF Viewer to display PDF
                            const viewerUrl = `https://docs.google.com/viewerng/viewer?url=${filesdata["file"]}`;
                            window.open(viewerUrl, "_blank");
                          }}
                        >
                          <PDFIcon className="w-[70px] h-[70px]" />
                        </button>
                      ) : (
                        <div className="h-[80px] w-[80px]">
                          <button
                            className="h-[70px] w-[70px]"
                            onClick={(e) => {
                              e.preventDefault();

                              // Check if file is an image based on extension
                              const isImage =
                                /\.(jpe?g|png|gif|bmp|webp|svg)$/i.test(
                                  filesdata["file"]
                                );

                              if (isImage) {
                                // Create a new HTML document with the image embedded
                                const newWindow = window.open("");
                                newWindow.document.write(`
                                                                <html>
                                                                    <head>
                                                                        <title>Image Viewer</title>
                                                                        <style>
                                                                            body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background: #f0f0f0; }
                                                                            img { max-width: 100%; max-height: 100vh; object-fit: contain; }
                                                                        </style>
                                                                    </head>
                                                                    <body>
                                                                        <img src="${filesdata["file"]}" alt="Project File" />
                                                                    </body>
                                                                </html>
                                                            `);
                              }
                            }}
                          >
                            <img src={filesdata["file"]} alt="Project File" />
                          </button>
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex flex-col gap-0.5 text-sm">
                        <span>{filesdata["message"]}</span>
                        <span>
                          {new Date(filesdata.created_at).toLocaleDateString()}
                        </span>
                        <p className="mb-0">
                          {filesdata["public"] ? (
                            <span className="text-blue-600">Public</span>
                          ) : (
                            <span className="text-red-600">Private</span>
                          )}
                        </p>
                      </div>
                    </div>
                    {editMode && (
                      <div>
                        <button
                          className="p-1 h-[30px] bg-blue-500 rounded-sm mr-2 whitespace-nowrap"
                          onClick={() => handleFileVisibility(filesdata["uuid"])}
                        >
                          Change visibility
                        </button>

                        <button
                          className="w-[50px] h-[30px] bg-blue-500 rounded-sm"
                          onClick={() => handleFileDelete(filesdata.uuid)}
                      >
                        Delete
                      </button>
                      </div>
                    )}
                  </div>
                ))}

                {editMode && (
                  <>
                    <button
                      onClick={() => setShowFileDataPopup(true)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-4"
                    >
                      <ChIconAddCircle className="w-[20px] h-[20px]" />
                      Add file Data
                    </button>

                    {/* File Data Popup */}
                    {showFileDataPopup && (
                      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                          <h3 className="text-lg font-semibold mb-4">
                            Add File Data
                          </h3>

                          <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">
                              Select File:
                            </label>
                            <input
                              type="file"
                              onChange={(e) =>
                                setSelectedFile(e.target.files[0])
                              }
                              className="w-full border border-gray-300 rounded-md p-2"
                            />
                          </div>

                          <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">
                              File Label:
                            </label>
                            <input
                              type="text"
                              value={fileLabel}
                              onChange={(e) => setFileLabel(e.target.value)}
                              placeholder="Enter file label"
                              className="w-full border border-gray-300 rounded-md p-2"
                            />
                          </div>

                          <div className="flex justify-end space-x-3">
                            <button
                              onClick={() => {
                                setShowFileDataPopup(false);
                                setSelectedFile(null);
                                setFileLabel("");
                              }}
                              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                              Cancel
                            </button>
                            {uploading ? (
                              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                <Loader2 className="animate-spin" />
                              </button>
                            ) : (
                              <button
                                onClick={handleFileUpload}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                              >
                                Add File
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="col-span-4 flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="border-b pb-2">
                <Typography className="text-gray-700">
                  <strong>Platform Used:</strong>
                </Typography>
                <span className="text-gray-800">
                  {data["platform"] || "No data found"}
                </span>
                {editMode && (
                  <button
                    // className="w-[50px] h-[30px] bg-blue-500 rounded-lg"
                    onClick={() =>
                      handleEditClick("platform", data["platform"])
                    }
                  >
                    <EditTwoToneIcon className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="border-b pb-2">
                <Typography className="text-gray-700">
                  <strong>Technical Stack:</strong>
                </Typography>
                <span className="text-gray-800">
                  {data["keyword"] || "No data found"}
                </span>
                {editMode && (
                  <button
                    // className="w-[50px] h-[30px] bg-blue-500 rounded-lg"
                    onClick={() => handleEditClick("keyword", data["keyword"])}
                  >
                    <EditTwoToneIcon className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="border-b pb-2">
                <Typography className="text-gray-700"><strong>Code:</strong> </Typography>
                <span className="text-gray-800">
                  {data["github_link"] ? (
                    <a
                      href={data["github_link"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-semibold hover:text-green-500 transition-all"
                    >
                      {data["github_link"]}
                    </a>
                  ) : (
                    "No data found"
                  )}
                </span>
                {editMode && (
                  <button
                    className=""
                    onClick={() =>
                      handleEditClick("github_link", data["github_link"])
                    }
                  >
                    <EditTwoToneIcon className="w-4 h-4" />
                  </button>
                )}
              </div>
              {data["collaboration"] && <div className="pb-2">
                <Typography className="text-gray-700">
                  <strong>Collaborator:</strong>
                </Typography>
                 <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue="item-1"
                >
                  {collaborators.map((collab, index) => (
                    <AccordionItem value={`item-${index + 1}`} key={index}>
                      <AccordionTrigger>{collab.college}</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                          {collab.students.length > 0 && (
                            <span className="text-gray-800">
                              <strong>Members:</strong> {collab.students.join(", ")}
                            </span>
                          )}
                        </p>
                        <p>
                         {collab.mentor ? (
                          <span className="text-gray-800">
                            <strong>Co-Mentor:</strong> {collab.mentor}
                          </span>
                         ) : (
                          <span className="text-gray-800">No mentor found</span>
                         )}
                        </p>
                      </AccordionContent> 
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>}
            </div>
          </div>
        </div>

        {pro_Log && (
          <div className="mt-5 text-lg">
            <div className="flex justify-between items-center mb-3">
              <strong>Project Log:</strong>
              <button
                onClick={handleprojectLogCreate}
                // onClick={() => setAddProjectLog(true)}
                className="text-red-500 hover:text-red-800 text-3xl"
                title="Add Remark"
              >
                +
              </button>
            </div>

            {projectLog.length > 0 ? (
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-4 py-2">S.No.</th>
                    <th className="border px-4 py-2">Remark by Supervisor</th>
                    <th className="border px-4 py-2">Current Status</th>
                    <th className="border px-4 py-2">Date of Meeting</th>
                  </tr>
                </thead>
                <tbody>
                  {projectLog.map((log, index) => (
                    <tr key={log.id} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b">{index + 1}</td>
                      <td className="py-2 px-4 border-b">
                        {log["remark_by_mentor"]}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {log["current_status"]}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {new Date(log.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No data found</p>
            )}
          </div>
        )}
      </div>

      {pro_Edit && (
        <EditPopup
          onClose={() => setPro_Edit(false)}
          project_id={data["uuid"]}
          item={projectItem}
          itemValue={ProjectItemValue}
        />
      )}

      {addProjectLog && (
        <PopUpPlus
          onClose={() => setAddProjectLog(false)}
          onSuccess={fetchLog}
          projectId={projectId}
          mentor={data["mentor"]}
        />
      )}
    </div>
  );
};

export default ProjectViewPanel;