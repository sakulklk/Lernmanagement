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

export default function Home() {
  const loggedIn = true;
  return (
    <>
      <div style={{ marginBottom: '65px' }}>
        <NavBar></NavBar>
        <Bild></Bild>
        {loggedIn ? (
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
          <Languages></Languages>
        )}
      </div>

      <Footer></Footer>
    </>
  );
}
