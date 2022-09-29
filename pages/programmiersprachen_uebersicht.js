import * as React from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import LernsprachenPaper from '../components/lernsprachen/LernsprachenPaper.js';
import LernsprachenKategorie from '../components/lernsprachen/LernsprachenKategorie.js';
import Grid from '@mui/material/Grid';
import UserStateButtonsForum from '../components/UserStateButtonsForum.js';
import Typography from '@mui/material/Typography';
import UserStateButtons2 from '../components/UserStateButtons2.js';

export default function Test() {
  let [userState, setUserState] = React.useState('loggedStudent');

  function notLogged() {
    setUserState((userState = 'notLogged'));
  }
  function loggedStudent() {
    setUserState((userState = 'loggedStudent'));
  }
  function loggedTeacher() {
    setUserState((userState = 'loggedTeacher'));
  }
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
        <NavBar></NavBar>
        <UserStateButtons
          notLogged={notLogged}
          loggedStudent={loggedStudent}
          loggedTeacher={loggedTeacher}
        ></UserStateButtons>
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
                      status={userState}
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
