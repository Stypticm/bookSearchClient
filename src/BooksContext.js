import React from 'react'
import { createStore } from './store/booksStore'
import { useLocalObservable } from 'mobx-react-lite'

const BooksContext = React.createContext(null)

export const BooksProvider = ({ children }) => {

    const booksStore = useLocalObservable(createStore)

    return <BooksContext.Provider value={booksStore}>
        {children}
    </BooksContext.Provider>
}

export const useBooksStore = () => React.useContext(BooksContext)