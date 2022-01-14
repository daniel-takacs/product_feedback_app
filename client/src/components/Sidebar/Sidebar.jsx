import React, {useContext} from 'react'
import { CategoryContext } from '../../context/CategoryContext'
import './Sidebar.css'
import { SidebarButton } from './SidebarElements'

function Sidebar({ setCategory }) {

    const categoryChange = (e)=> {
        setCategory(e.target.dataset.id)
        
    }
   // console.log(category)

    return (
        <div className='sidebar_container'>
            <div className='sidebar_header'>
                <div className='header_content'>
                    <h4>Frontend Mentor</h4>
                    <p>Feedback Board</p>
                </div>
            </div>
            <div className='sidebar_main'>
                <SidebarButton activeClassname="active"data-id="all" onClick={categoryChange}>All</SidebarButton>
                <SidebarButton activeClassname="active"data-id="ui" onClick={categoryChange}>UI</SidebarButton>
                <SidebarButton activeClassname="active"data-id="ux" onClick={categoryChange}>UX</SidebarButton>
                <SidebarButton activeClassname="active"data-id="enhancement" onClick={categoryChange}>Enhancement</SidebarButton>
                <SidebarButton activeClassname="active"data-id="bug" onClick={categoryChange}>Bug</SidebarButton>
                <SidebarButton activeClassname="active"data-id="feature" onClick={categoryChange}>Feature</SidebarButton>
            </div>
            <div className='sidebar_bottom'>
                <div className='sidebar_bottom_header'>
                    <h4>Roadmap</h4>
                    <a href='*'>View</a>    
                </div>
                <div className="sidebar_bottom_list">
                    <ul>
                        <li>Planned 2</li>
                        <li>In-Progress 2</li>
                        <li>Live 2</li>
                    </ul>
                </div>
            </div>

  

  
        </div>
    )
}

export default Sidebar
