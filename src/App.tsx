import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ItalyGrid from "./components/Italy/ItalyGrid";
import GetItalyImages from "./components/Italy/ItalyImages";
import GetItalyCaps from "./components/Italy/ItalyCaps";

import Tracks from "./components/Phonebook/Tracks";
import Home from "./components/Home";
import Galaxy from "./components/Galaxy";

const App = () => {
  const italyImages = GetItalyImages();
  const italyCaps = GetItalyCaps();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="galaxy" element={<Galaxy />} />
          <Route path="phonebook" element={<Tracks.Tracks />} />
          <Route
            path="italy"
            element={<ItalyGrid images={italyImages} captions={italyCaps} />}
          />
        </Routes>
      </Router>
      {/* <ItalyGrid images={italyImages} captions={italyCaps} />
      <Tracks.Tracks /> */}
    </>
  );
};

export default App;
