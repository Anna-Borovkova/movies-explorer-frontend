import "./Portfolio.css";

function Portfolio(props) {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            href="https://github.com/Anna-Borovkova/how-to-learn"
            className="portfolio__link"
            target="_blank"
          >
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://github.com/Anna-Borovkova/russian-travel"
            className="portfolio__link"
            target="_blank"
          >
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://github.com/Anna-Borovkova/react-mesto-api-full-gha"
            className="portfolio__link"
            target="_blank"
          >
            <div>Одностраничное приложение</div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
