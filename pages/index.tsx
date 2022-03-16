import type { NextPage } from 'next';
import React from 'react';
import { DefaultHead } from '@/layouts/Head';
import { Navbar } from '@/layouts/Navbar';
import header from '@/images/header.svg';
import {
  FirstSection,
  SecondSection,
  ForthSection,
  ThirdSection,
  ContactSection,
} from '@/layouts/Sections';
import { Footer } from '@/layouts/Footer';

const Home: NextPage = function HomePage() {
  return (
    <>
      <DefaultHead />
      <div className="main-padding">
        <img src={header.src} alt="logo" className=" absolute -z-10 top-0 " />
        <Navbar />
        <FirstSection />
      </div>
      <SecondSection />
      <div className="main-padding">
        <ThirdSection />
      </div>
      <div className="main-padding" style={{ background: 'rgba(207, 238, 206, 0.6)' }}>
        <ForthSection />
      </div>
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
