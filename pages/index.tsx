import type { NextPage } from 'next';
import React from 'react';
import { DefaultHead } from '@/layouts/Head';
import { Navbar } from '@/layouts/Navbar';
import header from '@/images/header.svg';
import thirdSectionHeaderMobile from '@/images/upcomingFeatureMobile.svg';
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
        <img src={header.src} alt="logo" className=" hidden absolute -z-10 top-0 md:block " />
        <img src={thirdSectionHeaderMobile.src} alt="logo" className=" black absolute -z-10 h-[600px] w-[2148px] right-0 md:w-[1148px] md:hidden " />
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
