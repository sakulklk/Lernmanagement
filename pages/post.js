import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';

import Reply from '../components/forum/reply.js';
import Question from '../components/forum/question.js';

export default function Test() {
  return (
    <>
      <NavBar></NavBar>
      <Question> </Question>
      <Reply> </Reply>
      <Footer></Footer>
    </>
  );
}
