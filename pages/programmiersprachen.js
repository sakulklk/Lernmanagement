import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import ChooseLang from '../components/ProgrammingLanguages/ChooseProgLang.js';
// import LearnProgLangLoggedIn from '../components/ProgrammingLanguages/LearnProgLang.js';
import VirtualizedList from '../components/ProgrammingLanguages/List.js';

export default function Test() {
  return (
    <>
      <NavBar></NavBar>
      <p> Welche Programmiersprache möchtest du lernen </p>
      <ChooseLang></ChooseLang>
      <VirtualizedList></VirtualizedList>
      <Footer></Footer>
    </>
  );
}
