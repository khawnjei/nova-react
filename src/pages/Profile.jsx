import React from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import ProfileContent from "../components/ProfileContent";
import FooterG from "../components/FooterG";


const Profile = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <ProfileContent />
      <FooterG/>
    </div>
  );
};

export default Profile;
