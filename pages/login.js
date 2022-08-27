import Head from 'next/head';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Login from '../components/login/login.js';

export default function login() {
  return (
    <>
      <Head>
        <title>Login / Logout</title>
      </Head>

      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Login />
      </Box>
    </>
  );
}
