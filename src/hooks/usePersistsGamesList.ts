import {useContext} from 'react'
import {FavoriteContext} from '../context/FavoriteGames/FavoriteGamesContext'

export function usePersistGameList(){
    const {favoritesList, setFavoritesList} = useContext(FavoriteContext)
    return [favoritesList, setFavoritesList]
}