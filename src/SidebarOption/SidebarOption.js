import React from 'react'
import './sidebarOption.css'



function SidebarOption ({Icon, text, active}){
  return (
    <div className={`sidebarOption ${active &&  `SidebarOption--active`}`}>
        <Icon/>
        <h2>{text}</h2>
        
        
    </div>
  )
}

export default SidebarOption