
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer__contact">
                    <a href="https://www.facebook.com/lescaleboulognesurmer/?locale=fr_FR">
                        <img className="footer__facebook" src="../../public/facebook_icon.png"></img>
                    </a>
                    <a href="https://www.instagram.com/explore/locations/724869624339240/lescale-boulogne-sur-mer/">
                        <img className="footer__instagram" src="../../public/Instagram_icon.png"></img>
                    </a>
                    <p className="footer__address">52-54 Bd Sainte-Beuve, 62200 Boulogne-sur-Mer</p>
                </div>
                <div className="footer__documents">
                    <p className="footer__plats_faits_maison"> Plats faits maison </p>
                    <p className="footer__separation"> | </p>
                    <p className="footer__politique"> Politique de communication </p>
                    <p className="footer__separation"> | </p>
                    <p className="footer__mentions"> Mentions légales </p>
                </div>
            </div>
        </>
    )
}

export default Footer