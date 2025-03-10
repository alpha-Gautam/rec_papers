import React, { useEffect, useState } from 'react';
import { projectDataApi, projectLogApi } from "../../api/user";
import { useNavigate } from "react-router-dom"; // Add this at the top with other imports

const ProjectViewPanel = () => {
    const [data, setData] = useState({});
    const [projectLog, setProjectLog] = useState([]);
    const [addProjectLog, setAddProjectLog] = useState(false);

    const navigate = useNavigate(); // Add this inside the `ProjectViewPanel` function before `useEffect`

    useEffect(() => {
        async function fetchData() {
            const url = window.location.href.split("/")[5];
            console.log("current url is-", window.location.href);
            console.log("url", url);
            const data = await projectDataApi(url);
            console.log("project data is: ", data);
            if (data.status === 200) {
                setData(data.data);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchLog() {
            const url = window.location.href.split("/")[5];
            const data = await projectLogApi(url);
            console.log("projectLogs data is: ", data);
            if (data.status === 202) {
                setProjectLog(data.data);
            }
            console.log("log.length", projectLog.length);
        }
        fetchLog();
    }, []);

    return (
        <div className="mentor_panel_container h-full w-full bg-gray-100 p-5">
            <button 
                onClick={() => navigate(-1)} 
                className="flex items-center gap-0 bg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-800 transition-all shadow-md mb-4"
            >
                ←
            </button>

            <div className="maincontent bg-gray-499 flex flex-col">
                <div className="text-gray-800 text-2xl font-semibold ">
                    Project Title: "<span className="text-gray-900 text-pretty font-bold text-2xl">{data["title"] || "No data found"}</span>"
                </div>

                <div className='flex flex-col gap-4 mt-5 text-lg'>
                    <div><strong>Author:</strong> <span>{data["user_uuid"] || "No data found"}</span></div>
                    <div><strong>Mentor:</strong> <span>{data["mentor_uuid"] || "No data found"}</span></div>
                    <div><strong>Technical Stack:</strong> <span>{data["keyword"] || "No data found"}</span></div>
                    
                    {/* Updated Code Section with Decorated Link */}
                    <div className=''>
                        <strong>Code: </strong> 
                        <span>
                            {data["github_link"] ? (
                                <a 
                                    href={data["github_link"]} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-blue-500 font-semibold no-underline hover:text-green-500 transition-all"
                                >
                                    {data["github_link"]}
                                </a>
                            ) : "No data found"}
                        </span>
                    </div>

                    <div className="col-span-2">
                        <strong>Project Description:</strong> 
                        <span><br/>{data["description"] || "No data found"}</span>
                    </div>
                    <div className="col-span-2">
                        <strong>Project Objective:</strong> 
                        <span><br/>{data["objective"] || "No data found"}</span>
                    </div>
                </div>

                <div className='mt-5 text-lg'>
                    <div className='flex justify-between'>
                        <strong>Project Log:</strong>
                        <button onClick={() => setAddProjectLog(true)} className='text-red-500 hover:text-red-800 text-3xl'>+</button>
                    </div>
                    <div className='mt-3'>
                        {projectLog.length > 0 ? (
                            <div>
                                {projectLog.map((log) => (
                                    <div key={log.id} className='flex flex-col border-b py-2'>
                                        <div><strong className='text-red-600'>Message   :</strong> {log["remark_by_mentor"]}</div>
                                        <div><strong className='text-red-600'>Date      :</strong> {new Date(log.created_at).toLocaleDateString()}</div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>No data found</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectViewPanel;
