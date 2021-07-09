import { GlobalStyles } from './GlobalStyle'
import Routes from './routes/routes'
import { ThemeProvider } from 'styled-components'
import usePersistTheme from './utils/togglePersistTheme'
import Header from './components/Header'

import dark from './themes/dark'
import light from './themes/light'
import { FavoriteContextProvider } from './context/FavoriteGames/FavoriteGamesContext'



const App = () => {

    const [theme, setTheme] = usePersistTheme('what-to-play:theme', light)

    function toggleTheme() {
        setTheme(theme.title === 'light' ? dark : light)
    }


    return (
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
    )
}

export default App