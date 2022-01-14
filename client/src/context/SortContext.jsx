/* import React, { useState } from 'react'

const SortContext = React.createContext('all') 

const SortContextProvider = ({ children })=> {
    const [sorted, setSorted] = useState('most-upvotes')

    return (
        <SortContext.Provider value={[ sorted, setSorted ]}>
            {children}
        </SortContext.Provider>
    )
}
export { SortContext, SortContextProvider }; */