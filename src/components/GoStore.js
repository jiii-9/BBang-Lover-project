import { useNavigate } from "react-router-dom";

function GoBack() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(-1);
  };
  return (
    <div className="go-store" onClick={onClick}>
      <button className="go-store__btn">
        <span>목록으로</span>
      </button>
    </div>
  );
}

export default GoBack;
