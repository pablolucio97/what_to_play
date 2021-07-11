import {
    EmptyLibraryContainer,
    LibraryContainer,
    LibraryPageContainer,
    ButtonContainer
} from './styles'

import FavoriteGame from '../../components/FavoriteGame'
import { useFavoritesList } from '../../hooks/useFavoritesList'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import { usePersistFavorites } from '../../utils/usePersistFavoritesList'


const Library = () => {
    
    const history = useHistory()

    const { favoritesList, setFavoritesList } = useFavoritesList()

    const [favorites, setFavorites] = usePersistFavorites('what-to-play:favorites', favoritesList)

    setFavoritesList(favorites)

    return (
        <LibraryPageContainer>
            <ButtonContainer onClick={() => history.push('/')}>
                <button>
                    <AiOutlineArrowLeft size={32} color='#ff7723' />
                </button>
            </ButtonContainer>
            <h1>My favorite games</h1>
            <LibraryContainer>
                {
                    favoritesList.length === 0 ?
                        <EmptyLibraryContainer>
                            <h3>You library is empty. Go to Home to add games to your library.</h3>
                        </EmptyLibraryContainer>
                        :
                        favoritesList.map(favorite => (
                            <FavoriteGame
                                id={Number(favorite.id)}
                                title={favorite.title}
                                thumbnail={favorite.thumbnail}
                                freetogame_profile_url={favorite.freetogame_profile_url}
                                removeFromFavorites={() => {
                                    const filteredFavorites = favoritesList.filter(unfavorite =>
                                        unfavorite.id !== favorite.id
                                    )
                                    setFavorites(filteredFavorites)
                                }}
                            />
                        ))
                }
            </LibraryContainer>
        </LibraryPageContainer>
    )
}

export default Library