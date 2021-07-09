import { useState, useEffect } from 'react'
import axios from 'axios'


import MostPlayCard from '../../components/MostPlayCard'
import RecentAddedsCard from '../../components/RecentAddedsCard'
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



const Home = () => {

  const [mostPlayed, setMostPlayed] = useState<gameCardTypes[]>([])
  const [recentAdded, setRecentAdded] = useState<gameCardTypes[]>([])
  const [releases, setReleases] = useState<gameCardTypes[]>([])

  const requestOptions = {
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    headers: {
      'x-rapidapi-key': 'ff3a1cd0f7msh2d6a18d1ec5f9f9p1d7d43jsn3f84ed2849b7',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  const { favoritesList, setFavoritesList } = useFavoritesList()


  useEffect(() => {
    axios.get<gameCardTypes[]>('https://free-to-play-games-database.p.rapidapi.com/api/games',
      requestOptions).then(response => setMostPlayed(response.data.slice(0, 5)))
    //eslint-disable-next-line
  }, [mostPlayed])

  useEffect(() => {
    axios.get<gameCardTypes[]>('https://free-to-play-games-database.p.rapidapi.com/api/games')
      .then(response => setRecentAdded(response.data.slice(0, 8)))
  }, [])

  useEffect(() => {
    axios.get<gameCardTypes[]>('https://free-to-play-games-database.p.rapidapi.com/api/games')
      .then(response => setReleases(response.data.slice(0, 3)))
  }, [])

  const history = useHistory()

  return (
    <>
      <TopContainer>
        <LoginContainer>
          {
            1 + 1 === 3 ?
            <>
            <span>Do login for favorite and store your favorite games</span>
                <GoogleButton >
                  <AiOutlineGoogle size={24} style={{ marginRight: 4 }} />
                  Login with Google
                </GoogleButton>
              </>
              :
              <>
                <LibraryButton onClick={() => history.push('/library')}>
                  Go to library
                </LibraryButton>
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
            title='You has been played most'
          />
          {
            mostPlayed.map(game => (
              <MostPlayCard
                id={game.id}
                key={game.id}
                title={game.title}
                thumbnail={game.thumbnail}
                freetogame_profile_url={game.freetogame_profile_url}
                actionLabelText='Favorit it'
                addToFavorites={
                  () => {
                    const newFavorite = {
                      id: game.id,
                      title: game.title,
                      thumbnail: game.thumbnail,
                      freetogame_profile_url: game.freetogame_profile_url
                    }

                    setFavoritesList([...favoritesList, newFavorite])
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