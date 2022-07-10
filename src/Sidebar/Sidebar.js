import React from 'react'
import './sidebare.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search';
import SidebarOption from '../SidebarOption/SidebarOption';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Button } from '@mui/material';
function Sidebar() {
    const sidebaroptionparameter=[
        {Icon:HomeIcon, text:"Home", active:true},
        {Icon:SearchIcon ,text:"Explore" ,active:false},
        {Icon:EmailOutlinedIcon, text:"Messages" ,active:false},
        {Icon:NotificationsNoneIcon, text:"Notifications" ,active:false},
        {Icon:BookmarkBorderOutlinedIcon, text:"Bookmarks",active:false},
        {Icon:PlaylistAddCheckOutlinedIcon, text:"List",active:false},
        {Icon:PermIdentityOutlinedIcon, text:"Profile",active:false},
        {Icon:MoreHorizOutlinedIcon,text:"More",active:false},
    ]
    const sidebaroptions= sidebaroptionparameter.map(e=>{
        return(
            <SidebarOption Icon={e.Icon} text={e.text} active={e.active}/>
        )
    })
  return (
    <div className='sidebare'>
        {/* twitter icon */}
        <TwitterIcon className='sidebare--twitter--icon'/>
        
        {sidebaroptions}
        
        {/* tweet btn */}
        <Button variant="outlined" fullWidth className='sidebar--Tweet'>Tweet</Button>
    </div>
  )
}

export default Sidebar