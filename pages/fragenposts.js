import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Overview from '../components/forum/overview.js';
import Faqpost from '../components/forum/faqpost.js';
import Fragenpost from '../components/forum/fragenpost.js';
import Updatepost from '../components/forum/updatepost.js';

export default function Test() {
  return (
    <>
          <div style={{ paddingBottom: '65px' }}>

      <NavBar></NavBar>
      <Overview> </Overview>
      <Fragenpost></Fragenpost>
      </div>
      <Footer></Footer>
    </>
  );
}
