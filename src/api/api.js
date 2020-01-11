import axios from "axios";

const id = "84578f19a9a926634249";
const secret = "502dc7203598a42426d1e277384404091c24d88c";
const params = `?client_id=${id}clien_secret=${secret}`;
const latest = `${params}&order=asc&sort=updated`;

export function fetchPopularRepos(language) {
  const url = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`;
  return fetch(url)
    .then(response => response.json())
    .then(json => {
      return { language, ...json };
    });
}

export function getProfile(username) {
  const url = `http://api.github.com/users/${username}${params}`;
  return fetch(url).then(response => response.json());
}

export function getRepos(username) {
  const url = `http://api.github.com/users/${username}/repos${latest}`;
  return fetch(url).then(response => response.json());
}

function getAllRepos(username, quantity = 100) {
  const url = `http://api.github.com/users/${username}/repos${params}&per_page=${quantity}`;
  return axios.get(url);
}

function getStarCount(repos) {
  return repos.data.reduce((count, repo) => count + repo.stargazers_count, 0);
}

function calculateScore(profile, repos) {
  const followers = profile.followers;
  const totalStars = getStarCount(repos);
  return followers * 3 + totalStars;
}

export function getUserData(username) {
  return axios.all([getProfile(username), getAllRepos(username)]).then(data => {
    const [profile, repos] = data;
    return {
      profile,
      score: calculateScore(profile, repos)
    };
  });
}
