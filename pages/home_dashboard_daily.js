import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Paper from '@mui/material/Paper';
import Crosswords from '../components/uebungen/Crosswords.js';
import IconButton from '@mui/material/IconButton';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
export default function Test() {
  return (
    <>
          <div style={{ paddingBottom: '65px' }}>

      <NavBar></NavBar>

      <div style={{ marginBottom: '65px' }}>
        <Paper
          elevation={5}
          style={{
            margin: '30px',
            marginBottom: '5px',
            height: '600px',
            display: 'flex',
            padding: '20px',
          }}
        >
          <Crosswords />
          <IconButton
            aria-label="RedoOutlinedIcon"
            color="primary"
            size="large"
          >
            <RedoOutlinedIcon fontSize="large" style={{ alignSelf: 'end' }} />
          </IconButton>
        </Paper>
      </div>
      <Footer></Footer>
    </>
  );
}
