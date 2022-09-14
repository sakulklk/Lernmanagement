import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Fab from '@material-ui/core/Fab';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';

export default function Adminov() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2} style={{ textAlign: 'center' }}>
          <h3> Filters: </h3>
        </Grid>
        <Grid item xs={10} style={{ textAlign: 'center' }}></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <Paper
            elevation={5}
            style={{ margin: '10px', padding: '10px', textAlign: 'center' }}
          >
            <Button
              variant="text"
              href="./faqposts"
              style={{ textAlign: 'center' }}
            >
              FAQ
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <Paper
            elevation={5}
            style={{ margin: '10px', padding: '10px', textAlign: 'center' }}
          >
            <Button
              variant="text"
              href="./fragenposts"
              style={{ textAlign: 'center' }}
            >
              Fragen
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={4} style={{ textAlign: 'center' }}>
          <Paper
            elevation={5}
            style={{ margin: '10px', padding: '10px', textAlign: 'center' }}
          >
            <Button
              variant="text"
              href="./updateposts"
              style={{ textAlign: 'center' }}
            >
              Kommentare zu Updates
            </Button>
          </Paper>
        </Grid>
        <Divider />

        <Grid item xs={12}>
          <List>
            <ListItem key="1">
              <Grid container>
                <Grid item xs={3}>
                  <ListItemText align="left" primary="Typ"></ListItemText>
                </Grid>
                <Grid item xs={3}>
                  <ListItemText align="left" primary="Titel"></ListItemText>
                </Grid>
                <Grid item xs={4}>
                  <ListItemText align="left" primary=""></ListItemText>
                </Grid>
                <Grid item xs={1} style={{ textAlign: 'center' }}>
                  <Fab size="small" aria-label="add" href="./neupost">
                    <AddToQueueIcon fontSize="small" />
                  </Fab>
                </Grid>
                <Grid item xs={1} style={{ textAlign: 'center' }}>
                  <Fab size="small" aria-label="delete">
                    <DeleteOutlined fontSize="small" />
                  </Fab>
                </Grid>
              </Grid>
            </ListItem>

            <Divider />
            <ListItem key="2">
              <Grid container>
                <Grid item xs={3}>
                  <ListItemText
                    align="left"
                    secondary="Kommentare zu Update"
                  ></ListItemText>
                </Grid>
                <Grid item xs={3}>
                  <ListItemText
                    align="left"
                    secondary="2.0: neue Ubungen"
                  ></ListItemText>
                </Grid>
                <Grid item xs={4}>
                  <ListItemText
                    align="left"
                    secondary="Die Update vom 01.09..."
                  ></ListItemText>
                </Grid>
                <Grid item xs={1} style={{ textAlign: 'center' }}>
                  <Fab
                    size="small"
                    color="primary"
                    aria-label="readmore"
                    href="./post"
                  >
                    <ArrowForwardIosIcon fontSize="small" />
                  </Fab>
                </Grid>
                <Grid item xs={1} style={{ textAlign: 'center' }}>
                  <Checkbox default />
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="3">
              <Grid container>
                <Grid item xs={3}>
                  <ListItemText
                    align="left"
                    secondary="Kommentare zu Update"
                  ></ListItemText>
                </Grid>
                <Grid item xs={3}>
                  <ListItemText align="left" secondary="3.0"></ListItemText>
                </Grid>
                <Grid item xs={4}>
                  <ListItemText align="left" secondary="Neu..."></ListItemText>
                </Grid>
                <Grid item xs={1} style={{ textAlign: 'center' }}>
                  <Fab
                    size="small"
                    color="primary"
                    aria-label="readmore"
                    href="./post"
                  >
                    <ArrowForwardIosIcon fontSize="small" />
                  </Fab>
                </Grid>
                <Grid item xs={1} style={{ textAlign: 'center' }}>
                  <Checkbox default />
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
}
