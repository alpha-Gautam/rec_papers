// import { useLocation } from "react-router-dom";

// const ReadMore = () => {
//   const location = useLocation();
//   const project = location.state?.project;

//   if (!project) {
//     return <div>No project data available.</div>;
//   }

//   return (
//     // Use the previous `ReadMore.jsx` code here
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <aside className="w-1/4 bg-gray-800 text-white flex flex-col items-center p-4">
//         <h2 className="text-2xl font-bold mb-4">Navigation</h2>
//         <ul className="space-y-2">
//           <li>
//             <button className="text-gray-200 hover:text-white transition">
//               Dashboard
//             </button>
//           </li>
//           <li>
//             <button className="text-gray-200 hover:text-white transition">
//               My Projects
//             </button>
//           </li>
//           <li>
//             <button className="text-gray-200 hover:text-white transition">
//               Settings
//             </button>
//           </li>
//           <li>
//             <button className="text-gray-200 hover:text-white transition">
//               Logout
//             </button>
//           </li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 bg-gray-100 p-8">
//         {/* Header */}
//         <header className="bg-white shadow-md p-4 flex justify-between items-center mb-8">
//           <div>
//             <h1 className="text-2xl font-bold">{project?.user_name}</h1>
//             <p className="text-gray-600">Mentor: {project?.mentor_name}</p>
//           </div>
//         </header>

//         {/* Project Details */}
//         <div className="bg-white rounded-md shadow-lg p-6">
//           <h2 className="text-3xl font-bold mb-4">{project?.title}</h2>

//           <div className="mb-4">
//             <h3 className="text-lg font-semibold">Objective:</h3>
//             <p className="text-gray-700">{project?.objective}</p>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-semibold">Description:</h3>
//             <p className="text-gray-700">{project?.description}</p>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-semibold">Platforms:</h3>
//             <p className="text-gray-700">{project?.platforms}</p>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-semibold">GitHub Link:</h3>
//             <a
//               href={project?.github_link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 underline"
//             >
//               {project?.github_link}
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReadMore;
