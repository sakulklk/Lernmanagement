import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Overview from '../components/forum/overview.js';
import Posts from '../components/forum/posts.js';

export default function Test() {
  return (
    <>
      <NavBar></NavBar>
      <Overview> </Overview>
      <Posts></Posts>
      <Footer></Footer>
    </>
  );
}
