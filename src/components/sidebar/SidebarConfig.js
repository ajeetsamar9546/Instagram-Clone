import {AiOutlineHome,AiFillHome, AiOutlineSearch, AiOutlineCompass, AiFillCompass, AiOutlineMessage, AiFillMessage, AiOutlineHeart, AiFillHeart, AiOutlinePlusCircle, AiFillPlusCircle} from 'react-icons/ai'
import {RiVideoFill, RiVideoLine} from 'react-icons/ri'
import {CgProfile} from 'react-icons/cg'
export const menu=[
    {title:"Home",icon:<AiOutlineHome className='text-2xl mr-5'></AiOutlineHome>,activeicon:<AiFillHome className='text-2xl mr-5'></AiFillHome>},

    {title:"Search",icon:<AiOutlineSearch className='text-2xl mr-5'></AiOutlineSearch>,activeicon:<AiOutlineSearch  className='text-2xl mr-5'></AiOutlineSearch>},

    {title:"Explore",icon:<AiOutlineCompass className='text-2xl mr-5'></AiOutlineCompass>,activeicon:<AiFillCompass className='text-2xl mr-5'></AiFillCompass>},

    {title:"Reels", icon:<RiVideoLine className='text-2xl mr-5'></RiVideoLine>,activeicon:<RiVideoFill className='text-2xl mr-5'></RiVideoFill>},

    {title:"Message",icon:<AiOutlineMessage className='text-2xl mr-5'></AiOutlineMessage>,activeicon:<AiFillMessage className='text-2xl mr-5'></AiFillMessage>},

    {title:"Notification",icon:<AiOutlineHeart className='text-2xl mr-5'></AiOutlineHeart>,activeicon:<AiFillHeart className='text-2xl mr-5'></AiFillHeart>},

    {title:"Create",icon:<AiOutlinePlusCircle className='text-2xl mr-5'></AiOutlinePlusCircle>,activeicon:<AiFillPlusCircle className='text-2xl mr-5'></AiFillPlusCircle>},

    {title:"Profile",icon:<CgProfile className='text-2xl mr-5'></CgProfile>,activeicon:<CgProfile className='text-2xl mr-5'></CgProfile>}
]