import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Logo from "../logo.svg";

function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const goHome = () => {
    navigate("/", { replace: true }); // Home으로 이동하고 뒤로가기는 되지 않음
  };

  return (
    <header className="header">
      <div className="inner">
        <div className="header-box">
          <div className="logo">
            <img alt="logo" src={Logo} onClick={goHome} />
          </div>

          <div className="search">
            <FontAwesomeIcon
              className="search__icon"
              icon={faMagnifyingGlass}
            />
            <input
              placeholder="궁금한 빵집을 검색하세요"
              type="text"
              value={search}
              onChange={e => {
                setSearch(e.target.value);
              }}
            />
          </div>

          <div className="notification">
            <FontAwesomeIcon className="notification__icon" icon={faBell} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
