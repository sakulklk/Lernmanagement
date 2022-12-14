import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import Grid from '@mui/material/Grid';
import UserStateButtons from '../components/UserStateButtons.js';

export default function NavBar(props) {
  const pages = [
    { name: 'Home', route: '/' },
    { name: 'Programmiersprachen', route: '/programmiersprachen_uebersicht' },
    { name: 'Forum', route: '/forum' },
    {
      name: props.navOption,
      route: '/nutzerdaten_kontoinformationen',
    },
    { name: 'Chat', route: '/chat' },
  ];
  const settings = [
    { name: 'Logout', route: '/' },

    { name: 'Login', route: '/signUp' },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" color="info">
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ display: 'flex' }}>
          <BookOutlinedIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  style={{
                    my: 2,
                    color: 'black',
                    display: 'block',
                    textDecoration: 'none',
                  }}
                  href={page.route}
                >
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <BookOutlinedIcon
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            href="/"
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 550,
              letterSpacing: '.0.5rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DHBWStudy
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu}>
                <Link
                  style={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    textDecoration: 'none',
                  }}
                  href={page.route}
                >
                  {' '}
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>

          {props.status == 'logged' ? (
            <>
              <Paper
                color="white"
                style={{
                  width: '200px',
                  marginRight: '5px',
                  marginTop: '5px',
                  alignSelf: 'center',
                }}
              >
                <Grid container>
                  <Grid item xs={4}>
                    <Typography fontWeight="bold">Level</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>5</Typography>
                  </Grid>

                  <Grid item xs={4}>
                    <Typography fontWeight="bold">Punkte </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>345</Typography>
                  </Grid>
                </Grid>
              </Paper>
              <span style={{ margin: '10px' }}>Alex Anderson</span>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Alex Anderson" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Link
                        style={{
                          my: 2,
                          color: 'black',
                          display: 'block',
                          textDecoration: 'none',
                        }}
                        href={setting.route}
                      >
                        {setting.name}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </>
          ) : (
            <Button
              variant="outlined"
              style={{ backgroundColor: 'white' }}
              href="/signUp"
            >
              Anmelden
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
