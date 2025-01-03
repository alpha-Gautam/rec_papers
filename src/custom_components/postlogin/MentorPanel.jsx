import React, { useState } from 'react';
import './MentorPanel.css';

const MentorPanel = () => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: "AI-Powered Learning Assistant",
            student: "John Doe",
            status: "Pending Approval",
            summary: "A project focused on creating an AI assistant to help students learn efficiently.",
        },
        {
            id: 2,
            title: "Renewable Energy Research",
            student: "Jane Smith",
            status: "Pending Approval",
            summary: "Exploring the impact and advancements in renewable energy solutions.",
        },
        {
            id: 3,
            title: "Harry Potter",
            student: "J.K. Rowling",
            status: "Pending Approval",
            summary: "Story-telling book.",
        },
    ]);

    const approveProject = (id) => {
        setProjects((prevProjects) =>
            prevProjects.map((project) =>
                project.id === id ? { ...project, status: "Approved" } : project
            )
        );
    };

    return (
        <div className="mentor-panel-container">
            <aside className="sidebar">
                <h3>OPTIONS</h3>
                <ul>
                    <li><button onClick={() => window.location.href = '/dashboard/create-project'}>Create Project</button></li>
                    <li><button onClick={() => window.location.href = '/project-status'}>Project Status</button></li>
                    <li><button onClick={() => window.location.href = '/manage-students'}>Manage Students</button></li>
                    <li><button onClick={() => window.location.href = '/view-research-papers'}>View Research Papers</button></li>
                    
                </ul>
            </aside>
            <main className="main-content">
                <h2>Projects for approval</h2>
                <div className="card-container">
                    {projects.map((project) => (
                        <div className="card" key={project.id}>
                            <div className="card-content">
                                <h3>{project.title}</h3>
                                <p><strong>Student:</strong> {project.student}</p>
                                <p><strong>Status:</strong> {project.status}</p>
                                <p>{project.summary}</p>
                                {project.status === "Pending Approval" && (
                                    <button onClick={() => approveProject(project.id)}>
                                        Approve Project
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default MentorPanel;
