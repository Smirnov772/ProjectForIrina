import "./header.css";
import About from '../About/About' ;
import Navigation from '../Navigation/Navigation' ;
function Header() {
  return (
    <header class="header">
      <Navigation></Navigation>
      {" "}
      <section className="header__info">
        {" "}
        <About></About>
      </section>
    </header>
  );
}

export default Header;
