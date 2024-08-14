import React, { useState } from "react";
import { menu } from "./SidebarConfig";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [activeTab,setActiveTab]=useState();
  const navigate=useNavigate();
 const handleClick=(title)=>{
  setActiveTab(title);
  if(title==="Profile")
  {
    navigate("/username")
  }
  else if(title==="Home")
  {
    navigate("/")
  }
 }
  return (
    <div className="sticky top-0 h-[100vh]">
      <div className="flex flex-col justify-between h-full px-10">
        <div className="mt-10">
          <div>
            <img src="https://i.imgur.com/zqpwkLQ.png" alt="" srcset="" />
          </div>
          <div className="pt-10">
            {menu.map((item) => (
              <div onClick={()=>handleClick(item.title)} className="flex mb-5 items-center text-lg cursor-pointer">
                {activeTab===item.title?item.activeicon:item.icon}           
                <p className={`${activeTab===item.title?"font-bold":"font-semibold"}`}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center mb-10">
          <IoReorderThreeOutline className="text-2xl"/>
          <p className="ml-5">More</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
