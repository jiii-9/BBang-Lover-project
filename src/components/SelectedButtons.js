function SelectedButtons({ characterList, areaList }) {
  return (
    <section className="selected-btns">
      <div className="inner">
        <div className="selected-box">
          {characterList.map((item, idx) => (
            <span className="selected-box__item" key={idx}>
              {item}
            </span>
          ))}
          {areaList.map((item, idx) => (
            <span className="selected-box__item" key={idx}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SelectedButtons;
