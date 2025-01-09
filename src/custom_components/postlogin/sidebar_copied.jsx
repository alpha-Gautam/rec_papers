// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// // import { serverSignout, signUp } from "../../api/login";
// import toast from "react-hot-toast";
// // import { signOutUser } from "../../firebase/firebase";
// import { removeCookie } from "../../cookie/cookie";
// import {
//   ChIconCoding,
//   ChIconHome,
//   ChIconLogOut,
//   ChIconProfile,
//   ChIconSetting,
//   ChIconSupport,
//   HomeIcon,
//   SupportIcon,
//   QuestionIcon,
//   PricingIcon,
//   SigneOutIcon,
//   ExtensionDownloadIcon,
// } from "../../assets/images/icon";
// import Modal from "../model";
// import { ClassNames } from "@emotion/react";
// import classNames from "classnames";
// import { AppIcon } from "../../assets/images/image";
// // import { useUserStore } from "./cs_stores/userStore";

// // interface ISideBarItem {
// //   title: string;
// //   icon: React.ReactElement;
// //   selected_icon?: React.ReactElement;
// //   className?: string;
// //   iconWrapperClassName?: string;
// //   onClick: () => void;
// //   selected: boolean;
// // }

// const SideBar = () => {
//   const [showSignOutConfirmation, setShowSignOutConfirmation] = useState(false);
//   const [expanded, setExpanded] = useState(false)

//   const location = useLocation();
//   const navigate = useNavigate();

//   // const fetchData = () => {
//   //   signUp()
//   //     .then((res) => {
//   //       const user_id = res.data.user_id;
//   //       console.log("debug res", res.data);
//   //       // console.log("debug userId", userID);
//   //       // setUserId(user_id);
//   //     })
//   //     .catch((error) => {
//   //       toast(error.message);
//   //       console.log("debug", error);
//   //     });
//   // };

//   const showHideSignOutModel = () => {
//     setShowSignOutConfirmation(!showSignOutConfirmation);
//   };

//   // const clearStore = useUserStore((state) => state.clearStore);

//   const handleSignOut = () => {
//     console.log("debug signout clicked");
//     // serverSignout().then((res)=> {
//     //   signOutUser()
//     //   .then((res) => {
//     //     clearStore();
//     //     sessionStorage.removeItem("status")
//     //     localStorage.removeItem("accessToken");
//     //     localStorage.removeItem("name");
//     //     localStorage.removeItem("profile_url");
//     //     localStorage.removeItem("email");
//     //     removeCookie("profile_url");
//     //     removeCookie("idToken");
//     //     console.log("User signed out successfully");
//     //     navigate("/login");
//     //   })
//     //   .catch((error) => {
//     //     toast(error.message);
//     //     console.error("Error signing out:", error);
//     //   });
//     // })
    
//   };

//   const isItemSelected = (url) => {
//     return location.pathname.includes(url);
//   };

//   const sideBarItems = [
//     // {
//     //   title: "Code Smart",
//     //   icon: (
//     //     <div className="w-20 h-20 rounded-full overflow-hidden bg-white flex items-center justify-center">
//     //       <div className="w-full rounded-full h-full bg-cover bg-center">
//     //         <AppIcon classname="w-32 h-32" />
//     //       </div>
//     //     </div>
//     //   ),
//     //   onClick: () => navigate("/dashboard"),
//     //   className: "mb-4 mt-5",
//     //   iconWrapperClassName: "pl-5",
//     //   selected: false,
//     // },

//     {
//       title: "Home",
//       icon: <HomeIcon classname="!h-[32px] !w-[32px]" selected={isItemSelected("/dashboard")} />,
//       selected_icon: <HomeIcon classname="!h-[32px] !w-[32px]" />,
//       onClick: () => navigate("/dashboard"),
//       selected: isItemSelected("/dashboard"),
//     },

//     // {
//     //   title: "Profile",
//     //   icon: <ChIconProfile classname="h-8 w-8" />,
//     //   onClick: () => navigate("/profile"),
//     //   selected: isItemSelected("profile"),
//     // },

//     // {
//     //   title: "Settings",
//     //   icon: <ChIconSetting classname="h-8 w-8" />,
//     //   onClick: () => navigate("/settings"),
//     //   selected: isItemSelected("settings"),
//     // },

