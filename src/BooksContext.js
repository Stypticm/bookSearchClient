import React from 'react'
import CreateStore from './store/booksStore'

const BooksContext = React.createContext(null)

export const BooksProvider = ({ children }) => {

    const booksStore = CreateStore

    return <BooksContext.Provider value={booksStore}>
        {children}
    </BooksContext.Provider>
}

export const useBooksStore = () => React.useContext(BooksContext)