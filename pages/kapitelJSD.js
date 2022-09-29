import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import ÜbersichtDozenten from '../components/kapitelJS/kapitelDozent.js';


export default function KapitelJS() {
  return (
    <>

      <div style={{ paddingBottom: '65px' }}>
        <NavBar status="logged" navOption="Nutzerdaten"></NavBar>
        <ÜbersichtDozenten></ÜbersichtDozenten>
      </div>
      <Footer></Footer>
    </>
  );
}
