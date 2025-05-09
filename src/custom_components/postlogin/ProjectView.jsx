import React, { useEffect, useState } from 'react';
import { projectDataApi, projectLogApi, ProjectFilesApi} from "../../api/user";
import { useNavigate } from "react-router-dom";
import PopUpPlus from "./ProjectLog"; // Import the popup component
import EditPopup from "./ProjectEditPopup"
import pdf_image from "../../assets/images/pdf_image.jpg"

const ProjectViewPanel = () => {
    const [pro_Edit,setPro_Edit] = useState(false)
    const [projectItem,setprojectItem] = useState("")
    const [ProjectItemValue,setProjectItemValue] = useState("")
    const [user_auth,setUser_auth] = useState(false)

    const [projectFiles,setProjectFiles] = useState([])

    const [data, setData] = useState({});
    const [projectLog, setProjectLog] = useState([]);
    const [addProjectLog, setAddProjectLog] = useState(false);
    const [pro_Log, setPro_Log] = useState(false)

    const navigate = useNavigate();

    const projectId = window.location.href.split("/")[5];
    console.log("project uuid is : ",projectId)




    async function fetchData() {
        const responsedata = await projectDataApi(projectId);
        if (responsedata.status === 200) {
            setData(responsedata.data);

            const fileResponse = await ProjectFilesApi(projectId)
            if(fileResponse.status===200){
                setProjectFiles(fileResponse.data)
            }

        }
    }
    useEffect(() => {
       
        fetchData();
    }, [pro_Edit]);

    const fetchLog = async () => {
        const responsedata = await projectLogApi(projectId);
        if (responsedata.status === 202) {
            setProjectLog(responsedata.data);
        }
    };

    useEffect(() => {
        const user = localStorage.getItem("user_id");
        if (data["p_user"]?.includes(user)) {
            setPro_Log(true);
            setUser_auth(true)
            fetchLog();
        }

    }, [data]);


    const handleprojectLogCreate = ()=>{
        console.log("role check ",localStorage.getItem("role"))
        console.log("project mentor check ",data["mentor"])
        if(localStorage.getItem("role")==="true"){
            setAddProjectLog(true)
        }
        else{
        alert("Student are not allow to create Log !");
        }
    }

    const handleEditClick = (item, value) => {
        if (!pro_Edit) { // Only fetch if not already in edit mode
            setPro_Edit(true);
            setprojectItem(item);
            setProjectItemValue(value);
        }
    };

    return (
        <div className="mentor_panel_container h-full w-full bg-gray-100 p-5">
            <button 
                onClick={() => navigate(-1)} 
                className="flex items-center gap-0 bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-800 transition-all shadow-md mb-4"
            >
                ←
            </button>

            <div className="maincontent bg-gray-499 flex flex-col">
                <div className="text-gray-800 text-2xl font-semibold">
                    Project Title: "<span className="text-gray-900 font-bold text-2xl">{data["title"] || "No data found"}</span>"
                </div>

                <div className='flex flex-col gap-4 mt-5 text-lg'>
                    <div>
                        <strong>Author:</strong> <span>{data["user"] || "No data found"}</span>
                        
                    </div>
                    <div>
                        <strong>Mentor:</strong> <span>{data["mentor"] || "No data found"}</span>
                        </div>
                    <div className='flex flex-col border-2 min-h-[100px] '>
                        <strong>Platform Used:</strong> <span className='ml-10 my-1 bg-green-100 p-1'>{data["platform"] || "No data found"}</span>

                        {user_auth&&<button className='w-[50px] h-[30px] bg-blue-500 rounded-lg' 
                        onClick={() => handleEditClick("platform", data["platform"])}> 
                        Edit </button>}
                    </div>
                    <div className='flex flex-col border-2 min-h-[100px] '>
                        <strong>Technical Stack:</strong> <span className='ml-10 my-1 bg-green-100 p-1'>{data["keyword"] || "No data found"}</span>

                        {user_auth&&<button className='w-[50px] h-[30px] bg-blue-500 rounded-lg' 
                        onClick={() => handleEditClick("keyword", data["keyword"])}> 
                        Edit </button>}
                    </div>
                    {/* <div>
                        <strong>Technical Stack:</strong> <span>{data["keyword"] || "No data found"}</span>
                        <button className='w-[50px] h-[40px] bg-blue-500 rounded-lg' 
                        onClick={()=>{setPro_Edit(true);setprojectItem("keyword");setProjectItemValue(data["keyword"]) }}> 
                        Edit </button>
                    </div> */}
                    
                    <div className='flex flex-col border-2 min-h-[100px] '>
                        <strong>Code: </strong> 
                        <span>
                            {data["github_link"] ? (
                                <a 
                                    href={data["github_link"]} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-blue-500 font-semibold hover:text-green-500 transition-all"
                                >
                                    {data["github_link"]}
                                </a>
                            ) : "No data found"}
                        </span>
                        {user_auth&&<button className='w-[50px] h-[40px] bg-blue-500 rounded-lg' 
                        
                        onClick={() => handleEditClick("github_link", data["github_link"])}> 
                        Edit </button>}
                    </div>

                    <div className='flex flex-col border-2 min-h-[100px] '>
                        <strong>Project Description:</strong> 
                        <span><br />{data["description"] || "No data found"}</span>
                        {user_auth && <button className='w-[50px] h-[40px] bg-blue-500 rounded-lg' 
                        onClick={() => handleEditClick("description", data["description"])}> 
                        Edit </button>}
                    </div>
                    <div className='flex flex-col border-2 min-h-[100px] '>
                        <strong>Project Objective:</strong> 
                        <span><br />{data["objective"] || "No data found"}</span>
                        {user_auth && <button className='w-[50px] h-[40px] bg-blue-500 rounded-lg' 
                        onClick={() => handleEditClick("objective", data["objective"])}> 
                        Edit </button>}
                    </div>
                </div>
                
                <div className='flex  my-3'>
                        <strong className="text-nowrap">Projects Files :</strong>
                        
                        {projectFiles.length>0? <div>
                            {projectFiles.map((filesdata,index)=>(
                                <div>
                                <div>
                                    {index+1} : 
                                    {filesdata["file"].includes('.pdf') ? (
                                        <div className='flex h-[100px] w-[100px]'>
                                        <a 
                                            href={filesdata["file"]} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="h-[100px] w-[100px]"
                                        >
                                            <img src={pdf_image} alt="PDF Icon" className="h-full w-full object-cover" />
                                        </a>
                                        </div>
                                    ) : (
                                        <div className='h-[100px] w-[100px]'>
                                        <img src={filesdata["file"]} alt="Project File" />
                                        </div>
                                    )}
                                </div>
                                <div>Message : {filesdata["message"]}</div>
                                </div>
                            ))}
                        </div>:
                            <div>
                                No file available for this project
                            </div>}
                </div>

               {pro_Log&& <div className='mt-5 text-lg'>
                    <div className='flex justify-between items-center mb-3'>
                        <strong>Project Log:</strong>
                        <button 
                            onClick={handleprojectLogCreate} 
                            // onClick={() => setAddProjectLog(true)} 
                            className='text-red-500 hover:text-red-800 text-3xl'
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
                                            <td className="py-2 px-4 border-b">{log["remark_by_mentor"]}</td>
                                            <td className="py-2 px-4 border-b">{log["current_status"]}</td>
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
                </div>}
            </div>

            {pro_Edit && <EditPopup
            onClose={()=>setPro_Edit(false)}
            project_id={data["uuid"]}
            item = {projectItem}
            itemValue={ProjectItemValue}
            />}

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
