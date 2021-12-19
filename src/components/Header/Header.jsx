import React from 'react'
import './Header.css'
import { Button1 } from '../../style/Buttons'

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
                        <Button1 className='add_button'>
                            + Add Feedback
                        </Button1>
                    </div>
                </div>
        </div>
    )
}

export default Header