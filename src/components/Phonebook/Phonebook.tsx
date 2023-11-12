interface Props {
  tracks: any;
}

const Phonebook = ({ tracks }: Props) => {
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
          width: "70vw",
          border: "1px dashed",
          backgroundColor: "#fce6f8",
          paddingTop: 40,
        }}
      >
        <div style={{ color: "grey", margin: 15, marginTop: 60 }}>
          {tracks.map((track: any, index: number) => (
            <li
              key={index}
              style={{ listStyle: "none", height: 70 }}
              className="d-flex align-items-center"
            >
              <img src={track.album.images[2].url} alt="" />
            </li>
          ))}
        </div>
        <div style={{ color: "grey", margin: 15, width: 60 }}>
          Number
          <br /> ----------
          {tracks.map((track: any, index: number) => (
            <li
              key={index}
              className="d-flex align-items-center"
              style={{ listStyle: "none", height: 70 }}
            >
              {(index + 1).toString().padStart(3, "0")}
            </li>
          ))}
        </div>
        <div style={{ color: "grey", margin: 15 }}>
          Name
          <br /> -----------------------------------
          {tracks.map((track: any, index: number) => (
            <li
              key={index}
              style={{ listStyle: "none", height: 70 }}
              className="d-flex align-items-center"
            >
              {track.name}
            </li>
          ))}
        </div>
        <div style={{ color: "grey", margin: 15 }}>
          Artist
          <br /> ---------------------------
          {tracks.map((track: any, index: number) => (
            <li
              key={index}
              style={{ listStyle: "none", height: 70 }}
              className="d-flex align-items-center"
            >
              {track.artists[0].name}
            </li>
          ))}
        </div>
        <div
          className="align-items-center"
          style={{ color: "grey", margin: 15 }}
        >
          Album
          <br /> ----------------------------------------------------------
          {tracks.map((track: any, index: number) => (
            <li
              key={index}
              style={{ listStyle: "none", height: 70 }}
              className="d-flex align-items-center"
            >
              {track.album.name}
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Phonebook;
