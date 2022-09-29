import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Adminov from '../components/forum/adminov.js';
import UserStateButtonsForum from '../components/UserStateButtonsForum.js';

export default function Test() {
  return (
    <>
      <div style={{ paddingBottom: '65px' }}>
        <NavBar></NavBar>
        <UserStateButtonsForum hrefLoginStudent="/forum" hrefLoginDozent="/forumadmin"></UserStateButtonsForum>
        <Adminov> </Adminov>
      </div>
      <Footer></Footer>
    </>
  );
}
