import ItalyGrid from "./components/Italy/ItalyGrid";
import GetItalyImages from "./components/Italy/ItalyImages";
import GetItalyCaps from "./components/Italy/ItalyCaps";

import Tracks from "./components/Phonebook/Tracks";

const App = () => {
  const italyImages = GetItalyImages();
  const italyCaps = GetItalyCaps();

  return (
    <>
      {/* <ItalyGrid images={italyImages} captions={italyCaps} /> */}
      <Tracks.Tracks />
    </>
  );
};

export default App;
