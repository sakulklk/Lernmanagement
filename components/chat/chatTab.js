import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Chat from './chatroom.js';

export default function chat() {
  return (
    <>
      <Head>
        <title>Chat</title>
      </Head>
      <Chat />
    </>
  );
}
