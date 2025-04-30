import React, { useEffect, useState } from 'react';
import { projectDataApi, projectLogApi } from "../../api/user";
import { useNavigate } from "react-router-dom";
import PopUpPlus from "./PopUpPlus"; // Import the popup component

const ProjectViewPanel = () => {
    const [data, setData] = useState({});
    const [projectLog, setProjectLog] = useState([]);
    const [addProjectLog, setAddProjectLog] = useState(false);

    const navigate = useNavigate();

    const projectId = window.location.href.split("/")[5];

    useEffect(() => {
        async function fetchData() {
            const responsedata = await projectDataApi(projectId);
            if (responsedata.status === 200) {
                setData(responsedata.data);
            }
        }
        fetchData();
    }, [projectId]);

    const fetchLog = async () => {
        const responsedata = await projectLogApi(projectId);
        if (responsedata.status === 202) {
            setProjectLog(responsedata.data);
        }
    };

    useEffect(() => {
        fetchLog();
    }, [projectId]);

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
                    <div><strong>Author:</strong> <span>{data["user"] || "No data found"}</span></div>
                    <div><strong>Mentor:</strong> <span>{data["mentor"] || "No data found"}</span></div>
                    <div><strong>Technical Stack:</strong> <span>{data["keyword"] || "No data found"}</span></div>
                    
                    <div>
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
                    </div>

                    <div className="col-span-2">
                        <strong>Project Description:</strong> 
                        <span><br />{data["description"] || "No data found"}</span>
                    </div>
                    <div className="col-span-2">
                        <strong>Project Objective:</strong> 
                        <span><br />{data["objective"] || "No data found"}</span>
                    </div>
                </div>

                <div className='mt-5 text-lg'>
                    <div className='flex justify-between items-center mb-3'>
                        <strong>Project Log:</strong>
                        <button 
                            onClick={() => setAddProjectLog(true)} 
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
                                    <th className="border px-4 py-2">Date of Meeting</th>
                                </tr>
                            </thead>
                            <tbody>
                            {projectLog.map((log, index) => (
                                        <tr key={log.id} className="hover:bg-gray-50">
                                            <td className="py-2 px-4 border-b">{index + 1}</td>
                                            <td className="py-2 px-4 border-b">{log["remark_by_mentor"]}</td>
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
            </div>

            {addProjectLog && (
                <PopUpPlus 
                    onClose={() => setAddProjectLog(false)} 
                    onSuccess={fetchLog}
                />
            )}
        </div>
    );
};

export default ProjectViewPanel;
