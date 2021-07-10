import { GlobalStyles } from './GlobalStyle'
import Routes from './routes/routes'
import { ThemeProvider } from 'styled-components'
import usePersistTheme from './utils/togglePersistTheme'
import { useFavoritesList } from './hooks/useFavoritesList'
import Header from './components/Header'

import dark from './themes/dark'
import light from './themes/light'
import { useEffect } from 'react'
import { FavoriteContextProvider } from './context/FavoriteGames/FavoriteGamesContext'
import { AuthContextProvider } from './context/Auth/AuthContext'




const App = () => {

    const [theme, setTheme] = usePersistTheme('what-to-play:theme', light)
    const { favoritesList, setFavoritesList } = useFavoritesList()

    localStorage.setItem("what-to-play:favorites", JSON.stringify(favoritesList));

    const storedFavorites = localStorage.getItem("what-to-play:favorites");

    useEffect(() => {
        const loadStorage = setTimeout(() => {
            if (storedFavorites) {
                setFavoritesList(JSON.parse(storedFavorites));
            }
        }, 100)
        return () => { clearTimeout(loadStorage) }
    }, [storedFavorites, setFavoritesList]);

    function toggleTheme() {
        setTheme(theme.title === 'light' ? dark : light)
    }

    return (
        <AuthContextProvider>
            <FavoriteContextProvider>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <>
                        <Header
                            toggleTheme={toggleTheme}
                        />
                        <Routes />

                    </>
                </ThemeProvider>
            </FavoriteContextProvider>
        </AuthContextProvider>
    )
}

export default App