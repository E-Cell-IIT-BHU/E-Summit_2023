import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import Image from 'next/image';
import prof from '../assets/team/rajnesh_tyagi.png';
import Amit from '../public/team/2022-2023/Amit.jpg';
import Tanaya from '../public/team/2022-2023/Tanaya.jpg';
import Navbar from '../components/Navbar';


const Data = [
  {
      "name": "Aditya Sharma",
      "post": "Publicity,PR",
      "img": '/team/2022-2023/aditya_sharma.jpeg'
  },
  {
      "name": "Akshay Malhotra",
      "post": "PR",
      "img": "/team/2022-2023/akshay_malhotra.jpeg"
  },
  {
      "name": "Ashwat",
      "post": "Tech Team",
      "img": "/team/2022-2023/Ashwat.jpg"
  },
  {
      "name": "Ayush Anil",
      "post": "Twitter",
      "img": "/team/2022-2023/ayush_anil.jpeg"
  },
  {
      "name": "Divyansh Thakre",
      "post": "Publicity,PR",
      "img": "/team/2022-2023/Divyansh.jpg"
  },
  {
      "name": "Gunjan Pandey",
      "post": "PR",
      "img": "/team/2022-2023/gunjan.jpg"
  },
  {
      "name": "Khushi Kapoor",
      "post": "Content",
      "img": "/team/2022-2023/khushi_kapoor.jpeg"
  },
  {
      "name": "Maitrayi Komple",
      "post": "Publicity,PR",
      "img": "/team/2022-2023/maitrayi_komple.jpeg"
  },
  {
      "name": "Mansi Shrivastava",
      "post": "Publicity,PR",
      "img": "/team/2022-2023/mansi_shrivastava.jpeg"
  },
  {
      "name": "Megh Dokania",
      "post": "Publicity,PR",
      "img": "/team/2022-2023/megh_dokania.jpeg"
  },
  {
      "name": "Parth Gupta",
      "post": "Publicity,PR",
      "img": "/team/2022-2023/Parth.jpg"
  },
  {
      "name": "Prakhar Agrawal",
      "post": "Publicity,PR",
      "img": "/team/2022-2023/prakhar_agrawal.jpeg"
  },
  {
      "name": "Shreya Jain",
      "post": "Publicity,PR",
      "img": "/team/2022-2023/Shreya.JPG"
  },
  {
      "name": "Tanya Gupta",
      "post": "Publicity,PR",
      "img": "/team/2022-2023/Tanya.jpeg"
  },
  {
      "name": "Tushar Singhal",
      "post": "Publicity,PR",
      "img": "/team/2022-2023/tushar_singhal.jpeg"
  },
  {
      "name": "Vanshika Gupta",
      "post": "Publicity,PR",
      "img": "/team/2022-2023/Vanshika.jpg"
  },
  {
      "name": "Vecha Sumanth",
      "post": "Publicity,PR",
      "img": "/team/2022-2023/vecha_sumanth.jpeg"
  }
  
]

const Team = () => {
  return (
    <>
      <div style={{ backgroundColor: 'black', color: 'white' }}>
        <Head>
          <title>Team</title>
          <meta name='robots' content='index, follow' />
          <link rel='shortcut icon' href='/favicon.ico' />
        </Head>
        <Navbar />
        <div className='container' style={{ paddingTop: '100px' }}>
          <div className='row'>
            <h1
              style={{
                margin: 'auto',
                textAlign: 'center',
                fontSize: '4rem',
                fontWeight: 'bold',
              }}
            >
              The Team
            </h1>
            <h2
              style={{
                fontSize: '1.5rem',
                textAlign: 'center',
              }}
            >
              GET TO KNOW THE TEAM OF E-CELL
            </h2>
          </div>
          <div>
            <h2
              style={{
                fontSize: '2rem',
                textAlign: 'center',
                fontWeight: 'bold',
                margin: '90px auto 30px auto',
              }}
            >
              UNDER THE GUIDANCE OF
            </h2>
            <div className='our-team' style={{ margin: 'auto' }}>
              <Image
                src={prof}
                className='img-responsive'
                alt='team member'
                style={{ width: 'auto' }}
              />
              <div className='team-content'>
                <h3 className='name'>PROF. RAJNESH TYAGI</h3>
                <span className='post'>PROF. INCHARGE, E-CELL</span>
              </div>
            </div>
          </div>

          <div className='row'>
            <h2
              style={{
                fontSize: '2rem',
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                margin: '90px auto 30px auto',
              }}
            >
              CORE TEAM MEMBERS
            </h2>
            <div className='team-container'>
              <div className='our-team'>
                <Image
                  src={Amit}
                  height={1000}
                  width={1000}
                  className='img-responsive'
                  alt='team member'
                />
                <div className='team-content'>
                  <h3 className='name'>AMIT KUMAR BAHETI</h3>
                  <span className='post'>VICE PRESIDENT E-CELL</span>
                  <div className='team-social'>
                    <a
                      href={`mailto:amit.krbaheti.eee19@itbhu.ac.in`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <GrMail className='social-icons'></GrMail>
                    </a>
                    <a
                      href='https://www.linkedin.com/in/amitkumarbaheti/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaLinkedin className='social-icons'></FaLinkedin>
                    </a>
                    <a
                      href='https://twitter.com/amit_baheti_'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaTwitter className='social-icons'></FaTwitter>
                    </a>
                  </div>
                </div>
              </div>
              <div className='our-team'>
                <Image
                  height={1000}
                  width={1000}
                  src={Tanaya}
                  className='img-responsive'
                  alt='team member'
                />
                <div className='team-content'>
                  <h3 className='name'>TANAYA MUJUMDAR</h3>
                  <span className='post'>ASSOCIATE VICE PRESIDENT E-CELL</span>
                  <div className='team-social'>
                    <a
                      href={`mailto:mujumdartanaya@gmail.com`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <GrMail className='social-icons'></GrMail>
                    </a>
                    <a
                      href='https://www.linkedin.com/in/tanaya-mujumdar-80aa17207'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaLinkedin className='social-icons'></FaLinkedin>
                    </a>
                    <a
                      href='https://twitter.com/TanayaMujumdar'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaTwitter className='social-icons'></FaTwitter>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='team-container-1'>
              {Data.map((data, index) => (

                <div className='our-team' key={index}>
                  <Image
                    src={data.img}
                    height={1000}
                    width={1000}
                    className='img-responsive'
                    alt='team member'
                  />
                  <div className='team-content'>
                    <h3 className='name'>{data.name}</h3>
                    <span className='post'>{data.post}</span>
                    <div className='team-social'>
                      <a
                        href={data.mail}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <GrMail className='social-icons'></GrMail>
                      </a>
                      <a
                        href={data.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FaLinkedin className='social-icons'></FaLinkedin>
                      </a>
                      <a
                        href={data.twitter}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FaTwitter className='social-icons'></FaTwitter>
                      </a>
                    </div>
                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
