import React, { useState } from "react";
import Phonebook from "./Phonebook";

let token: string = "";

const setToken = (newToken: string) => {
  token = `Bearer ${newToken}`;
};

const GetTracks = () => {
  const [tracks, setTracks] = useState(null);

  async function fetchWebAPI(endpoint: string, method: string) {
    try {
      const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
          Authorization: token,
        },
        method,
      });
      return res.json();
    } catch (error) {}
  }

  async function fetchTracks() {
    const res = await fetchWebAPI(
      "v1/me/top/tracks?time_range=short_term&limit=30",
      "GET"
    );
    setTracks(res.items);
  }

  return (
    <>
      {tracks === null && (
        <div className="container d-flex justify-content-center align-items-center">
          <button
            className="btn"
            style={{
              marginTop: 20,
              backgroundColor: "#fce6f8",
              color: "grey",
            }}
            onClick={() => fetchTracks()}
          >
            Fetch Tracks
          </button>
        </div>
      )}
      {tracks !== null && <Phonebook tracks={tracks} />}
    </>
  );
};

export default { GetTracks, setToken };
