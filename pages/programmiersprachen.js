import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';

export default function Test() {
  return (
    <>
      <NavBar></NavBar>
      <p>Hier entsteht die Programmiersprachen-Seite</p>
      <a href="kapitelJS_na"> Test JS</a>
      <br />
      <a href="kapitelJSD"> Test JS Dozent</a>
      <br />
      <a href="kapitelJS_na.loggedIn"> Test JS Logged In</a>
      <Footer></Footer>
    </>
  );
}
