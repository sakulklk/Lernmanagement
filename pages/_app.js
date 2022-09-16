import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500&family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
      </head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
