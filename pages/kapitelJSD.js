import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import ÜbersichtDozenten from '../components/kapitelJS/kapitelDozent.js';

export default function KapitelJS() {
  return (
    <>
      <div style={{ paddingBottom: '50px' }}>
        <NavBar></NavBar>
        <ÜbersichtDozenten></ÜbersichtDozenten>
      </div>
      <Footer></Footer>
    </>
  );
}
