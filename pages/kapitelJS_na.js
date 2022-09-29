import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Übersicht from '../components/kapitelJS/kapitelübersicht_na.js';
import UserStateButtons2 from '../components/UserStateButtons2.js';

export default function KapitelJS() {
  return (
    <>
      <div style={{ paddingBottom: '75px' }}>
        <NavBar status="logged" navOption="Nutzerdaten"></NavBar>
        <UserStateButtons2
          hrefOhneLogin="/kapitelJS_na"
          hrefLoginStudent="/kapitelJS_na.loggedIn"
          hrefLoginDozent="/"
        ></UserStateButtons2>
        ; <Übersicht></Übersicht>
      </div>
      <Footer></Footer>
    </>
  );
}
