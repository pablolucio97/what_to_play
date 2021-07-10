import {useState, useEffect} from 'react'

export function usePersistFavorites (key: string, initialState: any) {

    const [favorites, setFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem('what-to-play:favorites')
        if(storedFavorites){
            return JSON.parse(storedFavorites)
        }else{
            return initialState
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(favorites))
    }, [key, favorites, setFavorites])
    return [favorites, setFavorites]
}