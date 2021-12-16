import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='left'>
                Icon
                6 Suggestions
                Sort by:
                Most upvotes
            </div>
                <div className='right'>
                    <div>
                        <button className='add_button'>
                            + Add Feedback
                        </button>
                    </div>
                </div>
        </div>
    )
}

export default Header
