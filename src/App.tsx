import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ItalyGrid from "./components/Italy/ItalyGrid";
import GetItalyImages from "./components/Italy/ItalyImages";
import GetItalyCaps from "./components/Italy/ItalyCaps";

import Tracks from "./components/Phonebook/Tracks";
import Home from "./components/Home";

const App = () => {
  const italyImages = GetItalyImages();
  const italyCaps = GetItalyCaps();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phonebook" element={<Tracks.Tracks />} />
          <Route
            path="/italy"
            element={<ItalyGrid images={italyImages} captions={italyCaps} />}
          />
        </Routes>
      </Router>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/phonebook">Phonebook</Link>
          </li>
          <li>
            <Link to="/italy">Italy Scrapbook</Link>
          </li>
        </ul>
      </nav> */}
      {/* <ItalyGrid images={italyImages} captions={italyCaps} /> */}
      {/*<Tracks.Tracks />*/}
    </>
  );
};

export default App;
