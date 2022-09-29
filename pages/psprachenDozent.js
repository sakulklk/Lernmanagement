import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import LernsprachenPaper from '../components/lernsprachen/LernsprachenPaper.js';
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
      link: '/hello_world',
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
        <NavBar status="logged" navOption="Kurs-Dashboard"></NavBar>
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
                    <LernsprachenPaper
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
        <Box sx={{ height: 320, transform: 'translateZ(0px)' }}>
          <SpeedDial
            ariaLabel="SpeedDial CRUD"
            sx={{ position: 'sticke', height: 100 }}
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                href={action.route}
              />
            ))}
          </SpeedDial>
        </Box>
      </div>
      <Footer></Footer>
    </>
  );
}
