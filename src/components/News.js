import { useContext } from "react";
import { NewsListContext } from "../App";
import "../style/components/news.scss";

function News() {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const newsList = useContext(NewsListContext);

  return (
    <section className="news">
      <div className="inner">
        <span className="news__title">빵방곡곡 소식</span>
        <ul className="news__list">
          {newsList.map(item => (
            <li
              className="news__item"
              key={item.id}
              onClick={() => window.open([item.url], "_blank")} // item 클릭하면 해당 뉴스로 이동
            >
              <div className="news__image">
                <img src={process.env.PUBLIC_URL + item.image} alt="news-img" />
              </div>
              <span className="news-item__title">{item.title}</span>
              <div className="image__bg"></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default News;
