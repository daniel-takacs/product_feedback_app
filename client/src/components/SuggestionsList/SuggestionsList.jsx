import React from 'react'
import './SuggestionsList.css'
import Data from '../../data.json'
import { H2 } from '../../style/GlobalStyle'
import CommentImg from '../../assets/shared/icon-comments.svg'

function SuggestionsList({ sortedByUser }) {

    let data = Data.productRequests

    let sortedList
    
    if(sortedByUser === "most-upvotes") {
        sortedList = data.slice().sort(function(a, b) {
            return b.upvotes - a.upvotes
        })
    }else if(sortedByUser === "least-upvotes") {
        sortedList = data.slice().sort(function(a, b) {
            return a.upvotes - b.upvotes
        })
    }else if(sortedByUser === "most-comments") {
        sortedList = data.slice().sort(function(a, b) {
            return b.comments - a.comments
        })
    }else if(sortedByUser === "least-comments") {
        sortedList = data.slice().sort(function(a, b) {
            return a.comments - b.comments
        })
    }

    

    return (
        <div className='suggestionList'>
                {sortedList.map((post, index) => (
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
                            <img src={CommentImg} alt="comment image" />
                            <p>{}</p>
                        </div>
                    </div>
                    
                ))}
        </div>
    )
}

export default SuggestionsList