//     // {
//     //   title: "Coding",
//     //   icon: <ChIconCoding classname="h-8 w-8" />,
//     //   onClick: () => navigate("/coding"),
//     //   selected: isItemSelected("coding"),
//     // },

//     // {
//     //   title: "Tracker",
//     //   icon: <ChIconSupport classname="h-8 w-8" />,
//     //   onClick: () => navigate("/Personal_tracker"),
//     //   selected: isItemSelected("ProfileSetup"),
//     // },
//     // {
//     //   title: "ProfileTrack",
//     //   icon: <ChIconSupport classname="h-8 w-8" />,
//     //   onClick: () => navigate("/ProfileTracker"),
//     //   selected: isItemSelected("UserProfileCard"),
//     // },

//     // {
//     //   title: "Tracker",
//     //   icon: <ChIconSupport classname="h-8 w-8" />,
//     //   onClick: () => navigate("/Personal_tracker"),
//     //   selected: isItemSelected("ProfileSetup"),
//     // },
//     // {
//     //   title: "ProfileTrack",
//     //   icon: <ChIconSupport classname="h-8 w-8" />,
//     //   onClick: () => navigate("/ProfileTracker"),
//     //   selected: isItemSelected("UserProfileCard"),
//     // },

//     {
//       title: "Support",
//       icon: <SupportIcon classname="!h-[32px] !w-[32px]" selected={isItemSelected("/support")}/>,
//       onClick: () => navigate("/support"),
//       selected: isItemSelected("/support"),
//     },
//     {
//       title: "Questions",
//       icon: <QuestionIcon classname="!h-[32px] !w-[32px]" selected={isItemSelected("/coding")} />,
//       onClick: () => navigate("/coding"),
//       selected: isItemSelected("coding"),
//     },

//     // {
//     //   title: "Pricing",
//     //   icon: <PricingIcon classname="!h-[32px] !w-[32px]" selected={false} />,
//     //   onClick: () => navigate("/dashboard"),
//     //   selected: isItemSelected("/pricing"),
//     // },

//     {
//       title: "Sign Out",
//       icon: <SigneOutIcon classname="!h-[32px] !w-[32px] " selected={false} />,
//       onClick: showHideSignOutModel,
//       iconWrapperClassName: "",
//       selected: false,
//     },
//   ];

//   const handleExtensionPath = ()=>{
//     window.open('https://chromewebstore.google.com/detail/code-smart/iojhbhoaihedphnhjciogfpomhlckajo', '_blank');
//   }

//   return (
//     <>
//       <div onMouseEnter={()=>{setExpanded(true)}}
//       onMouseLeave={()=>{setExpanded(false)}} 
//       className={`
//         fixed top-0 left-0 bottom-0 
//         ease-in-out duration-500 border-r-[0.5px] 
         
//         flex h-screen justify-between
//         ${expanded ? "w-[312px]" : "w-[114px]"} 
//         bg-[#060606] flex-col space-y-4 drop-shadow-lg
//       `}
//       // className={`ease-in-out duration-500 border-r-[0.5px] z-10 relative justify-between flex h-full ${expanded ? "w-[312px]" : "w-[114px]"} bg-[#060606] flex-col space-y-4  drop-shadow-lg`}
//       >
        
//        {/* First div start here  */}

//         <div className="group cursor-pointer  w-full pt-4 rounded-lg flex flex-row gap-2 ">
       

//                         <div className={`flex items-center duration-1000 justify-center pl-5 ${expanded?"ml-10 ":"ml-5  "}`}>
//                             <div className="w-[40px] h-[39px] rounded-full overflow-hidden bg-[#FF914D] flex items-center justify-center">
//                               <AppIcon classname="" />
//                             </div>
//                       </div>


               
//                       <span className="flex whitespace-nowrap overflow-hidden text-center text-white text-[22px] ">
//                             {expanded ? "Code Smart":""}
                           
//                         </span>
                
       
//         </div>
//         {/* First div End here  */}
//          {/* Second div Start here*/}
//          <div className="flex flex-col gap-10 ">

//                 <div className=" flex flex-col items-center ">
//                     <div className="w-20 h-20  rounded-full overflow-hidden flex justify-center items-center ">
                      
//                         <img className={`rounded-full bg-white duration-1000 ${expanded ? "w-[94px] h-[80px]" : "w-[56px] h-[54px]"}`}
//                               src={localStorage.getItem("profile_url") || ""} alt=""
//                             />
//                     </div>

