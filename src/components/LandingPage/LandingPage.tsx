import React from 'react';
import { LandingStyled } from './LandingStyle';
import Aos from 'aos';
import { useEffect, useState} from 'react';
import 'aos/dist/aos.css';
import { Button } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
const LandingPage = () => {
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);
  const [loading, setLoading] = useState(false);
  const onClick  = () => {
    setLoading(true);
  }
  return (
    <LandingStyled data-aos='fade-down'>
      <Image src='/logo.png' alt='Logo' width={200} height={77} />
      <br></br>
      <Link href='/user/sign-up'>
        <a onClick={onClick}>
          <Button type='primary' loading={loading} block>
            CONTINUE
          </Button>
        </a>
      </Link>
    </LandingStyled>
  );
};

export default LandingPage;
