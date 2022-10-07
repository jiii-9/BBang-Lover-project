import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import SelectedButtons from "../components/SelectedButtons";
// import SelectedButtons from "../components/SelectedButtons";
import Store from "../components/Store";

function Recommend() {
  const location = useLocation();
  const checkedCharacterList = location.state.checkedCharacterList;
  const checkedAreaList = location.state.checkedAreaList;

  return (
    <section className="recommend">
      <Header />
      <SelectedButtons
        characterList={checkedCharacterList}
        areaList={checkedAreaList}
      />
      <Store characterList={checkedCharacterList} areaList={checkedAreaList} />
    </section>
  );
}

export default Recommend;
