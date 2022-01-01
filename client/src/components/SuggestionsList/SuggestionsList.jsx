import React from 'react'
import './SuggestionsList.css'
import Data from '../../data.json'
import { H2 } from '../../style/GlobalStyle'

function SuggestionsList() {
    return (
        <div className='suggestionList'>
                {Data.productRequests.map((post, index) => (
                    <div key={index} className='suggestion_box_container'>
                        <div className='feedback_left'>
                            <p>{post.upvotes}</p>
                        </div>
                        <div className='feedback_center'>
                            <H2>{post.title}</H2>
                            <p>{post.description}</p>
                            <p>{post.category}</p>
                        </div>
                        <div className="feedback_right">
                            <p>2</p>
                        </div>
                    </div>
                    
                ))}
        </div>
    )
}

export default SuggestionsList
