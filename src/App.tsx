import ItalyGrid from "./components/Italy/ItalyGrid";
import GetItalyImages from "./components/Italy/ItalyImages";
import GetItalyCaps from "./components/Italy/ItalyCaps";

import Phone from "./components/Phonebook/Phone";
import Login from "./components/Phonebook/Login";
import GetTracks from "./components/Phonebook/GetTracks";

const App = () => {
  const italyImages = GetItalyImages();
  const italyCaps = GetItalyCaps();

  return (
    <>
      {/* <ItalyGrid images={italyImages} captions={italyCaps} /> */}
      <Phone image="/Phonebook/rotary_phone.webp" />
      <Login />
      <GetTracks.GetTracks />
    </>
  );
};

export default App;
