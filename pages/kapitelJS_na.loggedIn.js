import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import ÜbersichtLoggedIn from '../components/kapitelJS/kapitelübersicht_na.loggedIn.js';
// import HorizontalNonLinearStepper from 'components/kapitelJS/menu.js';

export default function KapitelJSloggedIn() {
  return (
    <>
      <NavBar></NavBar>
      <ÜbersichtLoggedIn></ÜbersichtLoggedIn>
      <Footer></Footer>
    </>
  );
}
