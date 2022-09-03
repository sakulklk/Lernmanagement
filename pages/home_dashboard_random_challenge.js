import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import randomQuestionPicker from '../components/home/dashboard/randomQuestionPicker.js';
export default function Test() {
  return (
    <>
      <NavBar></NavBar>
      <randomQuestionPicker></randomQuestionPicker>
      <Footer></Footer>
    </>
  );
}
