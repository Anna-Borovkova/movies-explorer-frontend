import "./AboutProject.css";
import SectionTitle from "../SectionTitle/SectionTitle";

function AboutProject(props) {
  return (
    <section className="about-project">
      <div className="about-project__title">
        <SectionTitle title="О проекте" />
      </div>
      <ul className="about-project__list">
        <li className="about-project__item">
          <h3 className="about-project__item-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__item-description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__item">
          <h3 className="about-project__item-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__item-description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about-project__timetable">
        <p className="about-project__timetable-duration about-project__timetable-duration_type_backend">
          1 неделя
        </p>
        <p className="about-project__timetable-duration about-project__timetable-duration_type_frontend">
          4 недели
        </p>
        <p className="about-project__timetable-description about-project__timetable-description_type_backend">
          Back-end
        </p>
        <p className="about-project__timetable-description about-project__timetable-description_type_frontend">
          Front-end
        </p>
      </div>
    </section>
  );
}

export default AboutProject;
