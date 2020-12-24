const HOST = "http://54.205.66.179:3000";
const API = "/api/vehicles";
const URL = HOST + API;

export const Get = () => {
  return fetch(URL).then((response) => response.json());
};

export const Post = (post) => {
  const request = {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  return fetch(URL, request).then((response) => response.json());
};

export const Put = (id, post) => {
  const url = URL + id;
  const request = {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  return fetch(url, request).then((response) => response.json());
};

export const Delete = (id) => {
  const url = URL + id;
  const request = { method: "DELETE" };
  return fetch(url, request).then((response) => response.json());
};
