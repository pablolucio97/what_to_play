import { GlobalStyles } from './GlobalStyle'
import Routes from './routes/routes'
import { ThemeProvider } from 'styled-components'

import dark from './themes/dark'
import light from './themes/light'
import { FavoriteContextProvider } from './context/FavoriteGames/FavoriteGamesContext'
import { AuthContextProvider } from './context/Auth/AuthContext'
import usePersistTheme from './utils/usePersistTheme'
import Header from './components/Header'


const App = () => {

    const [theme, setTheme] = usePersistTheme('what-to-play:theme', light)
   
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