import React, { useEffect, useState } from 'react';
import {projectDataApi, projectLogApi} from "../../api/user"
// import './MentorPanel.css';

const ProjectViewPanel = () => {

    const [data,setData]=useState({});
    const [projectLog,setProjectLog]=useState([]);
    const [addProjectLog,setAddProjectLog]= useState(false);

    
    useEffect(()=>{
         async function fetchData() {
            const url=window.location.href.split("/")[5]
            console.log("current url is-", window.location.href);
            console.log("url",url)
            const data=await projectDataApi(url);
            console.log("project data is: ",data)
            if(data.status===200){
                setData(data.data)
            }
         }
         fetchData()

         
        },[]);

        useEffect(()=>{
            async function fetchLog(id){
                const url=window.location.href.split("/")[5]
                const data=await projectLogApi(url);
                console.log("projectLogs data is: ",data)
                if(data.status===202){
                    setProjectLog(data.data)
                    
                }
                console.log("log.length",projectLog.length)

            }
            fetchLog()
        },[])



    

    // const approveProject = (id) => {
    //     setProjects((prevProjects) =>
    //         prevProjects.map((project) =>
    //             project.id === id ? { ...project, status: "Approved" } : project
    //         )
    //     );
    // };

    return (
        <div className="mentor_panel_container h-full w-full bg-gray-100 p-5">
            <div className="maincontent bg-gray-499 flex flex-col">
                <div className="text-red-500 text-2xl font-bold">Project Title: <span className="text-black">{data["title"] || "No data found"}</span></div>
                
                <div className='grid grid-cols-2 gap-4 mt-5 text-lg'>
                    <div><strong>Author:</strong> <span>{data["user_uuid"] || "No data found"}</span></div>
                    <div><strong>Mentor:</strong> <span>{data["mentor_uuid"] || "No data found"}</span></div>
                    <div><strong>Project Stack:</strong> <span>{data["keyword"] || "No data found"}</span></div>
                    <div className=''><strong>Code:</strong> <span>{data["github_link"] ? <a href={data["github_link"]} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{data["github_link"]}</a> : "No data found"}</span></div>                    <div className="col-span-2"><strong>Project Description:</strong> <span>{data["description"] || "No data found"}</span></div>
                    <div className="col-span-2"><strong>Project Objective:</strong> <span>{data["objective"] || "No data found"}</span></div>
                </div>
                
                <div className='mt-5 text-lg'>
                    <div className='flex justify-between'>
                        <strong>Project Log:</strong>
                        <button onClick={() => setAddProjectLog(true)} className='text-red-700 hover:text-red-500 text-3xl'>+</button>
                    </div>
                    <div className='mt-3'>
                        {projectLog.length > 0 ? (
                            <div>
                                {projectLog.map((log) => (
                                    <div key={log.id} className='flex flex-col border-b py-2'>
                                        <div><strong className='text-red-600'>Message:</strong> {log["remark_by_mentor"]}</div>
                                        <div><strong className='text-red-600'>Date:</strong> {new Date(log.created_at).toLocaleDateString()}</div>
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