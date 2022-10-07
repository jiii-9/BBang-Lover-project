import { useState, useEffect } from "react";

function Store({ characterList, areaList }) {
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

  const filteredCharacterData = storeData.filter(item => {
    for (let i = 0; i < item.taste.length; i += 1) {
      const target = item.taste[i];
      if (characterList.includes(target)) {
        return true;
      }
    }
    return false;
  });

  const filteredData = filteredCharacterData.filter(item => {
    for (let i = 0; i < item.area.length; i += 1) {
      const target = item.area;
      if (areaList.includes(target)) {
        return true;
      }
    }
    return false;
  });

  console.log(filteredData);

  return (
    <section className="store">
      <div className="inner">
        <h3 className="store__title">빵집 추천</h3>
        <div className="store__list">
          {filteredData.map(item => {
            return (
              <div key={item.id} className="store__item">
                <div className="store__cover">
                  <img
                    src={item.mainImage}
                    className="store__img"
                    alt="store-cover"
                  />
                </div>
                <div className="store__info">
                  <span className="store__name">{item.name}</span>
                  <br />
                  <span className="store__rate">{item.rate}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Store;
