import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';

export default function Test() {
  return (
    <>
      <div style={{ paddingBottom: '65px' }}>
        <NavBar></NavBar>
        <p>
          {' '}
          Hier sollte ein Feedbackbogen stehen mit verschiedenene Kategorien,
          z.B wie schwierig war die Aufgabe?, Textfeld, Punktevergabe (Skala
          1-10), etc.{' '}
        </p>
      </div>
      <Footer></Footer>
    </>
  );
}
