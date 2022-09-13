import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@material-ui/core/Paper';
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
    <Grid container spacing={2}>
      <Grid item xs={2} style={{ textAlign: 'center' }}>
        <h3> Filters: </h3>
      </Grid>
      <Grid item xs={10} style={{ textAlign: 'center' }}></Grid>

      <Grid item xs={4} style={{ textAlign: 'center' }}>
        <Button
          variant="text"
          href="./faqposts"
          style={{ textAlign: 'center' }}
        >
          FAQ
        </Button>
      </Grid>

      <Grid item xs={4} style={{ textAlign: 'center' }}>
        <Button
          variant="text"
          href="./fragenposts"
          style={{ textAlign: 'center' }}
        >
          Fragen
        </Button>
      </Grid>
      <Grid item xs={4} style={{ textAlign: 'center' }}>
        <Button
          variant="text"
          href="./updateposts"
          style={{ textAlign: 'center' }}
        >
          Kommentare zu Updates
        </Button>
      </Grid>
      <Divider />

      <Grid item xs={12}>
        <List>
          <ListItem key="1">
            <Grid container>
              <Grid item xs={2}>
                <ListItemText align="left" primary="Typ"></ListItemText>
              </Grid>
              <Grid item xs={3}>
                <ListItemText align="left" primary="Titel"></ListItemText>
              </Grid>
              <Grid item xs={3}>
                <ListItemText align="left" primary=""></ListItemText>
              </Grid>
              <Grid item xs={4} style={{ textAlign: 'center' }}>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                  <Fab
                    size="small"
                    aria-label="readmore"
                  
                    href="./neupost"
                  >
                    <AddToQueueIcon fontSize="small" />
                  </Fab>
                  <Fab
                    size="small"
                    aria-label="readmore"
                  >
                    <DeleteOutlined fontSize="small" />
                  </Fab>
                </Box>
              </Grid>
            </Grid>
          </ListItem>

          <Divider />
          <ListItem key="2">
            <Grid container>
              <Grid item xs={2}>
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
              <Grid item xs={3}>
                <ListItemText
                  align="left"
                  secondary="Die Update vom 01.09..."
                ></ListItemText>
              </Grid>
              <Grid item xs={4} style={{ textAlign: 'center' }}>
                <Fab
                  size="small"
                  color="primary"
                  aria-label="readmore"
                  href="./post"
                >
                  <ArrowForwardIosIcon fontSize="small" />
                </Fab>
                <Checkbox default />
              </Grid>
            </Grid>
          </ListItem>
          <ListItem key="3">
            <Grid container>
              <Grid item xs={2}>
                <ListItemText
                  align="left"
                  secondary="Kommentare zu Update"
                ></ListItemText>
              </Grid>
              <Grid item xs={3}>
                <ListItemText align="left" secondary="3.0"></ListItemText>
              </Grid>
              <Grid item xs={3}>
                <ListItemText align="left" secondary="Neu..."></ListItemText>
              </Grid>
              <Grid item xs={4} style={{ textAlign: 'center' }}>
                <Fab
                  size="small"
                  color="primary"
                  aria-label="readmore"
                  href="./post"
                >
                  <ArrowForwardIosIcon fontSize="small" />
                </Fab>
                <Checkbox default />
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
