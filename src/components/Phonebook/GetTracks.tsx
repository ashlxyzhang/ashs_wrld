let token: string = "";

const setToken = (newToken: string) => {
  token = `Bearer ${newToken}`;
};

async function fetchWebAPI(endpoint: string, method: string) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: token,
    },
    method,
  });
  return res.json();
}

async function getTopTracks() {
  const res = await fetchWebAPI(
    "v1/me/top/tracks?time_range=short_term&limit=5",
    "GET"
  );
  return res.items;
}

export default { getTopTracks, setToken };
