import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Recommend from "./pages/Recommend";
import Detail from "./pages/Detail";

import characterData from "./assets/select-data";
import areaData from "./assets/select-data";
import newsData from "./assets/news-data";

import "./style/main.scss";

export const SelectListContext = React.createContext();
export const NewsListContext = React.createContext();
export const StoreDataContext = React.createContext();

function App() {
  // store data를 담을 변수
  const [storeData, setStoreData] = useState([]);

  // store data 가져오기
  const getStore = async () => {
    const res = await fetch("http://localhost:3000/data/storeData.json").then(
      res => res.json()
    );
    const store = res.store;
    setStoreData(store);
  };

  useEffect(() => {
    getStore();
  }, []);

  return (
    <StoreDataContext.Provider value={storeData}>
      <SelectListContext.Provider value={(characterData, areaData)}>
        <NewsListContext.Provider value={newsData}>
          <BrowserRouter>
            <div className="App">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recommend" element={<Recommend />} />
                <Route path="/detail/:name" element={<Detail />} />
              </Routes>
            </div>
          </BrowserRouter>
        </NewsListContext.Provider>
      </SelectListContext.Provider>
    </StoreDataContext.Provider>
  );
}

export default App;
