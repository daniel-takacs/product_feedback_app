import React, {useState} from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import SuggestionsList from '../../components/SuggestionsList/SuggestionsList'
import './Home.css'
import { motion } from 'framer-motion/dist/framer-motion'
import { animation, transition } from '../../animations/index'

function Home() {

    const [sortedByUser, setSortedByUser] = useState('most-upvotes')


    return (
        <motion.div initial="out" animate="in" exit="out" variants={animation} transition={transition}>
            <div className='container'>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div>
                    <div className='header'>
                        <Header sortedByUser={sortedByUser} setSortedByUser={setSortedByUser}/>
                    </div>
                    <div className='suggestionsList'>
                        <SuggestionsList sortedByUser={sortedByUser}/>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Home