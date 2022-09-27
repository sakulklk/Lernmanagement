import * as React from 'react';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import Popper from '@mui/material/Popper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function InfoPopper({ text1, text2 }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  return (
    <>
      <Button
        type="button"
        aria-label="InfoIcon"
        color="primary"
        size="small"
        aria-describedby={id}
        onClick={handleClick}
      >
        {' '}
        <InfoIcon />
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          <Typography display="block">{text1}</Typography>
          <Typography display="block">{text2}</Typography>
        </Box>
      </Popper>
    </>
  );
}
