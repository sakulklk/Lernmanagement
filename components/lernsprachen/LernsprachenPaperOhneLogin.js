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
          width: '50%',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h6"
          noWrap
          style={{ textAlign: 'center', fontWeight: 'bold' }}
        >
          {name}
        </Typography>

        <Button variant="contained" color="secondary" size="small" href={link}>
          {' '}
          lernen{' '}
        </Button>
      </Paper>
    </>
  );
}
