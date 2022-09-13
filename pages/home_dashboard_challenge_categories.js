import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import Filter5Icon from '@mui/icons-material/Filter5';
import GroupIcon from '@mui/icons-material/Group';
export default function Test() {
  return (
    <>
      <NavBar></NavBar>
      <Paper elevation={5} style={{ margin: '35px auto', width: '1000px' }}>
        <List>
          <ListItem
            component={Link}
            href="/home_challenges_time"
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography color="primary" style={{ paddingRight: '5px' }}>
              Im Rennen gegen die Zeit{' '}
            </Typography>
            <HourglassTopIcon />
          </ListItem>
          <Divider />
          <ListItem
            component={Link}
            href="/home_challenges_five"
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography color="primary" style={{ paddingRight: '5px' }}>
              5 gewinnt{' '}
            </Typography>
            <Filter5Icon />
          </ListItem>
          <Divider />
          <ListItem
            component={Link}
            href="/home_challenges_friends"
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography color="primary" style={{ paddingRight: '5px' }}>
              Mit Freunden
            </Typography>
            <GroupIcon />
          </ListItem>
        </List>
      </Paper>
      <Footer></Footer>
    </>
  );
}
