import React, { useState } from "react";
import controller from "./GetTracks";

const getStuff = () => {
  return controller.getTopTracks();
};

const Phonebook = () => {
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ marginTop: 60 }}
      >
        <h1>Phonebook</h1>
      </div>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{
          width: "70vw",
          border: "1px dashed",
          backgroundColor: "#fce6f8",
        }}
      >
        ### Name : Artist : Album
        <ul style={{ color: "grey", margin: 15 }}>
          <li>001 Silver Soul : Beach House: Teen Dream</li>
          <li>002 Die For You : Joji : SMITHEREENS</li>
          <li>003 Famous : Kanye West : Life of Pablo</li>
        </ul>
      </div>
    </>
  );
};

export default Phonebook;
