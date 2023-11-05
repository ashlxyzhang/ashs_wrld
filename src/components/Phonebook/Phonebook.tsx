import React, { useState } from "react";
import controller from "./GetTracks";

interface Props {
  tracks: any;
}

const Phonebook = ({ tracks }: Props) => {
  console.log(tracks[0]);

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ marginTop: 30 }}
      >
        <h1>Phonebook</h1>
      </div>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{
          width: "75vw",
          border: "1px dashed",
          backgroundColor: "#fce6f8",
        }}
      >
        <div style={{ color: "grey" }}>
          Number
          <br /> -------------
          {tracks.map((track: any, index: number) => (
            <li style={{ listStyle: "none" }}>
              {(index + 1).toString().padStart(3, "0")}
            </li>
          ))}
        </div>
        <div style={{ color: "grey", margin: 15 }}>
          Name
          <br /> ---------------------------------------------------------
          {tracks.map((track: any) => (
            <li style={{ listStyle: "none" }}>{track.name}</li>
          ))}
        </div>
        <div style={{ color: "grey", margin: 15 }}>
          Artist
          <br /> -------------------------------------
          {tracks.map((track: any) => (
            <li style={{ listStyle: "none" }}>{track.artists[0].name}</li>
          ))}
        </div>
        <div style={{ color: "grey", margin: 15 }}>
          Album
          <br />{" "}
          -----------------------------------------------------------------
          {tracks.map((track: any) => (
            <li style={{ listStyle: "none" }}>{track.album.name}</li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Phonebook;
