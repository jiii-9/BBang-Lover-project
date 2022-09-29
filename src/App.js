import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import Recommend from "./pages/Recommend";
import Detail from "./pages/Detail";
import Footer from "./components/Footer";

import characterData from "./dummy-data/select-data";
import areaData from "./dummy-data/select-data";
import newsData from "./dummy-data/news-data";

import "./style/main.scss";

export const SelectListContext = React.createContext();
export const NewsListContext = React.createContext();

function App() {
  return (
    <SelectListContext.Provider value={(characterData, areaData)}>
      <NewsListContext.Provider value={newsData}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/start" element={<Start />} />
              <Route path="/" element={<Home />} />
              <Route path="/recommend" element={<Recommend />} />
              <Route path="/detail/:id" element={<Detail />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </NewsListContext.Provider>
    </SelectListContext.Provider>
  );
}

export default App;
