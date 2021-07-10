import { useState, useEffect } from 'react'
import axios from 'axios'

import MostPlayCard from '../../components/MostPlayCard'
import RecentAddedsCard from '../../components/RecentAddedsCard'
import { UserInfo } from '../../components/UserInfo'
import Card from '../../components/GameCard'
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
  LibraryButton
} from './styles'

import { useFavoritesList } from '../../hooks/useFavoritesList'
import { useHistory } from 'react-router-dom'
import { AiOutlineGoogle } from 'react-icons/ai'
import {
  renderMostPlayedGames,
  renderRecentAddedGames,
  renderReleasesGames
} from '../../utils/renderRandomGames'

import { useAuth } from '../../hooks/useAuth'



const Home = () => {

  const [mostPlayed, setMostPlayed] = useState<gameCardTypes[]>([])
  const [recentAdded, setRecentAdded] = useState<gameCardTypes[]>([])
  const [releases, setReleases] = useState<gameCardTypes[]>([])
  const [favoritedGames, setFavoritedGames] = useState([''])

  const requestOptions = {
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    headers: {
      'x-rapidapi-key': 'ff3a1cd0f7msh2d6a18d1ec5f9f9p1d7d43jsn3f84ed2849b7',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  const { favoritesList, setFavoritesList } = useFavoritesList()

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

  const history = useHistory()

  async function doLoginWithGoogle() {
    if (!user) {
      await signInWithGoogle()
    }
  }

  localStorage.setItem("what-to-play:favorites", JSON.stringify(favoritesList));

  const storedFavorites = localStorage.getItem("what-to-play:favorites");

  useEffect(() => {

          if (storedFavorites) {
              setFavoritesList(JSON.parse(storedFavorites));
          }
    
  }, [setFavoritesList, storedFavorites]);

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
                  <LibraryButton
                    onClick={() => history.push('/library')}
                  >
                    Go to library
                  </LibraryButton>
                </UserInfo>
              </>
          }
        </LoginContainer>
        <Title
          title='Releases'
        />
        <ReleasesContainer>
          {
            releases.map(game => (
              <Card
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

                    console.log(newFavorite)
                    console.log(favoritesList)

                    if (favoritedGames.includes(String(newFavorite.id))) {
                      return
                    } else {
                      setFavoritesList([...favoritesList, newFavorite])
                      setFavoritedGames([...favoritedGames, String(newFavorite.id)])
                    }
                  }
                }
              />

            ))
          }
        </MostPlayedGamesContainer>
      </MiddleContentContainer>
    </>
  )
}

export default Home