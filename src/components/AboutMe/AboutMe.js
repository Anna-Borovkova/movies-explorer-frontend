import "./AboutMe.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Portfolio from "../Portfolio/Portfolio";
import Photo from "../../images/photo.jpg";

function AboutMe(props) {
  return (
    <section className="about-me">
      <div className="about-me__title">
        <SectionTitle title="Студент" />
      </div>
      <div className="about-me__profile">
        <div className="about-me__text">
          <div className="about-me__private">
            <h3 className="about-me__name">Анна</h3>
            <p className="about-me__status">
              Студент курса фронтенд разработки
            </p>
            <p className="about-me__description">
              Я родилась в Кинешме, закончила факультет экономики МГУ. 5 лет
              работаю бизнес-аналитиком. Прошлой осенью у меня родился сын. Во
              время декретного отпуска я решила поучиться чему-то новому и
              выбрала курс JavaScript разработчика.
            </p>
          </div>
          <a
            href="https://github.com/Anna-Borovkova"
            className="about-me__link"
          >
            Github
          </a>
        </div>
        <img className="about-me__photo" src={Photo} alt="Фото."></img>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
