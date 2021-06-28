import "./footer.css";
import calendar from "../../img/iconmonstr-calendar-5-icon-256white.png";
import phone from "../../img/iconmonstr-phone-3-icon-256white.png";
import time from "../../img/iconmonstr-time-icon-256white.png";
import email from "../../img/iconmonstr-email-icon-256white.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <ul className="footer-info__items work-info work-info__items">
          <li>
            <p className="footer-info__link link work-info__link">
              <img src={calendar} alt=" "></img>С понедельника<br></br>по пятницу
            </p>
          </li>
          <li>
            <a
              href="tel:+79163328259"
              className="footer-info__link work-info__link link"
            >
              <img src={phone} alt=" "></img>+7 (916) 332-82-59
            </a>
          </li>
          <li>
            <p className="footer-info__link work-info__link link">
              <img src={time} alt=" "></img>С 10-00 ДО 18-00
            </p>
          </li>
          <li>
            <a
              href="mailto:laptshka@mail.ru"
              className="work-info__link footer-info__link  link"
            >
              <img src={email} alt=" "></img>laptshka@mail.ru
            </a>
          </li>
        </ul>
        <p className="footer-info__paragraph">
          г. Наро-Фоминск, улица Ленина, дом 18.
        </p>
      </footer>
    </>
  );
}
export default Footer;
