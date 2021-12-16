import React from 'react'
import './Sidebar.css'

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
                <button>All</button>
                <button>UI</button>
                <button>UX</button>
                <button>Enhancement</button>
                <button>Bug</button>
                <button>Feature</button>
            </div>
            <div className='sidebar_bottom'>
                <div className='sidebar_bottom_header'>
                    <h4>Roadmap</h4>
                    <a href=''>View</a>    
                </div>
                <ul>
                    <li>Planned Number here</li>
                    <li>In-Progress Number here</li>
                    <li>Live Number here</li>
                </ul>
            </div>

  

  
        </div>
    )
}

export default Sidebar
