import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

export default function Test() {
  return (
    <>
      <NavBar></NavBar>
      <Paper elevation={5} style={{ margin: '35px' }}>
        <MenuList>
          <MenuItem MenuItem align="center" component={Link} href="/">
            <Typography align="center">time-challenge</Typography>
          </MenuItem>
          <Divider />
          <MenuItem component={Link} href="/">
            <Typography variant="inherit" noWrap align="center">
              5er-challenge
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem component={Link} href="/">
            <Typography variant="inherit" noWrap>
              fight you friends
            </Typography>
          </MenuItem>
        </MenuList>
      </Paper>
      <Footer></Footer>
    </>
  );
}
