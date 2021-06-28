import "./navigation.css";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <>
      <nav className="navigation">
        <Link to="/" className="navigation__link link">Главная</Link>
        <Link to="/about" className="navigation__link link">О себе</Link>
        <Link to="/price" className="navigation__link link">Стоимость услуг</Link>
        <Link to="/contacts" className="navigation__link link">Контакты</Link>
      </nav>
    </>
  );
}
export default Navigation;
