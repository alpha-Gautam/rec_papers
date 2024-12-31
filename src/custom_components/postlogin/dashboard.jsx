import React, { useEffect, useState } from "react";
import {
  ChIconHourGlass,
  ChIconTickMark,
  ChIconTrophy,
  MapIcon,
} from "../../assets/images/icon";
import Dropdown from "../dropdown";
import { getIconOfQuestion } from "../utils/utils-icon";
import { coding_languages_used, communication_languges } from "../utils/utils";
import { recently_questions } from "./question";
import SideBar from "./sidebar";
import Banner from "../banner";
import { Route, Routes } from "react-router-dom";
import NotFound from "../notfound";
import HomePage from "./home";
import CodingPage from "./coding";
import ProfilePage from "./profile";
import SettingsPage from "./settings";
import SupportPage from "./support";
import ProfileSetup from "./Personal_tracker";
import UserProfileCard from "./ProfileTracker";
import CollegeAmbassadorForm from "./ca_form";
import Dashboard from "./home2";
import { UserStore, useUserStore } from "./cs_stores/userStore";

// import ProfileDashboard from "./ProfileTracker";

// import ProfileProps from "./ProfileTracker";

// interface LoginFormProps {
//   onLogin: (email: string, password: string) => void;
//   onGoogleLogin: () => void;
// }

const DashBoard = () => {


  useEffect(() =>{
    console.log("debug in Dashboard");
  })
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setIsLoading] = useState(false);

  const [codingLanguage, setCodingLanguage] = useState(
    "Py"
  );
  const [communicationLanguage, setCommunicationLanguage] = useState("En");

  const installExtension = () => {
    // Fixme use your url
    const extenson_url =
      "https://chromewebstore.google.com/detail/code-smart/iojhbhoaihedphnhjciogfpomhlckajo?hl=en";
    console.log("debug install extension clicked ");
    window.open(extenson_url, "_blank");
  };

  const initializeStore = useUserStore((state) => state.initializeStore);

  useEffect(() => {
    initializeStore();
  }, []);

  return (
    <div className="flex h-full  overflow-hidden">
      {/* Side bar */}
      <div className="w-[114px] shrink-0">
        <SideBar />
      </div>
      
      {/* Profile */}
      <div className="flex-1 flex flex-col h-[inherit]">
        {/* Main content section  */}
        {/* <Banner
          text={
            "Enhance your coding experience by installing our code helper extension! Access powerful tools and resources to simplify problem-solving."
          }
          onClick={installExtension}
        /> */}
        <div className="flex-1 h-[inherit] overflow-hidden">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<SettingsPage />} />
            {/* <Route path="/profile/*" element={<ProfilePage />} /> */}
            <Route path="/coding" element={<CodingPage />} />
            <Route path="/support" element={<SupportPage />} />
            {/* <Route path="/Personal_tracker" element={<ProfileSetup />} /> */}
            {/* <Route path="/ProfileTracker" element={<UserProfileCard name="Shanky" username={""} lastRefreshed={""} email={""} profileImageUrl={""} />} /> */}

            <Route path="/apply_ca_program" element={<CollegeAmbassadorForm/>}/>
            {/* Add more routes as needed */}

            {/* Catch-all route for non-matching routes within Dashboard */}
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
