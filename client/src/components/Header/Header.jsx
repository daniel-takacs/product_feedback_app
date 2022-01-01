import React from 'react'
import './Header.css'
import { Button1 } from '../../style/Buttons'

import {Link} from 'react-router-dom'
import SuggestionHeaderIcon from '../../assets/suggestions/icon-suggestions.svg'

function Header() {
    return (
        <div className='header'>
            <div className='header-left'>
                <img src={SuggestionHeaderIcon} alt="suggestion header icon" />
                <h4>6 Suggestions</h4>
                <label>Sort by:</label>
                <select id="sort" defaultValue="most-upvotes">
                            <option value="most-upvotes">Most Upvotes</option>
                            <option value="least-upvotes">Least Upvotes</option>
                            <option value="most-comments">Most Comments</option>
                            <option value="least-comments">Least Comments</option>
                </select>
              
            </div>
                <div className='right'>
                    <div>
                        <Button1 className='add_button'>
                           <Link to="/create" style={{ textDecoration: 'none', color:"white" }}> + Add Feedback</Link>
                        </Button1>
                    </div>
                </div>
        </div>
    )
}

export default Header
