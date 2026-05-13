import { BASE_URL } from "./constants";

const checkResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

export const getPlays = () => {
  const token = localStorage.getItem("jwt");
  return fetch(`${BASE_URL}/plays`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(checkResponse);
};

export const createPlay = (playData) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${BASE_URL}/plays`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(playData),
  }).then(checkResponse);
};