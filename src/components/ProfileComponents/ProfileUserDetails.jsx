import React from "react";
import { TbCircleDashed } from "react-icons/tb";
export const ProfileUserDetails = () => {
  return (
    <div className="">
      <div className="flex items-center">
        <div className="w-[15%]">
          <img
            className="w-32 h-32 rounded-full"
            src="https://cdn.pixabay.com/photo/2023/09/30/18/25/woman-8286277_640.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div className="space-y-5">
          <div className="flex items-center space-x-10">
            <p>UserName</p>
            <button>Edit Profile</button>
            <TbCircleDashed></TbCircleDashed>
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">10</span>
              <span className="font-semibold mr-2">posts</span>
            </div>
            <div>
              <span className="font-semibold mr-2">5</span>
              <span className="font-semibold mr-2">followers</span>
            </div>
            <div>
              <span className="font-semibold mr-2">5</span>
              <span className="font-semibold mr-2">following</span>
            </div>
          </div>
          <div>
            <p className="font-semibold">Full Name</p>
            <p className="font-thin text-sm">
              🕺🏻Dancer 🕺🏻 📷 Photographer 📷 Cake murder on 15
              April 🎂 😎 Just Single 😎
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
