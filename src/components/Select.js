import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectListContext } from "../App";

import News from "./News";

function Select() {
  const selectList = useContext(SelectListContext);

  const characterList = selectList.characterData;
  const areaList = selectList.areaData;

  const [characterExpanded, setCharacterExpanded] = useState(false);
  const [areaExpanded, setAreaExpanded] = useState(false);
  const [checkedCharacterList, setCheckedCharacterList] = useState([]); // 체크된 character버튼을 담을 state
  const [checkedAreaList, setCheckedAreaList] = useState([]); // 체크된 area버튼을 담을 state

  const [characterActive, setCharacterActive] = useState(
    Array(characterList.length).fill(false)
  ); // character 버튼의 체크 상태

  const [areaActive, setAreaActive] = useState(
    Array(areaList.length).fill(false)
  ); // area 버튼의 체크 상태

  const navigate = useNavigate();

  const onRemoveCharacter = value => {
    setCheckedCharacterList(
      checkedCharacterList.filter(item => item !== value)
    );
  };

  const onRemoveArea = value => {
    setCheckedAreaList(checkedAreaList.filter(item => item !== value));
  };

  let characterActiveCopy = [...characterActive];
  // character 버튼이 클릭되면 실행할 함수
  const onCheckedCharacterHandler = (checked, value, idx) => {
    if (checked) {
      setCheckedCharacterList([...checkedCharacterList, value]);
      characterActiveCopy[idx] = checked; // 클릭된 버튼의 id를 checked 상태와 동일하게 변경해준다.
      setCharacterActive(characterActiveCopy);
    } else {
      characterActiveCopy[idx] = checked;
      setCharacterActive(characterActiveCopy);
      onRemoveCharacter(value);
    }
  };

  let areaActiveCopy = [...areaActive];
  // area 버튼이 클릭되면 실행할 함수
  const onCheckedAreaHandler = (checked, value, idx) => {
    if (checked) {
      setCheckedAreaList([...checkedAreaList, value]);
      areaActiveCopy[idx] = checked;
      setAreaActive(areaActiveCopy);
    } else {
      areaActiveCopy[idx] = checked;
      setAreaActive(areaActiveCopy);
      onRemoveArea(value);
    }
  };

  return (
    <section className="select">
      <div className="inner">
        <div className="select-box">
          <div
            className="character-box"
            onClick={() =>
              setCharacterExpanded(characterExpanded => !characterExpanded)
            }
          >
            <i
              className={
                "down__icon fa fa-solid fa-caret-" +
                (characterExpanded ? "up" : "down")
              }
            ></i>
            <span className="select__name">어떤 빵?</span>
          </div>
          <div
            className={"button__list" + (characterExpanded ? " show" : " hide")}
          >
            {characterList.map((item, idx) => (
              <label
                className={[
                  "button__item",
                  characterActiveCopy[item.id] ? "active" : "",
                ].join(" ")}
                htmlFor={item.name}
                key={item.id}
              >
                <input
                  type="checkbox"
                  id={item.name}
                  className="button__input"
                  value={item.name}
                  name="item-name"
                  onChange={e => {
                    onCheckedCharacterHandler(
                      e.target.checked,
                      e.target.value,
                      idx
                    );
                  }}
                />
                <span className="button__name">{item.name}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="select-box">
          <div
            className="area-box"
            onClick={() => setAreaExpanded(areaExpanded => !areaExpanded)}
          >
            <i
              className={
                "down__icon fa fa-solid fa-caret-" +
                (areaExpanded ? "up" : "down")
              }
            ></i>
            <span className="select__name">어디?</span>
          </div>
          <div className={"button__list" + (areaExpanded ? " show" : " hide")}>
            {areaList.map((item, idx) => (
              <label
                className={[
                  "button__item",
                  areaActiveCopy[item.id] ? "active" : null,
                ].join(" ")}
                htmlFor={item.name}
                key={item.id}
              >
                <input
                  type="checkbox"
                  id={item.name}
                  className="button__input"
                  value={item.name}
                  name="item-name"
                  onChange={e => {
                    onCheckedAreaHandler(e.target.checked, e.target.value, idx);
                  }}
                />
                <span
                  className="button__name"
                  onClick={e => onCheckedAreaHandler(item.id)}
                >
                  {item.name}
                </span>
              </label>
            ))}
          </div>
        </div>

        <button
          className="search__btn"
          onClick={() => {
            checkedCharacterList.length === 0 && checkedAreaList.length === 0
              ? window.confirm("찾고싶은 빵을 선택해주세요")
              : navigate("/recommand");
          }}
        >
          검색하기
        </button>
      </div>
      <span>
        {checkedCharacterList} {checkedAreaList}
      </span>
      <News />
    </section>
  );
}

export default Select;
