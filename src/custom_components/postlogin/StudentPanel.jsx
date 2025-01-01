import React from 'react';
import './StudentPanel.css';

const StudentPanel = () => {
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
        // Add more items as needed
    ];

    return (
        <div className="student-panel-container">
            <aside className="sidebar">
                <h3>OPTIONS</h3>
                <ul>
                    <li><button onClick={() => window.location.href = '/create-project'}>Create Project</button></li>
                    <li><button onClick={() => window.location.href = '/project-status'}>Ongoing Projects</button></li>
                    <li><button onClick={() => window.location.href = '/choose-mentor'}>Choose Mentor</button></li>
                    <li><button onClick={() => window.location.href = '/view-projects'}>View Project Reports</button></li>
                </ul>
            </aside>
            <main className="main-content">
                <h2>Research Papers</h2>
                <div className="card-container">
                    {researchPapers.map((paper) => (
                        <div className="card" key={paper.id}>
                            <div className="card-content">
                                <h4>Author: {paper.author}</h4>
                                <h6><strong>Mentor:</strong> {paper.mentor}</h6>
                                <p>{paper.summary}</p>
                                <button onClick={() => window.location.href = paper.link}>Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default StudentPanel;
