import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ItalyGrid from "./components/Italy/ItalyGrid";
import GetItalyImages from "./components/Italy/ItalyImages";
import GetItalyCaps from "./components/Italy/ItalyCaps";

import Tracks from "./components/Phonebook/Tracks";
import Home from "./components/Home";
import Galaxy from "./components/Galaxy";
import Advent from "./components/Advent/Advent";
import Eight from "./components/Advent/Eight";
import Nine from "./components/Advent/Nine";

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
          <Route path="advent" element={<Advent />} />
          <Route path="advent/8" element={<Eight />} />
          <Route path="advent/9" element={<Nine />} />
        </Routes>
      </Router>
      {/* <ItalyGrid images={italyImages} captions={italyCaps} />
      <Tracks.Tracks /> */}
    </>
  );
};

export default App;
