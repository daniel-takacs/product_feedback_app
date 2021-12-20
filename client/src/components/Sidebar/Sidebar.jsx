import React from 'react'
import './Sidebar.css'
import { SidebarButton } from './SidebarElements'

function Sidebar() {
    return (
        <div className='sidebar_container'>
            <div className='sidebar_header'>
                <div className='header_content'>
                    <h4>Frontend Mentor</h4>
                    <p>Feedback Board</p>
                </div>
            </div>
            <div className='sidebar_main'>
                <div><SidebarButton>All</SidebarButton></div>
                <div><SidebarButton>UI</SidebarButton></div>
                <div><SidebarButton>UX</SidebarButton></div>
                <div><SidebarButton>Enchancement</SidebarButton></div>
                <div><SidebarButton>Bug</SidebarButton></div>
                <div><SidebarButton>Feature</SidebarButton></div>
            </div>
            <div className='sidebar_bottom'>
                <div className='sidebar_bottom_header'>
                    <h4>Roadmap</h4>
                    <a href=''>View</a>    
                </div>
                <div className="sidebar_bottom_list">
                    <ul>
                        <li>Planned Number here</li>
                        <li>In-Progress Number here</li>
                        <li>Live Number here</li>
                    </ul>
                </div>
            </div>

  

  
        </div>
    )
}

export default Sidebar
