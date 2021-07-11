import { useState, useEffect } from 'react'
import axios from 'axios'

import MostPlayCard from '../../components/MostPlayCard'
import RecentAddedsCard from '../../components/RecentAddedsCard'
import GameCard from '../../components/GameCard'
import { UserInfo } from '../../components/UserInfo'
import Title from '../../components/Title'
import { gameCardTypes } from '../../types/gameCardTypes'
import {
  TopContainer,
  ReleasesContainer,
  MiddleContentContainer,
  MostPlayedGamesContainer,
  RecentGamesContainer,
  GoogleButton,
  LoginContainer,
  Button,
  FoundGamesContainer,
  Search,
  SearchContainer
} from './styles'

import { usePersistFavorites } from '../../utils/usePersistFavoritesList'
import { useFavoritesList } from '../../hooks/useFavoritesList'
import { useHistory } from 'react-router-dom'
import { AiOutlineGoogle } from 'react-icons/ai'
import {
  renderMostPlayedGames,
  renderRecentAddedGames,
  renderReleasesGames
} from '../../utils/renderRandomGames'

import { useAuth } from '../../hooks/useAuth'
import { requestOptions } from '../../utils/freeGamesRequestOptions'

const Home = () => {

  const [mostPlayed, setMostPlayed] = useState<gameCardTypes[]>([])
  const [allGamesList, setAllGamesList] = useState<gameCardTypes[]>([])
  const [recentAdded, setRecentAdded] = useState<gameCardTypes[]>([])
  const [releases, setReleases] = useState<gameCardTypes[]>([])
  const [favoritedGames, setFavoritedGames] = useState([''])
  const [search, setSearch] = useState('')
  const [foundGame, setFoundGame] = useState<gameCardTypes[]>([])



  const { favoritesList, setFavoritesList } = useFavoritesList()
  //eslint-disable-next-line
  const [favorites, setFavorites] = usePersistFavorites('what-to-play:favorites', favoritesList)



  const { signInWithGoogle, user } = useAuth()

  useEffect(() => {
    axios.get<gameCardTypes[]>('https://free-to-play-games-database.p.rapidapi.com/api/games',
      requestOptions).then(response => setMostPlayed(renderMostPlayedGames(response.data)))
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    axios.get<gameCardTypes[]>('https://free-to-play-games-database.p.rapidapi.com/api/games')
      .then(response => setRecentAdded(renderRecentAddedGames(response.data)))
  }, [])

  useEffect(() => {
    axios.get<gameCardTypes[]>('https://free-to-play-games-database.p.rapidapi.com/api/games')
      .then(response => setReleases(renderReleasesGames(response.data)))
  }, [])

  useEffect(() => {
    axios.get<gameCardTypes[]>('https://free-to-play-games-database.p.rapidapi.com/api/games')
      .then(response => setAllGamesList(response.data))
  }, [])

  useEffect(() => {
    const filteredGames = allGamesList.filter(game => game.title?.toLowerCase()
      === search.toLowerCase())
    setFoundGame(filteredGames)
    //eslint-disable-next-line
  }, [search])

  const history = useHistory()

  async function doLoginWithGoogle() {
    if (!user) {
      await signInWithGoogle()
    }
  }

  return (
    <>
      <TopContainer>
        <LoginContainer>
          {
            !user ?
              <>
                <span>Do login for favorite and store your favorite games</span>
                <GoogleButton onClick={doLoginWithGoogle}>
                  <AiOutlineGoogle size={24} style={{ marginRight: 4 }} />
                  Login with Google
                </GoogleButton>
              </>
              :
              <>
                <UserInfo
                  name={user.name}
                  avatar={user.avatar}
                  id={user.id}
                >
                  <Button
                    onClick={() => history.push('/library')}
                  >
                    Go to library
                  </Button>
                </UserInfo>
              </>
          }
        </LoginContainer>
        <SearchContainer>
          <Search
            placeholder='find a game'
            onChange={(e) => { setSearch(e.target.value) }}
          />
        </SearchContainer>

      </TopContainer>
      {search.length === 0 ?
        <>
          <TopContainer>
            <Title
              title='Releases'
            />
            <ReleasesContainer>
              {
                releases.map(game => (
                  <GameCard
                    id={game.id}
                    key={game.id}
                    title={game.title}
                    thumbnail={game.thumbnail}
                    freetogame_profile_url={game.freetogame_profile_url}
                  />
                ))
              }
            </ReleasesContainer>
          </TopContainer>

          <MiddleContentContainer>
            <RecentGamesContainer>
              <Title
                title='Added recently'
              />
              {
                recentAdded.map(game => (
                  <RecentAddedsCard
                    id={game.id}
                    key={game.id}
                    title={game.title}
                    thumbnail={game.thumbnail}
                    freetogame_profile_url={game.freetogame_profile_url}
                    short_description={game.short_description?.substr(0, 80).concat('...')}
                  />
                ))
              }
            </RecentGamesContainer>
            <MostPlayedGamesContainer>

              <Title
                title='You can to like'
              />
              {
                mostPlayed.map(game => (
                  <MostPlayCard
                    id={game.id}
                    key={game.id}
                    title={game.title}
                    thumbnail={game.thumbnail}
                    freetogame_profile_url={game.freetogame_profile_url}
                    actionLabelText={favoritedGames.includes(String(game.id)) ? 'Favorited' : 'Favorite'}
                    isInactiveButton={favoritedGames.includes(String(game.id)) ? true : false}
                    addToFavorites={
                      () => {
                        const newFavorite = {
                          id: game.id,
                          title: game.title,
                          thumbnail: game.thumbnail,
                          freetogame_profile_url: game.freetogame_profile_url
                        }

                        if (favoritedGames.includes(String(newFavorite.id))) {
                          return
                        } else {
                          setFavoritesList([...favoritesList, newFavorite])
                          setFavoritedGames([...favoritedGames, String(newFavorite.id)])
                          setFavorites([...favoritesList, newFavorite])
                        }
                      }
                    }
                  />

                ))
              }
            </MostPlayedGamesContainer>
          </MiddleContentContainer>
        </>
        :
        <>
          {<FoundGamesContainer>
            {foundGame.map(game => (
              <MostPlayCard
                id={game.id}
                key={game.id}
                freetogame_profile_url={game.freetogame_profile_url}
                thumbnail={game.thumbnail}
                title={game.title}
                actionLabelText={favoritedGames.includes(String(game.id)) ? 'Favorited' : 'Favorite'}
                isInactiveButton={favoritedGames.includes(String(game.id)) ? true : false}
                addToFavorites={
                  () => {
                    const newFavorite = {
                      id: game.id,
                      title: game.title,
                      thumbnail: game.thumbnail,
                      freetogame_profile_url: game.freetogame_profile_url
                    }

                    if (favoritedGames.includes(String(newFavorite.id))) {
                      return
                    } else {
                      setFavoritesList([...favoritesList, newFavorite])
                      setFavoritedGames([...favoritedGames, String(newFavorite.id)])
                      setFavorites([...favoritesList, newFavorite])

                    }
                  }
                }
              />
            ))}
          </FoundGamesContainer>}
        </>
      }
    </>
  )
}

export default Home