import NavBar from '../components/NavBar.js';
import Bild from '../components/home/Bild.js';
import LanguageWidget from '../components/home/LanguageWidget.js';
import Languages from '../components/home/Languages.js';
import Footer from '../components/Footer.js';
import Dashboard from '../components/home/Dashboard.js';

export default function Home() {
  return (
    <body>
      <NavBar></NavBar>
      <Bild></Bild>
      <LanguageWidget></LanguageWidget>
      <Languages></Languages>
      <Dashboard></Dashboard>
      <Footer></Footer>
    </body>
  );
}
