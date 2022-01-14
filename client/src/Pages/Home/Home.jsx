import React from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import SuggestionsList from '../../components/SuggestionsList/SuggestionsList'
import './Home.css'
import { motion } from 'framer-motion/dist/framer-motion'
import { animation, transition } from '../../animations/index'


function Home() {

    const [sorted, setSorted] = React.useState('most-upvotes')
    const [category, setCategory] = React.useState('all')

    return (
   
                <motion.div initial="out" animate="in" exit="out" variants={animation} transition={transition}>
                    <div className='container'>
                        <div className='sidebar'>
                            <Sidebar category={category} setCategory={setCategory} sorted={sorted} setSorted={setSorted}/>
                        </div>
                        <div>
                        <div className='header'>
                            <Header category={category} setCategory={setCategory} sorted={sorted} setSorted={setSorted}/>
                        </div>
                        <div className='suggestionsList'>
                            <SuggestionsList category={category} setCategory={setCategory} sorted={sorted} setSorted={setSorted}/>
                        </div>
                        </div>
                    </div>
                </motion.div>
       
    )
}

export default Home
