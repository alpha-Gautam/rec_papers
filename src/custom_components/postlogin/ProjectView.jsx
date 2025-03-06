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
        <div className="mentor_panel_container  h-[inherit] w-[100%] bg-gray-700">
         
            <div className="maincontent flex flex-col m-5">
                <div>
                <h2 >Project Title...</h2>
                </div>
                <div className="card-container h-full bg-gray-300">
                    <div className='w-full'>
                    <p className='text-red-500  text-[20px]'>Project Title :</p>
                    <div className='flex mx-2 text-[25px] w-full  justfy-center items-center'><p>{data["title"]||"No data fount"}</p></div>
                    </div>

                    <div className='flex'>
                        <div className='w-full min-h-10 border-2 bg-green-600  mt-5 z-10 text-[18px]'><label htmlFor="">Author  :</label> <div className='m-2 bg-green-200 rounded p-1'><p>{data["user_uuid"]||"No data found"}</p></div></div>
                        <div className='w-full min-h-10 border-2 bg-green-600  mt-5 z-10 text-[18px]'><label htmlFor="">Mentor  :</label><div className='m-2 bg-green-200 rounded p-1'><p>{data["mentor_uuid"]||"No data found"}</p></div></div>
                    </div>   

                    <div className='w-full min-h-10 border-2 bg-green-600  mt-5 z-10 text-[18px]'><label htmlFor="">Project Platform  :</label><div className='m-2 bg-green-200 rounded p-1'><p>{data["keyword"]||"No data found"}</p></div></div>
                    <div className='w-full min-h-10 border-2 bg-green-600  mt-5 z-10 text-[18px]'><label htmlFor="">GitHub URL  :</label><div className='m-2 bg-green-200 rounded p-1'><p>{data["github_link"]||"No data found"}</p></div></div>
                    <div className='w-full min-h-10 border-2 bg-green-600  mt-5 z-10 text-[18px]'><label htmlFor="">Project Discription  :</label><div className='m-2 bg-green-200 rounded p-1'><p>{data["description"]||"No data found"}</p></div></div>
                    <div className='w-full min-h-10 border-2 bg-green-600  mt-5 z-10 text-[18px]'><label htmlFor="">Project Objective :</label><div className='m-2 bg-green-200 rounded p-1'><p>{data["objective"]||"No data found"}</p></div></div>



                    <div className='w-full min-h-10 border-2 bg-green-600  mt-5 z-10 text-[18px]'>
                        <div className='flex justify-between px-2'>
                        <label htmlFor="">Project Logs..  </label>
                        <button onClick={()=>{setAddProjectLog(true)}}><p className='text-red-700 hover:text-red-500 text-3xl'> +</p></button>

                        {/* {addProjectLog&&<div> <input type="text" /> <button>add</button></div>} */}
                        </div>
                        <div className='m-2 bg-green-200 rounded p-1'>
                            {projectLog.length>0? <div>
                                            {projectLog.map((log)=>(
                                                <div key={log.id} className='flex flex-col m-2 py-2 gap-3 border-b-2 border-gray-700'>
                                                    <div className='flex flex-wrap'><p className='text-red-600 mr-2'>message : </p>{log["remark_by_mentor"]}</div>
                                                    <div className='flex flex-wrap'><p className='text-red-600 mr-2'>Date: </p> {log.created_at}</div>
                                                    
                                                </div>

                                            ))}
                                        </div>:
                                 <p>No data found</p>}
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default ProjectViewPanel;
