import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [favoriteSports, setFavoriteSports] = useState([]);
  const [favoriteTeams, setFavoriteTeams] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const savedSports = JSON.parse(localStorage.getItem("favoriteSports")) || [];
    const savedTeams = JSON.parse(localStorage.getItem("favoriteTeams")) || [];

    setFavorites(savedFavorites);
    setFavoriteSports(savedSports);
    setFavoriteTeams(savedTeams);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("favoriteSports", JSON.stringify(favoriteSports));
  }, [favoriteSports]);

  useEffect(() => {
    localStorage.setItem("favoriteTeams", JSON.stringify(favoriteTeams));
  }, [favoriteTeams]);

  const addFavorite = (item) => {
    setFavorites((currentFavorites) => {
      const isAlreadySaved = currentFavorites.some((favorite) => favorite.id === item.id);

      if (isAlreadySaved) {
        return currentFavorites;
      }

      return [...currentFavorites, item];
    });
  };

  const removeFavorite = (id) => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((favorite) => favorite.id !== id)
    );
  };

  const toggleFavoriteSport = (sport) => {
    setFavoriteSports((currentSports) =>
      currentSports.includes(sport)
        ? currentSports.filter((favoriteSport) => favoriteSport !== sport)
        : [...currentSports, sport]
    );
  };

  const addFavoriteTeam = (team) => {
    setFavoriteTeams((currentTeams) => {
      const isAlreadySaved = currentTeams.some(
        (favoriteTeam) => favoriteTeam.id === team.id
      );

      if (isAlreadySaved) {
        return currentTeams;
      }

      return [...currentTeams, team];
    });
  };

  const removeFavoriteTeam = (id) => {
    setFavoriteTeams((currentTeams) =>
      currentTeams.filter((team) => team.id !== id)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        favoriteSports,
        favoriteTeams,
        addFavorite,
        removeFavorite,
        toggleFavoriteSport,
        addFavoriteTeam,
        removeFavoriteTeam,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}