import React, { useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import {BiBookmark} from 'react-icons/bi'
import { RiVideoAddLine } from 'react-icons/ri'
import ReqUserPostCard from './ReqUserPostCard'

const ReqUserPostPart = () => {
    const [activeTab,setActieTab]=useState();
    const HandleClick=(tab)=>{
        setActieTab(tab)
        // if(activeTab===)
    }

    const tabs=[
        {
            tab:"Post",
            icon:<AiOutlineTable></AiOutlineTable>,
            activeTab:""
        },
        {
            tab:"Reels",
            icon:<RiVideoAddLine></RiVideoAddLine>,
            activeTab:""
        },
        {
            tab:"Saved",
            icon:<BiBookmark></BiBookmark>,
            activeTab:""
        },
        {
            tab:"Tagged",
            icon:<AiOutlineUser></AiOutlineUser>,
            activeTab:""
        },
    ]
  return (
    <div>
        <div className='flex space-x-14 border-t items-center'>
            {tabs.map((items)=>
            <div onClick={()=>HandleClick(items.tab)} className={`flex items-center cursor-pointer py-2 text-sm ${items.tab===activeTab?"border-t border-black":"opacity-60"}`}>                
                {items.icon}
                <div>
                <div className=''>
                    <p className={`ml-2 ${items.tab===activeTab?"font-bold":"font-semibold"}`}>{items.tab}</p>
                </div>
                </div>
            </div>
            )}
        </div>
        <div>
            <div className='flex flex-wrap'>
                {[1,1,1,1,1].map((item)=><ReqUserPostCard/>)}
            </div>
        </div>
    </div>
  )
}

export default ReqUserPostPart