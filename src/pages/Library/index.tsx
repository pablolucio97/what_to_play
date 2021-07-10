import {
    EmptyLibraryContainer,
    FoundGamesContainer,
    LibraryContainer,
    LibraryPageContainer,
    ButtonContainer
} from './styles'

import Title from '../../components/Title'
import FavoriteGame from '../../components/FavoriteGame'
import { useFavoritesList } from '../../hooks/useFavoritesList'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {useHistory} from 'react-router-dom'
import { useEffect } from 'react'


const Library = () => {

    const { favoritesList, setFavoritesList } = useFavoritesList()

    const history = useHistory()



    return (
        <LibraryPageContainer>
            <ButtonContainer onClick={() => history.push('/')}>
                <button>
                    <AiOutlineArrowLeft size={32} color='#ff7723'/>
                </button>
            </ButtonContainer>
            <Title
                title='My favorite games'
            />
            {
                1 + 1 === 2 ?
                    null
                    :
                    <FoundGamesContainer>
                    </FoundGamesContainer>
            }
            <LibraryContainer>
                {
                    favoritesList.length === 0 ?
                        <EmptyLibraryContainer>
                            <h3>You library is empty.</h3>
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
                                    setFavoritesList(filteredFavorites)
                                }}
                            />
                        ))
                }
            </LibraryContainer>
        </LibraryPageContainer>
    )
}

export default Library