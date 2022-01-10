import React from 'react'
import './SuggestionsList.css'
import Data from '../../data.json'
import { H2 } from '../../style/GlobalStyle'
import CommentImg from '../../assets/shared/icon-comments.svg'
import EmptyPage from '../../components/EmptyPage/EmptyPage'

function SuggestionsList({ sortedByUser, category }) {

    let data = Data.productRequests
    let categorized
    let sortedList

    if (category === 'feature'){
        categorized = data.filter(item => item.category === 'feature')
    }else if (category === 'ux'){
        categorized = data.filter(item => item.category === 'ux')
    }else if (category === 'ui'){
        categorized = data.filter(item => item.category === 'ui')
    }else if (category === 'enhancement'){
        categorized = data.filter(item => item.category === 'enhancement')
    }else if (category === 'bug'){
        categorized = data.filter(item => item.category === 'bug')
    }else if (category === 'all'){
        categorized = data
    }


    if(sortedByUser === "most-upvotes") {
        sortedList = categorized.slice().sort(function(a, b) {
            return b.upvotes - a.upvotes
        })
    }else if(sortedByUser === "least-upvotes") {
        sortedList = categorized.slice().sort(function(a, b) {
            return a.upvotes - b.upvotes
        })
    }else if(sortedByUser === "most-comments") {
        sortedList = categorized.slice().sort(function(a, b) {
            return b.comments - a.comments
        })
    }else if(sortedByUser === "least-comments") {
        sortedList = categorized.slice().sort(function(a, b) {
            return a.comments - b.comments
        })
    }
    
    if(categorized.length === 0) {
        return <EmptyPage />
    }else {

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

}

export default SuggestionsList
