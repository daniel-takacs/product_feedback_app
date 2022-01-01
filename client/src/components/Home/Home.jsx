import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import SuggestionsList from '../SuggestionsList/SuggestionsList'
import './Home.css'
import { motion } from 'framer-motion/dist/framer-motion'

import { animation, transition } from '../../animations/index'

function Home() {
    return (
        <motion.div initial="out" animate="in" exit="out" variants={animation} transition={transition}>
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
        </motion.div>
    )
}

export default Home
