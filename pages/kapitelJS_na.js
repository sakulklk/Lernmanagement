import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Übersicht from '../components/kapitelJS/kapitelübersicht_na.js';

export default function KapitelJS() {
  return (
    <>

      <div style={{ paddingBottom: '75px' }}>
        <NavBar></NavBar>
        <Übersicht></Übersicht>
      </div>
      <Footer></Footer>
    </>
  );
}
