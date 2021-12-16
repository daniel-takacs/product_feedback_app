import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import SuggestionsList from '../SuggestionsList/SuggestionsList'
import './Home.css'

function Suggestions() {
    return (
        <div className='container'>
            <div className='sidebar'>
                <Sidebar />
            </div>
            <div>
            <div className='header'>
                <Header />
            </div>
            <div className='suggestionsList'>
                <SuggestionsList />
            </div>
            </div>
        </div>
    )
}

export default Suggestions
