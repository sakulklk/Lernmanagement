import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Overview from '../components/forum/overview.js';
import Faqpost from '../components/forum/faqpost.js';
import Fragenpost from '../components/forum/fragenpost.js';
import Updatepost from '../components/forum/updatepost.js';
import UserStateButtonsForum from '../components/UserStateButtonsForum.js';

export default function Test() {
  return (
    <>
      <NavBar></NavBar>
      <div style={{ paddingBottom: '65px' }}>
        <UserStateButtonsForum
          hrefLoginStudent="/forum"
          hrefLoginDozent="/forumadmin"
        ></UserStateButtonsForum>
        <Overview> </Overview>
        <Faqpost></Faqpost>
        <Fragenpost></Fragenpost>
        <Updatepost></Updatepost>
      </div>
      <Footer></Footer>
    </>
  );
}
