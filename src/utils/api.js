import nbaTeamAliases from "../data/nbaTeamAliases";

const BASE_URL = "https://www.thesportsdb.com/api/v1/json/123";

const checkResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }

  return res.json();
};

export const normalizeTeamQuery = (query) => {
  const cleanQuery = query.trim().toLowerCase();
  return nbaTeamAliases[cleanQuery] || query.trim();
};

export const searchTeams = (query) => {
  const normalizedQuery = normalizeTeamQuery(query);

  return fetch(
    `${BASE_URL}/searchteams.php?t=${encodeURIComponent(normalizedQuery)}`
  )
    .then(checkResponse)
    .then((data) => {
      const teams = data.teams || [];

      return teams.filter(
        (team) =>
          team.strSport === "Basketball" ||
          team.strLeague === "NBA" ||
          team.strLeague?.includes("NBA")
      );
    })
    .catch((err) => {
      console.error("Team search failed:", err);
      return [];
    });
};