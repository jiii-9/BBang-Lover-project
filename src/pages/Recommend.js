import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Store from "../components/Store";

function Recommend() {
  const location = useLocation();
  const checkedCharacterList = location.state.checkedCharacterList;
  const checkedAreaList = location.state.checkedAreaList;
  console.log(checkedCharacterList, checkedAreaList);

  return (
    <div>
      <Header />
      <Store />
    </div>
  );
}

export default Recommend;
