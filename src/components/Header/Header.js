import "./header.css";
import About from '../About/About' ;
function Header() {
  return (
    <header class="header">
      {" "}
      <section className="header__info">
        {" "}
        <About></About>
      </section>
    </header>
  );
}

export default Header;
