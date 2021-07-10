import {useState, useEffect} from 'react'

export default function usePersistTheme (key: string, initialState: any) {

    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('what-to-play:theme')
        if(storedTheme){
            return JSON.parse(storedTheme)
        }else{
            return initialState
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(theme))
    }, [key, theme, setTheme])
    return [theme, setTheme]
}