import "./Techs.css";
import SectionTitle from "../SectionTitle/SectionTitle";

function Techs(props) {
  return (
    <section className="techs">
      <div className="techs__title">
        <SectionTitle title="Технологии" />
      </div>
      <div className="techs__number">
        <h3 className="techs__number-title">7 технологий</h3>
        <p className="techs__number-description">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className="techs__list">
        <li className="techs__list-item">
          <p className="techs__list-item-text">HTML</p>
        </li>
        <li className="techs__list-item">
          <p className="techs__list-item-text">CSS</p>
        </li>
        <li className="techs__list-item">
          <p className="techs__list-item-text">JS</p>
        </li>
        <li className="techs__list-item">
          <p className="techs__list-item-text">React</p>
        </li>
        <li className="techs__list-item">
          <p className="techs__list-item-text">Git</p>
        </li>
        <li className="techs__list-item">
          <p className="techs__list-item-text">Express.js</p>
        </li>
        <li className="techs__list-item">
          <p className="techs__list-item-text">mongoDB</p>
        </li>
      </ul>
    </section>
  );
}

export default Techs;
