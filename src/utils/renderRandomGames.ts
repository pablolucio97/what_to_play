import { gameCardTypes } from "../types/gameCardTypes"

export function renderMostPlayedGames(gamesList: gameCardTypes[]){
    return gamesList.sort(() => Math.random() - 0.5).slice(0,6)
}

export function renderRecentAddedGames(gamesList: gameCardTypes[]){
    return gamesList.sort(() => Math.random() - 0.5).slice(0, 9)
}

export function renderReleasesGames(gamesList: gameCardTypes[]){
    return gamesList.sort(() => Math.random() - 0.5).slice(0, 3)
}