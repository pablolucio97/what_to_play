import {createContext, ReactNode, useState} from 'react'
import {favoritesGamesListType, favoriteGamesTypes} from '../../types/favoriteGamesTypes'

type ChildrenProps = {
    children: ReactNode;
}

export const FavoriteContext = createContext({} as favoritesGamesListType)

export const FavoriteContextProvider = ({children} : ChildrenProps) => {


    const [favoritesList, setFavoritesList] = useState<favoriteGamesTypes[]>([])

    return (
        <FavoriteContext.Provider value={{favoritesList, setFavoritesList}}>
            {children}
        </FavoriteContext.Provider>
    )
}