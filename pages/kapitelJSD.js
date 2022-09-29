import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import ÜbersichtDozenten from '../components/kapitelJS/kapitelDozent.js';
import UserStateButtons2 from '../components/UserStateButtons2.js';

export default function KapitelJS() {
  return (
    <>
      <div style={{ paddingBottom: '65px' }}>
        <NavBar status="logged" navOption="Kurs-Dashboard"></NavBar>
        <UserStateButtons2
          hrefOhneLogin="/kapitelJS_na"
          hrefLoginStudent="/kapitelJS_na.loggedIn"
          hrefLoginDozent="/kapitelJSD"
        ></UserStateButtons2>
        <ÜbersichtDozenten></ÜbersichtDozenten>
      </div>
      <Footer></Footer>
    </>
  );
}
