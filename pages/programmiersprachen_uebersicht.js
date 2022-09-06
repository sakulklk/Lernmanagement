import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import LernsprachenPaper from '../components/lernsprachen/LernsprachenPaper.js';
import LernsprachenKategorie from '../components/lernsprachen/LernsprachenKategorie.js';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';

export default function Test() {
  const learningLanguages = [
    {
      name: 'JavaScript',
      progress: 78,
      learningMark: 'JSON',
      category: 'Webentwicklung',
    },
    {
      name: 'Python',
      progress: 65,
      learningMark: 'Tkinter',
      category: 'Webentwicklung',
    },
    {
      name: 'HTML',
      progress: 90,
      learningMark: 'Profiwissen',
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
      progress: 9,
      learningMark: 'Anwendungsbereiche',
      category: 'Webentwicklung',
    },
    {
      name: 'C++',
      progress: 13,
      learningMark: 'Variablen',
      category: 'Webentwicklung',
    },
    {
      name: 'Prolog',
      progress: 55,
      learningMark: 'Arithmetik',
      category: 'Webentwicklung',
    },
  ];
  return (
    <>
      <div style={{ marginBottom: '65px' }}>
        <NavBar></NavBar>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            style={{
              margin: '30px',
              padding: '0px',
            }}
          >
            <LernsprachenKategorie />
            {learningLanguages.map((learningLanguage) => (
              <LernsprachenPaper
                name={learningLanguage.name}
                progress={learningLanguage.progress}
              />
            ))}
          </Grid>
        </Grid>
      </div>
      <Footer></Footer>
    </>
  );
}