//                     <p className={`text-white whitespace-nowrap overflow-hidden text-[28px] duration-700  ${expanded? " text-opacity-100":"text-opacity-0"}`}>{localStorage.getItem("name") }</p>
//                    <p className={`font-bold px-2 whitespace-nowrap text-[#C4C4C4] overflow-hidden duration-700  ${expanded? " text-opacity-100":"text-opacity-0"}`}>{localStorage.getItem("email") }</p>
//                 </div>


//                 <div className="flex flex-col">
//                     {sideBarItems.map((item, index) => {
//                       return (
//                         <div
//                           onClick={item.onClick}
//                           key={index}
//                           className={classNames(
//                             !!item.className ? item.className : "",
//                             // item.selected ? "outline-none ring-2 ring-blue-500 ring-offset-2 ring-offset-orange-100": "",
//                             "group cursor-pointer overflow-hidden w-full rounded-lg flex flex-row py-3"
//                           )}
//                         >
//                           <span
//                             title={item.title}
//                             className={classNames(
//                               !!item.iconWrapperClassName ? item.iconWrapperClassName : "",
//                               // "row-span-2 flex items-centre justify-center "
//                               `flex items-center duration-1000 justify-center pl-5 ${expanded?"ml-10 ":"ml-5  "}`  
//                             )}
//                           >
//                             {/* {item.selected && !!item.selected_icon
//                               ? item.selected_icon
//                               : item.icon} */}
//                             {item.icon}
//                             {!expanded &&item.selected && (
//                               <div className={`
//                                 transition-all duration-500 ease-in-out
//                                 ${expanded ? "ml-6" : "ml-4"}
//                                 my-2 w-2 h-2 rounded-full bg-[#369FFF]
//                               `}></div>
//                             )}
//                           </span>
//                           <span className={`
//                             flex ml-[31px] text-center transform 
//                             transition-all duration-500 ease-in-out
//                             whitespace-nowrap text-base 
//                             ${expanded ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"}
//                             ${item.selected ? "text-[#369FFF] !text-base" : "text-[#BDBDBD] group-hover:text-[#369FFF]"}
//                           `}>
//                             {item.title}
//                             {expanded &&item.selected && (
//                               <div className={`
//                                 transition-all duration-500 ease-in-out
//                                 ${expanded ? "ml-6" : "ml-4"}
//                                 my-2 w-2 h-2 rounded-full bg-[#369FFF]
//                               `}></div>
//                             )}
//                           </span>

//                           {/* <span className="w-2 h-2 rounded-full bg-[#369FFF]"></span> */}
//                         </div>
//                       );
//                     })}
//                 </div>
//         </div>
//         {/* Second div End here  */}  
//         {/* Thier Div Start here */}
//         <div className="items-center flex w-full h-[100px] justify-center overflow-hidden">
          
//           {expanded? <div  onClick={handleExtensionPath} className="w-[202px] h-[33px] whitespace-nowrap duration-1000 border-spacing-2 bg-gradient-to-r from-[#194BFD] to-[#AD13FB] rounded-lg flex justify-center text-[18px] items-center text-white cursor-pointer">Download Extension</div>:<div onClick={handleExtensionPath} className="h-auto cursor-pointer"><ExtensionDownloadIcon/></div>}
         
//         </div>
//         {/* Third div End here  */}

//       </div>

//       {showSignOutConfirmation && (
//         <Modal
//           isOpen={showSignOutConfirmation}
//           onClose={showHideSignOutModel}
//           // onConfirm={handleSignOut}
//           closeOnOutsideClick={true}
//           content={
//             <>
//               <h2 className="text-2xl font-bold mb-4">{"Confirm Sign Out"}</h2>
//               <p className="text-gray-700 mb-4">
//                 Are you sure you want to sign out?
//               </p>
//               <div className="flex justify-end">
//                 <button
//                   className="bg-red-500 text-white px-4 py-2 rounded mr-2"
//                   // onClick={handleSignOut}
//                 >
//                   Yes
//                 </button>
//                 <button
//                   className="bg-gray-200 text-gray-800 px-4 py-2 rounded"
//                   onClick={showHideSignOutModel}
//                 >
//                   No
//                 </button>
//               </div>
//             </>
//           }
//         />
//       )}
//     </>
//   );
// };

// export default SideBar;
