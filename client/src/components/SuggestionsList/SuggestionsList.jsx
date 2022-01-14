import React, {useState} from 'react'
import './SuggestionsList.css'
import Data from '../../data.json'

import EmptyPage from '../../components/EmptyPage/EmptyPage'
import Suggestion from '../Suggestion/Suggestion'

function SuggestionsList({ category, sorted}) {

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


    if(sorted === "most-upvotes") {
        sortedList = categorized.slice().sort(function(a, b) {
            return b.upvotes - a.upvotes
        })
    }else if(sorted === "least-upvotes") {
        sortedList = categorized.slice().sort(function(a, b) {
            return a.upvotes - b.upvotes
        })
    }else if(sorted === "most-comments") {
        sortedList = categorized.slice().sort(function(a, b) {
            return b.comments - a.comments
        })
    }else if(sorted === "least-comments") {
        sortedList = categorized.slice().sort(function(a, b) {
            return a.comments - b.comments
        })
    }
    
    if(categorized.length === 0) {
        return <EmptyPage />
    }else {

        return (
            <div className='suggestionList'>
                {sortedList.map(post => (
                    <Suggestion 
                        sortedList={sortedList} post={post} key={post.id}/>
                ))}
            </div>
        )
    }

}

export default SuggestionsList
