import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function GoHomeBtn() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1, { replace: true });
  };

  return (
    <div className="go-home">
      <button className="go-home__btn" onClick={onClick}>
        <FontAwesomeIcon className="go-home__icon" icon={faArrowLeft} />
      </button>
    </div>
  );
}

export default GoHomeBtn;
