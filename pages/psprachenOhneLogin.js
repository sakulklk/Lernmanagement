import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import LernsprachenPaperOhneLogin from '../components/lernsprachen/LernsprachenPaperOhneLogin.js';
import LernsprachenKategorie from '../components/lernsprachen/LernsprachenKategorie.js';
import Grid from '@mui/material/Grid';
import UserStateButtons2 from '../components/UserStateButtons2.js';
import Typography from '@mui/material/Typography';

export default function Test() {
  const Dozent = false;
  const learningLanguagesCategories = [
    'Webentwicklung',
    'DataScience',
    'Datenbanken',
    'Andere',
  ];
  const learningLanguages = [
    {
      name: 'JavaScript',
      progress: 80,
      learningMark: 'Hello, World!',
      category: 'Webentwicklung',
      link: '/kapitelJS_na',
    },
    {
      name: 'Python',
      progress: 0,
      learningMark: null,
      category: 'DataScience',
    },
    {
      name: 'HTML',
      progress: 0,
      learningMark: null,
      category: 'Webentwicklung',
    },
    {
      name: 'CSS',
      progress: 77,
      learningMark: 'Animationen',
      category: 'Webentwicklung',
    },
    {
      name: 'PHP',
      progress: 0,
      learningMark: null,
      category: 'Datenbanken',
    },
    {
      name: 'C++',
      progress: 0,
      learningMark: null,
      category: 'Datenbanken',
    },
    {
      name: 'Prolog',
      progress: 55,
      learningMark: 'Arithmetik',
      category: 'Andere',
    },
  ];
  return (
    <>
      <div style={{ marginBottom: '65px' }}>
        <NavBar status="notLogged" navOption="Nutzerdaten"></NavBar>
        <UserStateButtons2
          hrefOhneLogin="/psprachenOhneLogin"
          hrefLoginStudent="/programmiersprachen_uebersicht"
          hrefLoginDozent="/psprachenDozent"
        ></UserStateButtons2>
        <Grid container spacing={1}>
          {learningLanguagesCategories.map((learningLanguageCategory) => (
            <Grid
              item
              xs={12}
              style={{
                margin: '30px',
                marginBottom: '10px',
                padding: '0px',
              }}
            >
              <LernsprachenKategorie name={learningLanguageCategory} />
              {learningLanguages.map((learningLanguage) =>
                learningLanguage.category == learningLanguageCategory ? (
                  <Grid
                    item
                    xs={12}
                    style={{
                      margin: '30px',
                      padding: '0px',
                    }}
                  >
                    {' '}
                    <LernsprachenPaperOhneLogin
                      name={learningLanguage.name}
                      progress={learningLanguage.progress}
                      learningMark={learningLanguage.learningMark}
                      link={learningLanguage.link}
                    />
                  </Grid>
                ) : null
              )}
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer></Footer>
    </>
  );
}
