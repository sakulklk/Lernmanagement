import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';

export default function LearningHistory() {
  const data = [
    { month: 'Jan', value: 5 },
    { month: 'Feb', value: 30 },
    { month: 'Mär', value: 33 },
    { month: 'Apr', value: 25 },
    { month: 'Mai', value: 42 },
    { month: 'Jun', value: 45 },
    { month: 'Jul', value: 50 },
    { month: 'Aug', value: 48 },
    { month: 'Sep', value: 55 },
    { month: 'Okt', value: 70 },
    { month: 'Nov', value: 76 },
    { month: 'Dez', value: 78 },
  ];
  return (
    <Paper elevation={5}>
      <Grid container style={{ textAlign: 'center' }}>
        <Grid item xs={12}>
          <Typography> Lernentwicklung </Typography>
        </Grid>
        <Grid item xs={12}>
          <Chart data={data}>
            <ArgumentAxis />
            <ValueAxis />

            <LineSeries valueField="value" argumentField="month" />
          </Chart>
        </Grid>
      </Grid>
    </Paper>
  );
}
