
import { Link, animateScroll as scroll } from "react-scroll";

function Accueil() {
    return (
        <>
            <section className="presentation">
                <div className="presentation__container">
                <p className="presentation__title">L Escale</p>
                <div className="presentation__content">
                <Link to="section__contact" spy={true} smooth={true} duration={1500}>
                    <div className="presentation__contact">
                        <p className="presentation__contact__title">Contact</p>
                    </div>
                </Link>
                <Link to="section__menu" spy={true} smooth={true} offset={100} duration={500}>
                    <div className="presentation__menu">
                        <div className="presentation__menu__content">
                        <p className="presentation__menu__content-title">Menu</p>
                        </div>
                    </div>
                </Link>
                <Link to="section__reservation" spy={true} smooth={true} offset={-50} duration={1000}>
                    <div className="presentation__reservation">
                        <p className="presentation__reservation__content-title">Reservation</p>
                    </div>
                </Link>
                </div>
                </div>
            </section>
            <section className="presentation-text">
                <div className="presentation-text__container">
                <p className="presentation-text__title">Bienvenue chez L Escale Restaurant</p>
                <p className="presentation-text__content">Bar - Brasserie - Restauration</p>
                </div>
            </section>
        </>
    )
}

export default Accueil