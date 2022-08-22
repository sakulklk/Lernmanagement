import NavBar from '../components/NavBar.js';
import Bild from '../components/home/Bild.js';
import CurrentLanguages from '../components/home/CurrentLanguages.js';
import Footer from '../components/Footer.js';
import Dashboard from '../components/home/Dashboard.js';

export default function Home() {
  return (
    <body>
      <NavBar></NavBar>
      <Bild></Bild>
      <CurrentLanguages></CurrentLanguages>
      <Dashboard></Dashboard>
      <Footer></Footer>
    </body>
  );
}
