import './sidebar.css' ;
import rightIcon from '../../../img/right_icon.svg' ;
import { Link } from "react-router-dom";
function Sidebar() {
    return (
      <>
        <section class="sidebar">
          <ul class="sidebar__items">
            <li>
              <Link to="" class="sidebar__item link">
                <img src={rightIcon} alt="" /><p className="sidebar__paragraph">Жилищное право</p>
              </Link>
            </li>
            <li>
              <Link to="" class="sidebar__item link">
                <img src={rightIcon} alt="" /><p className="sidebar__paragraph">Земельное право</p>
              </Link>
            </li>
            <li>
              <Link to="" class="sidebar__item link">
                <img src={rightIcon} alt="" /><p className="sidebar__paragraph">Семейное право</p>
              </Link>
            </li>
            <li>
              <Link to="" class="sidebar__item link">
                <img src={rightIcon} alt="" /><p className="sidebar__paragraph">Наследственное право</p>
              </Link>
            </li>
            <li>
              <Link to="" class="sidebar__item link">
                <img src={rightIcon} alt="" /><p className="sidebar__paragraph">Трудовое право</p>
              </Link>
            </li>
            <li>
              <Link to="" class="sidebar__item link">
                <img src={rightIcon} alt="" /><p className="sidebar__paragraph">Защита прав потребителя</p>
              </Link>
            </li>
            <li>
              <Link to="" class="sidebar__item link">
                <img src={rightIcon} alt="" /><p className="sidebar__paragraph">Страховые споры</p>
              </Link>
            </li>
            <li>
              <Link to="" class="sidebar__item link">
                <img src={rightIcon} alt="" /><p className="sidebar__paragraph">Другие виды права</p>
              </Link>
            </li>
          </ul>
        </section>
      </>
    );
  }
  export default Sidebar;
  