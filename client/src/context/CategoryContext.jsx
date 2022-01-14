/* import React, { useState } from 'react'
import CategoryContextProvider from '../context/CategoryContext'

export const CategoryContext = React.createContext('all') 
//export const SortContext = React.createContext('most-upvotes')

const CategoryContext = ({ children })=> {
    const [category, setCategory] = useState('all')
    //const [sorted, setSorted] = useState('most-upvotes')

    return (
       <CategoryContext.Provider value={[ category, setCategory ]}>
            <SortContext.Provider value={[ sorted, setSorted ]}>
                    {children}
            </SortContext.Provider>
        </CategoryContext.Provider> 
           <CategoryContext.Provider value={[ category, setCategory ]}>
                    {children}
        </CategoryContext.Provider>
    )
}
export { CategoryContext, CategoryContextProvider }; */