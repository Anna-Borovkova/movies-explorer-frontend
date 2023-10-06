import "./Footer.css";

function Footer(props) {
  const Year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__line-orientation">
        <p className="footer__year">&copy; {Year}</p>
        <nav className="footer__nav">
          <a
            href="https://practicum.yandex.ru/course-javascript-advanced/"
            className="footer__link"
          >
            Яндекс.Практикум
          </a>
          <a href="https://github.com/Anna-Borovkova" className="footer__link">
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
