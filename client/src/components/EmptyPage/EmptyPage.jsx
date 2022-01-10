import React from 'react'
import NoFeedbackImg from '../../assets/suggestions/illustration-empty.svg'
import { Button1 } from '../../style/Buttons'
import { Link } from 'react-router-dom'
import './EmptyPage.css'

function EmptyPage() {
    return (
        <div className='empty-page-container'>
            <img src={NoFeedbackImg} alt="" />
            <h2>There is no feedback yet.</h2>
            <div className='empty-text'>
                <p>Got a suggestion? Found a bug that needs to be squashed?</p> 
                <p>We love hearing about new ideas to improve our app.</p>
            </div>
            <Button1 className='add_button'>
                <Link to="/create" style={{ textDecoration: 'none', color:"white" }}> + Add Feedback</Link>
            </Button1>
        </div>
    )
}

export default EmptyPage
