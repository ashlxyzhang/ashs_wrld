import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ItalyGrid from "./components/Italy/ItalyGrid";
import GetItalyImages from "./components/Italy/ItalyImages";
import GetItalyCaps from "./components/Italy/ItalyCaps";

import Tracks from "./components/Phonebook/Tracks";
import Home from "./components/Home";
import Galaxy from "./components/Galaxy";

import Advent from "./components/Advent/Advent";
import One from "./components/Advent/One";
import Two from "./components/Advent/Two";
import Eight from "./components/Advent/Eight";
import Nine from "./components/Advent/Nine";
import Ten from "./components/Advent/Ten";
import Eleven from "./components/Advent/Eleven";
import Three from "./components/Advent/Three";
import Twelve from "./components/Advent/Twelve";

const App = () => {
  const italyImages = GetItalyImages();
  const italyCaps = GetItalyCaps();
  const days = [
    <One />,
    <Two />,
    <Three />,
    <Eight />,
    <Nine />,
    <Ten />,
    <Eleven />,
    <Twelve />,
  ];

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="galaxy" element={<Galaxy />} />
          <Route path="phonebook" element={<Tracks.Tracks />} />
          <Route path="auth/*" element={<Tracks.Tracks />} />
          <Route
            path="italy"
            element={<ItalyGrid images={italyImages} captions={italyCaps} />}
          />
          <Route path="advent" element={<Advent />} />
          <Route path="advent/1" element={<One />} />
          <Route path="advent/2" element={<Two />} />
          <Route path="advent/3" element={<Three />} />
          <Route path="advent/8" element={<Eight />} />
          <Route path="advent/9" element={<Nine />} />
          <Route path="advent/10" element={<Ten />} />
          <Route path="advent/11" element={<Eleven />} />
          <Route path="advent/12" element={<Twelve />} />
        </Routes>
      </Router>
      {/* <ItalyGrid images={italyImages} captions={italyCaps} />
      <Tracks.Tracks /> */}
    </>
  );
};

export default App;
