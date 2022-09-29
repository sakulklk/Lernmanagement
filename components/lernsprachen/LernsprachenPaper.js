import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import { Fragment } from 'react'; // import Fragment from React
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default function LernsprachenPaper({
  status,
  name,
  progress,
  learningMark,
  link,
}) {
  const Dozent = false;
  return (
    <>
      <Paper
        elevation={5}
        style={{
          margin: '20px auto',
          padding: '20px',
          width: '80%',
          textAlign: 'center',
        }}
      >
        <Grid container>
          <Grid item xs={4} style={{ alignSelf: 'center' }}>
            <Typography
              variant="h6"
              noWrap
              style={{ textAlign: 'center', fontWeight: 'bold' }}
            >
              {name}
            </Typography>
          </Grid>
          <Grid item xs={2} style={{ alignSelf: 'center' }}>
            {status == 'notLogged' ? null : (
              <LinearProgress
                variant="determinate"
                value={progress}
                style={{ height: '10px' }}
              />
            )}
          </Grid>
          <Grid item xs={3} style={{ alignSelf: 'center' }}>
            {status == "notLogged" ?  null: 
            <div>
           <BookmarkIcon /
          </div>

          {learningMark != null ? learningMark : null}
            : null
            }
            
          </Grid>

          <Grid item xs={2} style={{ alignSelf: 'center' }}>
            {Dozent ? (
              <Button variant="contained" color="secondary" size="small">
                <DoubleArrowIcon />
              </Button>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                size="small"
                href={link}
              >
                {' '}
                lernen{' '}
              </Button>
            )}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
