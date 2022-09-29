import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import RandomQuestionPicker from '../components/home/dashboard/RandomQuestionPicker.js';

export default function Test() {
  return (
    <>
          <div style={{ paddingBottom: '65px' }}>

      <NavBar status="logged" navOption="Nutzerdaten"></NavBar>
      <RandomQuestionPicker></RandomQuestionPicker>
      </div>
      <Footer></Footer>
    </>
  );
}
