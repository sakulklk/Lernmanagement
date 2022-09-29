import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';

import Reply from '../components/forum/reply.js';
import Question from '../components/forum/question.js';

export default function Test() {
  return (
    <>
      <div style={{ paddingBottom: '65px' }}>
        <NavBar status="logged" navOption="Nutzerdaten"></NavBar>
        <Question> </Question>
        <Reply> </Reply>
      </div>
      <Footer></Footer>
    </>
  );
}
