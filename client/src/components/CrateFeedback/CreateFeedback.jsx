import React from 'react'
import {Link} from 'react-router-dom'
import './CreateFeedback.css'
import NewFeedbackIcon from '../../assets/shared/icon-new-feedback.svg'
import {CancelButton} from '../../style/Buttons.jsx'
import {Button1} from '../../style/Buttons.jsx'
import ArrowLeft from '../../assets/shared/icon-arrow-left.svg'
import {GoBackButton} from '../../style/Buttons.jsx'

function CreateFeedback() {
    return (
        <div className="create-feedback-outer-container"> 
            <div className="go-back-button">
                <img className="arrow-left"src={ArrowLeft} alt="arow left"/>
                    <GoBackButton>
                        <Link to='/'>Go Back </Link>
                    </GoBackButton>
            </div>
               
            <div className="create-feedback-inner-container">
                <img className="new-feedback-icon"src={NewFeedbackIcon} alt="new feedback icon" />
                <h3>Create New Feedback</h3>
                <h5>Feedback Title</h5>
                <p>Add a short, descriptive headline</p>
                <input type="text" />
                <h5>Category</h5>
        
                <label for="category-select">Choose a category for your feedback</label>

                <select id="category-select">
                    <option value="feature">Feature</option>
                    <option value="ui">UI</option>
                    <option value="ux">UX</option>
                    <option value="enhancement">Enhancement</option>
                    <option value="bug">Bug</option>
                </select>

                <h5>Feedback Detail</h5>
                <label>Include any specific comments on what should be improved, added, etc.</label>
                <textarea></textarea>
                <div className="create-feedback-buttons">
                    <div>
                        <CancelButton>Cancel</CancelButton>
                    </div>
                    <div>
                        <Button1>Add Feedback</Button1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateFeedback
