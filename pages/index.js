import * as React from 'react';
import NavBar from '../components/NavBar.js';
import Bild from '../components/home/Bild.js';
import LanguageWidget from '../components/home/LanguageWidget.js';
import Languages from '../components/home/Languages.js';
import Footer from '../components/Footer.js';
import ForumQuestion from '../components/home/ForumQuestion.js';
import HomeHoverCard from '../components/home/HomeHoverCard.js';
import DozentenOptionen from '../components/lernsprachen/DozentenOptionen.js';
import Grid from '@mui/material/Grid';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import UserStateButtons from '../components/UserStateButtons.js';
import { userState } from '../components/UserStateButtons.js';

export default function Home(props) {
  let [userState, setUserState] = React.useState('loggedStudent');
  let [status, setStatus] = React.useState('logged');
  let [navOption , setNavOption] = React.useState('Nutzerdaten');
  function notLogged() {
    setUserState((userState = 'notLogged'));
    setStatus((status = 'notLogged'));
    setNavOption(navOption = "Nutzerdaten")
    
  }
  function loggedStudent() {
    setUserState((userState = 'loggedStudent'));
    setStatus((status = 'logged'));
    setNavOption(navOption = "Nutzerdaten")
  }
  function loggedTeacher() {
    setUserState((userState = 'loggedTeacher'));
    setStatus((status = 'logged'));
    setNavOption(navOption = "Kurs-Dashboard")
  }

  return (
    <>
      <div style={{ marginBottom: '65px' }}>
        <NavBar status={status} navOption= {navOption}></NavBar>
        <UserStateButtons
          notLogged={notLogged}
          loggedStudent={loggedStudent}
          loggedTeacher={loggedTeacher}
        ></UserStateButtons>
        <Bild></Bild>

        {userState == 'loggedStudent' || userState == 'loggedTeacher' ? (
          <>
            <LanguageWidget></LanguageWidget>
            <Grid container spacing={3}>
              <Grid item xs>
                <HomeHoverCard
                  title="Zufällige Übungen"
                  description="Übe hier zu allen Themengebieten, die du bisher gelernt hast"
                  icon={<ShuffleIcon />}
                  href="/home_dashboard_random_challenge"
                ></HomeHoverCard>
              </Grid>
              <Grid item xs>
                <HomeHoverCard
                  title="Daily"
                  description="Bearbeite die tägliche Nussknacker-Aufgabe und sammle Punkte"
                  icon={<StarPurple500Icon />}
                  href="/home_dashboard_daily"
                ></HomeHoverCard>
              </Grid>
              <Grid item xs>
                <HomeHoverCard
                  title="Challenges"
                  description="Wage dich an eine der drei Challenge-Kategorien und sammle Punkte"
                  icon={<FitnessCenterIcon />}
                  href="/home_dashboard_challenge_categories"
                ></HomeHoverCard>
              </Grid>
            </Grid>

            <ForumQuestion></ForumQuestion>
          </>
        ) : (
          <Languages />
        )}
      </div>

      <Footer></Footer>
    </>
  );
}
