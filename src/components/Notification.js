import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Backdrop({ isClicked }) {
  return <>{isClicked ? <div className="backdrop"></div> : null}</>;
}

function Notification({ isClicked }) {
  console.log(isClicked);

  return (
    <React.Fragment>
      <Backdrop isClicked={isClicked} />
      <aside className="notification">
        <div className="user">
          <FontAwesomeIcon className="user-icon" icon={faUser} />
        </div>
        <span className="user-log">로그인이 필요합니다.</span>
      </aside>
    </React.Fragment>
  );
}

export default Notification;
