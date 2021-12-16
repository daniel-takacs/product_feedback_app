import React from 'react'
import './SuggestionsList.css'
import Data from '../../data.json'

function SuggestionsList() {
    return (
        <div className='suggestionList'>
                {Data.productRequests.map((post, index) => (
                    <div key={index} className='suggestion_box_container'>
                        <p>{post.upvotes}</p>
                    <div>
                        <h4>{post.title}</h4>
                        <p>{post.description}</p>
                        <p>{post.category}</p>
                    </div>
                    <div>
                        <p>2</p>
                    </div>
                    </div>
                    
                ))}
        </div>
    )
}

export default SuggestionsList
