import './footer.css' ;
function Footer() {
return (<><footer className="footer">
<ul className="footer-info__items">
    <li>
        <p className="footer-info__link link"><img src="../img/iconmonstr-calendar-5-icon-256.png" alt=" "></img>С
            понедельника<p></p>по пятницу</p>
    </li>
    <li><a href="tel:+79163328259" className="footer-info__link link"><img
                src="../img/iconmonstr-phone-3-icon-256.png" alt=" "></img>+7 (916)
            332-82-59</a></li>
    <li>
        <p className="footer-info__link link"><img src="../img/iconmonstr-time-icon-256.png" alt=" "></img>С
            10-00 ДО
            18-00</p>
    </li>
    <li><a href="mailto:laptshka@mail.ru" className="footer-info__link link"><img
                src="../img/iconmonstr-email-icon-256.png" alt=" "></img>laptshka@mail.ru</a></li>

    <li><a href=" " className="footer-info__link link">г. Наро-Фоминск, улица Ленина, дом 18.</a></li>

</ul>
</footer></>)
};
export default Footer