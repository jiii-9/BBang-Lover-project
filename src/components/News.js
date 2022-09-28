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
        <span className="news__title">빵러버 소식</span>
        <ul className="news__list">
          {newsList.map(item => (
            <li
              className="news__item"
              key={item.id}
              onClick={() => window.open([item.url], "_blank")} // item 클릭하면 해당 뉴스로 이동
            >
              <span className="news-item__title">{item.title}</span>
              <img
                className="news__image"
                src={process.env.PUBLIC_URL + item.image}
                alt="news-img"
              />
              <div className="image__bg"></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default News;
