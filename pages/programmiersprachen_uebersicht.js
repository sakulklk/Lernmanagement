Skip to content
Search or jump to…
Pulls
Issues
Marketplace
Explore
 
@sakulklk 
sakulklk
/
Lernmanagement
Public
Code
Issues
Pull requests
1
Actions
Projects
Wiki
Security
Insights
Settings
Lernmanagement/pages/programmiersprachen_uebersicht.js /
@JessiByte
JessiByte 3 files modified, 3 added
Latest commit 49620fa 3 days ago
 History
 1 contributor
103 lines (101 sloc)  2.68 KB

import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import LernsprachenPaper from '../components/lernsprachen/LernsprachenPaper.js';
import LernsprachenKategorie from '../components/lernsprachen/LernsprachenKategorie.js';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';

export default function Test() {
  const Dozent = true;
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
      learningMark: 'JSON',
      category: 'Webentwicklung',
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
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
