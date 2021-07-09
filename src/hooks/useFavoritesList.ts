import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteGames/FavoriteGamesContext";

export function useFavoritesList() {
  return useContext(FavoriteContext);
}
