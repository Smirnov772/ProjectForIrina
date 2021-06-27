import "./about.css";
import calendar from '../../img/iconmonstr-calendar-5-icon-256.png' ;
import phone from '../../img/iconmonstr-phone-3-icon-256.png' ;
import timeIcon from '../../img/iconmonstr-time-icon-256.png' ;
import emailIcon from '../../img/iconmonstr-email-icon-256.png' ;
import photo from "../../img/main_photo.JPG";
function About() {
  return (
    <div className="about">
      <img
        src={photo}
        className="about__photo"
        alt="ЧАСТНЫЙ ЮРИСТ - ЛАПШИНА ИРИНА АНАТОЛЬЕВНА | localhost"
      ></img>
      <div className="about-titles">
        <h1 className="about__title">
          Частный юрист - Лапшина Ирина Анатольевна
        </h1>
        <p className="about__subtitle">
          "Мне не важно, на чьей стороне сила. Мне важно, на чьей стороне
          право."
        </p>
      </div>
      <ul className="work-info work-info__items">
        <li>
          <p className="work-info__link link">
            <img
              src={calendar}
              alt=""
            ></img>
            С понедельника<br></br>по пятницу
          </p>
        </li>
        <li>
          <a href="tel:+79163328259" className="work-info__link link">
            <img src={phone} alt=""></img>
            +7 (916) 332-82-59
          </a>
        </li>
        <li>
          <p className="work-info__link link">
            <img src={timeIcon} alt=""></img>С 10-00
            ДО 18-00
          </p>
        </li>
        <li>
          <a href="mailto:laptshka@mail.ru" className="work-info__link link">
            <img src={emailIcon} alt=""></img>
            laptshka@mail.ru
          </a>
        </li>
      </ul>
    </div>
  );
}
export default About;
