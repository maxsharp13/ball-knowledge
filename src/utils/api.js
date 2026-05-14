import { BASE_URL } from "./constants";

const checkResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
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

export const deletePlay = (id) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${BASE_URL}/plays/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  }).then(checkResponse);
};