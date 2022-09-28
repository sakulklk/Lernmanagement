import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

export default function HomeHoverCard(text) {
  return (
    <Paper
      className="hoverWrapper"
      elevation={5}
      component={Link}
      href={text.href}
      sx={{
        textDecoration: 'none',
        width: '100%',
        height: '100px',
        display: 'block',

        background: '#0288d1',
        margin: '10px',
        textAlign: 'center',
        color: 'white',
        '&:hover': {
          paddingTop: '5px',
          opacity: '0.8',
          '& .description': {
            display: 'block',
          },
        },
      }}
    >
      <Typography
        className="title"
        variant="h6"
        style={{ paddingTop: '12.5px', fontWeight: 'bold' }}
      >
        {text.title}
      </Typography>
      <Typography
        className="description"
        variant="subtitle2"
        display="none"
        alignSelf="end"
      >
        {text.description}
      </Typography>
      {text.icon}
    </Paper>
  );
}

// const images = [
//   {
//     title: 'Breakfast',
//     width: '30%',
//   },
//   {
//     title: 'Burgers',
//     width: '40%',
//   },
//   {
//     title: 'Camera',
//     width: '30%',
//   },
// ];

// const ImageButton = styled(ButtonBase)(({ theme }) => ({
//   position: 'relative',
//   height: 200,
//   [theme.breakpoints.down('sm')]: {
//     width: '100% !important', // Overrides inline-style
//     height: 100,
//   },
//   '&:hover, &.Mui-focusVisible': {
//     zIndex: 1,
//     '& .MuiImageBackdrop-root': {
//       opacity: 0.15,
//     },
//     '& .MuiImageMarked-root': {
//       opacity: 0,
//     },
//     '& .MuiTypography-root': {
//       border: '4px solid yellow',
//     },
//   },
// }));

// const ImageSrc = styled('span')({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center 40%',
// });

// const Image = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: theme.palette.common.white,
// }));

// const ImageBackdrop = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundColor: theme.palette.common.black,
//   opacity: 0.4,
//   transition: theme.transitions.create('opacity'),
// }));

// const ImageMarked = styled('span')(({ theme }) => ({
//   height: 3,
//   width: 18,
//   backgroundColor: theme.palette.common.white,
//   position: 'absolute',
//   bottom: -2,
//   left: 'calc(50% - 9px)',
//   transition: theme.transitions.create('opacity'),
// }));

// export default function ButtonBases() {
//   return (
//     <Box
//       sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}
//     >
//       {images.map((image) => (
//         <ImageButton
//           focusRipple
//           key={image.title}
//           style={{
//             width: image.width,
//           }}
//         >
//           <ImageBackdrop className="MuiImageBackdrop-root" />
//           <Image>
//             <Typography
//               component="span"
//               variant="subtitle1"
//               color="inherit"
//               sx={{
//                 position: 'relative',
//                 p: 1,
//                 pt: 0.1,
//                 pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
//               }}
//             >
//               {image.title}
//               <ImageMarked className="MuiImageMarked-root" />
//             </Typography>
//           </Image>
//         </ImageButton>
//       ))}
//     </Box>
//   );
// }
