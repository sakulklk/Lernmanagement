import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';

export default function Test() {
  return (
    <>
          <div style={{ paddingBottom: '65px' }}>

      <NavBar status="logged" navOption="Nutzerdaten"></NavBar>
      <p>Anliegen ? Feedback ? TODO:Kontaktformular</p>
      </div>
      <Footer></Footer>
    </>
  );
}
