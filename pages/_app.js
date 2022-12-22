import '../styles/globals.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from 'next/head';
import React, { StrictMode } from 'react';
import { createTheme, NextUIProvider, Text } from '@nextui-org/react';
import { SSRProvider } from 'react-bootstrap';
import { AuthContextProvider } from '../context/AuthContext'; 
import { SessionProvider } from "next-auth/react"
export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
})  {
  return (
    <SSRProvider>
      <StrictMode styles={{ maxWidth: '1600px' }}>
        <AuthContextProvider>
          <NextUIProvider theme={theme}>
          <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
          </NextUIProvider>
        </AuthContextProvider>
      </StrictMode>
    </SSRProvider>
  );
}

const theme = createTheme({
  type: 'dark', // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#4ADE7B',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',

      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd',

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});
