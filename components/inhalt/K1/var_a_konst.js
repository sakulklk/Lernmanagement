import * as React from 'react';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Divider from '@mui/material/Divider';

export default function Sidemenu() {
  return (
    <div>
      <style jsx>{`
            .bar{
              position: fixed;
              width: 100%;
              height: 312px;
            }

            .content{
              margin-right: 50px;
              margin-left: 50px;

            }
            `}</style>
      <div className="content">
        <h3>Scroll Down to See The Effect</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget.
        </p>
        <Divider />
        <br />
        <Grid container>
          <Grid item sm={7} md={7} lg={9}>
            <a href="/grundbegriffe">
              <Button variant="text" startIcon={<ArrowBackIosIcon />}>
                <LockOpenIcon></LockOpenIcon> Grundbegriffe
              </Button>
            </a>
          </Grid>
          <Grid item sm={5} md={5} lg={3}>
            <a href="/JSK1">
              <Button variant="text" endIcon={<ArrowForwardIosIcon />}>
                <LockOpenIcon></LockOpenIcon> Ein- und Ausgabe
              </Button>
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
