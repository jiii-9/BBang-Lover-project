import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreDataContext } from "../App";

function Store({ characterList, areaList }) {
  const navigate = useNavigate();

  const storeData = useContext(StoreDataContext);

  // select 된 버튼과 맞는 store 걸러내기
  const filteredCharacterData = storeData.filter(item => {
    for (let i = 0; i < item.taste.length; i += 1) {
      const target = item.taste[i];
      if (characterList.includes(target)) {
        return true;
      }
    }
    return false;
  });

  // filteredCharacterData값에서 area가 일치하는 store 걸러내기
  const filteredData = filteredCharacterData.filter(item => {
    for (let i = 0; i < item.area.length; i += 1) {
      const target = item.area;
      if (areaList.includes(target)) {
        return true;
      }
    }
    return false;
  });

  return (
    <section className="store">
      <div className="inner">
        <h3 className="store__title">빵집 추천</h3>
        <div className="store__list">
          {filteredData.map(item => {
            return (
              <div
                key={item.id}
                className="store__item"
                onClick={() =>
                  navigate(`/detail/${item.name}`, {
                    state: {
                      item,
                    },
                  })
                }
              >
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
