import Head from 'next/head';
import Footer from '../components/Footer';
import Professiondesign from '../components/Professiondesign';
import Navbar from '../components/Navbar';
import HeaderMain from '../components/header/header';
import Helpdesk from '../components/helpdesk/helpdesk';
import Testimonial from '../components/helpdesk/testimonial';
import Awesomefeature from '../components/Awesomefeature';
import Layout from '../components/layout';
import Workinfo from '../components/workinfo';
import Crustinfo from '../components/Crustinfo.jsx';
import Discover from '../components/discover';
import { StrictMode } from 'react';
import { NextUIProvider, createTheme } from '@nextui-org/react';

export default function Home() {
  return (
    <StrictMode styles={{ maxWidth: '1600px' }}>
      <NextUIProvider theme={theme}>
        <div style={{ background: 'black' }}>
          <Head>
            <title>{`E-Summit'23 IIT BHU`}</title>
            <meta
              name='description'
              content={`E-Cell IIT BHU is proudly hosting its annual flagship event - the three-day fiesta of entrepreneurship culture- E-Summit. Get ready to see some nerve-racking face-offs between hustlers, priceless lessons from people who made it big, and thought-provoking panels of talents from the industry- all while growing together with all the start-up enthusiasts from across the country. The dates of E-Summit are 6th to 8th January 2023. The Summit is being organized with the focus of inculcating the next generation of startup with the advent of augmenting the inner ambitions of each individual participating. With this we present to you the theme of E-Summit'23 - Augmenting Ambitions. The summit will conduct a plethora of events covering multiple domains in the entrepreneurial industry from informative talks to thrilling competitions, from meeting CEOs to putting yourself in their shoes for a case study. This year’s E-Summit encompasses various vibrant competitions including Design Rush, CasEx, SocioEntropia, Startup Auction, Commercio Entrevia, Tesseract and many more. Join the most insightful talks with all the renowned speakers, all in one panel, and get inspired by the most illuminating minds! Showcase your Venture in front of VCs, Mentors, Angel Investors, and target audience and network with fellow startups.`}
            />
            <link rel='icon' href='/favicon.ico' />
            <link
              href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css'
              integrity='sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi'
              crossOrigin='anonymous'
            />
          </Head>
          <Navbar />
          <HeaderMain />
          <Crustinfo />
          <Discover />
          {/* <Layout /> */}
          <Workinfo />
          {/* <Professiondesign /> */}
          {/* <Awesomefeature /> */}
          <Helpdesk />
          <Testimonial />
          {/* <Helpdesk /> */}
          <Footer />
        </div>
      </NextUIProvider>
    </StrictMode>
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
