import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Crosswords from '../components/uebungen/Crosswords.js';
import IconButton from '@mui/material/IconButton';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
export default function Test() {
  return (
    <>
      <NavBar></NavBar>
      <div style={{ marginBottom: '65px' }}>
        <Paper
          elevation={5}
          style={{
            margin: '12px',
            marginBottom: '5px',
            height: '600px',
            display: 'flex',
            padding: '20px',
          }}
        >
          {' '}
          <Grid container>
            <Grid item xs={12} style={{ height: '90%' }}>
              <Crosswords />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: 'flex', justifyContent: 'end' }}
            >
              <IconButton
                aria-label="CheckBoxIcon"
                color="primary"
                size="large"
              >
                <CheckBoxIcon
                  fontSize="large"
                  style={{ marginBotom: '0px', marginRight: '0px' }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      </div>
      <Footer></Footer>
    </>
  );
}
