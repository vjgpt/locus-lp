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
      <div className="main-container">
        <img src={header.src} alt="logo" className=" absolute -z-10 top-0 " />
        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
      <div className="main-container" style={{ background: 'rgba(207, 238, 206, 0.6)' }}>
        <ForthSection />
      </div>
      <div className="main-container">
        <ContactSection />
      </div>
      <Footer />
    </>
  );
};

export default Home;
