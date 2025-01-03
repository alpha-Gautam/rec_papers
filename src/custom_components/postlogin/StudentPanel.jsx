import React, { useState } from 'react';
import { useEffect } from 'react';
import { getProjectList } from '../../api/user';
import './StudentPanel.css';
import SideBar from './sidebar';
import Sidebar from './sidebar2';
import axios from 'axios';

const StudentPanel = () => {
    const [projectData,setProjectData ] = useState([])

    

    useEffect(() => {
        const fetchProjectList = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/project/');
                console.log(response.data);
                if(response.status===200){
                    setProjectData(response.data)
                }

            } catch (error) {
                if (error.response) {
                    console.error('Error data:', error.response.data);
                    console.error('Error status:', error.response.status);
                    console.error('Error headers:', error.response.headers);
                } else if (error.request) {
                    console.error('No response received:', error.request);
                } else {
                    console.error('Error message:', error.message);
                }
            }
        };
        fetchProjectList();
    }, []);


    
    const researchPapers = [
        {
            id: 1,
            author: "John Doe",
            mentor: "Dr. Smith",
            summary: "This research explores the impact of AI on modern education systems...",
            link: "/read-more/1"
        },
        {
            id: 2,
            author: "Jane Doe",
            mentor: "Dr. Adams",
            summary: "An in-depth analysis of renewable energy resources and their future scope...",
            link: "/read-more/2"
        },
        {
            id: 3,
            author: "Jenny Doe",
            mentor: "Dr. Harry",
            summary: "An in-depth analysis of story telling capacity.",
            link: "/read-more/3"
        },
        {
            id: 4,
            author: "Jenny Doe",
            mentor: "Dr. Harry",
            summary: "An in-depth analysis of story telling capacity.",
            link: "/read-more/4"
        },
        {
            id: 5,
            author: "Jenny Doe",
            mentor: "Dr. Harry",
            summary: "An in-depth analysis of story telling capacity.",
            link: "/read-more/3"
        },
    ];

    return (
        <div className="student-panel-container">
            {/* <aside className="sidebar">
                <h3>OPTIONS</h3>
                <ul>
                    <li><button onClick={() => window.location.href = '/create-project'}>Create Project</button></li>
                    <li><button onClick={() => window.location.href = '/project-status'}>Ongoing Projects</button></li>
                    <li><button onClick={() => window.location.href = '/choose-mentor'}>Choose Mentor</button></li>
                    <li><button onClick={() => window.location.href = '/view-projects'}>View Project Reports</button></li>
                </ul>
            </aside> */}

            {/* <div className=' h-full'>
                <SideBar/>
                <Sidebar/>
            </div> */}


            <div className='h-[inherit] w-[inherit] overflow-hidden'>
                <div className='h-32 bg-gray-600 flex px-10 items-center '>
                    <div className='w-[100px] h-[100px]  rounded-full bg-white' ></div>
                    <div className='mx-10 text-white text-[18px]'>
                        <p>User Name</p>
                        <p>Branch</p>
                    </div>

                </div>


                <main className="main-content">
                    <h2>Research Papers</h2>
                    <div className="card-container h-[100%] border-2 border-blue-500 overflow-y-auto">
                        {/* {researchPapers.map((paper) => ( */}
                        {projectData.map((paper) => (                            

                            <div className="card" key={paper}>
                            
                                <div className="card-content">
                                    <h5><strong>Title:</strong> {paper.title}</h5>
                                    <h6><strong>Author ID:</strong> {paper.user_uuid}</h6>
                                    <h6><strong>Mentor ID:</strong> {paper.mentor_uuid}</h6>                                    
                                    <button onClick={() => window.location.href = paper.link}>Read More</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>


            </div>
        </div>
    );
};

export default StudentPanel;
