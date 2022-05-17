import React from 'react';
import { LandingStyled } from './LandingStyle';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import { Button } from 'antd';
import Link from 'next/link';
const LandingPage = () => {
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);
  return (
    <LandingStyled data-aos='fade-up'>
      <img src='/logo.png' alt='Logo' />
      <Link href='/user-sign-up'>
        <a>
          <Button type='primary' block>
            CONTINUE
          </Button>
        </a>
      </Link>
    </LandingStyled>
  );
};

export default LandingPage;
