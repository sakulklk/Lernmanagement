// import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';
// import Linnk from 'next/link';

// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

// //deine Links funktionieren nicht!! willst du, dass man von den breadcrumbs aus wieder zu home kommt?

// export default function BasicBreadcrumbs() {
//   return (
//     <div role="presentation" onClick={handleClick}>
//       <Breadcrumbs aria-label="breadcrumb">
//         <Link underline="hover" color="inherit" href="/">

//         </Link>
//         <Link

//           // den href brauchst du nicht, der ist nur als Beispiel auf der Mui Seite gewesen villeicht hast du ihn vergessen zu ändern?
//         >

// function renderRow(props) {
//   const { index, style } = props;

//   return (
//     <ListItem style={style} key={index} component="div" disablePadding>
//       <ListItemButton>
//         <ListItemText primary={`Item ${index + 1}`} />
//       </ListItemButton>
//     </ListItem>
//   );
// }

// export default function VirtualizedList() {
//   return (
//     <Box
//       sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
//     >
//       <FixedSizeList
//         height={400}
//         width={360}
//         itemSize={46}
//         itemCount={200}
//         overscanCount={5}
//       >
//         {renderRow}
//       </FixedSizeList>
//     </Box>
//   );
// }

//             <a>Nutzerdaten</a>
//           </link>
//         </Link>
//         <Typography color="text.primary">Adminrechte beantragen</Typography>
//       </Breadcrumbs>
//     </div>
//   );
// }

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

