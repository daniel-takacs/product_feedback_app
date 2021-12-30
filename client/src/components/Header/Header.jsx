import React from 'react'
import './Header.css'
import { Button1 } from '../../style/Buttons'
import ArrowDown from '../../assets/shared/icon-arrow-down.svg'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <div className='left'>
                Icon
                6 Suggestions
                Sort by:
                Most upvotes
                <img src={ArrowDown} alt="React Logo" />
            </div>
                <div className='right'>
                    <div>
                        <Button1 className='add_button'>
                           <Link to="/create"> + Add Feedback</Link>
                        </Button1>
                    </div>
                </div>
        </div>
    )
}

export default Header
