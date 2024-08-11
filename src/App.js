import { Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ShowMore from "./pages/ShowMore";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Github</h1>
        <ul className="listHeader">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/show-more/:index?" element={<ShowMore />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
