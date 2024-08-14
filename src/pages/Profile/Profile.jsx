import React from "react";
import { ProfileUserDetails } from "../../components/ProfileComponents/ProfileUserDetails";
import ReqUserPostPart from "../../components/ProfileComponents/ReqUserPostPart";
import ReqUserPostCard from "../../components/ProfileComponents/ReqUserPostCard";

const Profile = () => {
  return (
    <div className="h-full p-12">
      <div className="h-[20vh]">
        <ProfileUserDetails />
      </div>
      <div>
        <ReqUserPostPart/>
      </div>
    </div>
  );
};

export default Profile;
