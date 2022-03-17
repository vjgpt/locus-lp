import React from 'react';
import styles from '@/styles/Home.module.scss';
import components from '@/styles/Components.module.scss';
import dashboardLocus from '@/images/screenshots/locusDashboard.png';
import thirdSectionHeader from '@/images/upcomingFeaturesDesign.svg';

import {
  FirstSectionCircle,
  Body,
  CheckoutTheApp,
  FeaturesGrid,
  AddToDiscord,
} from './Components';

export const FirstSection = function FirstSection() {
  return (
    <>
      <FirstSectionCircle />
      <Body>
        <div className={styles.firstSectionContainer}>
          <div className="flex flex-col lg:flex-row ">
            <h1 style={{ marginTop: '1rem', marginBottom: '0rem', marginRight: '1rem' }} className={`+ ${components.gradientHeading}`}>Revolutionary </h1>
            <h1
              className={` rounded-[20px] mt-0 mb-0 px-0 py-0 lg:mt-2 lg:px-5 lg:py-2 ${components.highlightHeading}`}
            >
              community building
            </h1>
          </div>
          <h1 style={{ marginTop: '1rem', marginBottom: '0rem' }} className={components.gradientHeading}>tool for Web3 ecosystem</h1>
          <p style={{ marginTop: '3rem', marginBottom: '5rem' }} className={`${components.bigSubHeading} ${styles.bigSubHeadingAlign}`}>
            Now organise your community workload seamlessely
          </p>
          <CheckoutTheApp
            overrideHeight="5.8rem"
            overrideWidth="21.8rem"
            overrideBackground="#4339F2"
          />
        </div>
      </Body>
    </>
  );
};

export const SecondSection = function SecondSection() {
  return (
    <div className=" mt-40 w-auto 2xl:mt-72">
      <div className="flex justify-around">
        <img style={{ width: '100rem' }} src={dashboardLocus.src} alt="" />
      </div>
    </div>
  );
};

const Features = [
  {
    title: 'Task management',
    description: `
      Create, track and review tasks for community projects.
    `,
  }, {
    title: 'Bounty system',
    description: `
      Manage and track bounties, and also share it externally.
    `,
  }, {
    title: 'Easy integrated payment',
    description: `
      Paying the contributors has never been more easy.
    `,
  }, {
    title: 'Reputation system',
    description: `
      Manage reputation/experience points and leaderboards.
    `,
  },
];

export const ThirdSection = function ThirdSection() {
  return (
    <section id="features" className={styles.thirdSectionContainer}>
      <h1
        className={` mt-28  lg:mt-64 lg:mb-0 ${components.gradientHeading}`}
      >
        Why DAOs need Locus?
      </h1>
      <p
        className={components.bigSubHeading}
        style={{
          marginTop: '2.4rem',
        }}
      >
        non traditional comunities require cutting edge tools
      </p>
      <FeaturesGrid>
        {Features.map((feature, index) => (
          <div key={index} className={components.feature}>
            <p style={{ textAlign: 'left' }} className={` mt-5 lg:mt-9 ${components.bigBoldText}`}>
              {feature.title}
            </p>
            <p style={{ marginTop: '2.2rem', textAlign: 'left', maxWidth: '270px' }} className={components.smallSubHeading}>
              {feature.description}
            </p>
          </div>
        ))}
      </FeaturesGrid>
    </section>
  );
};

const UpcomingFeatures = [
  {
    title: 'Desentralized infrastructure',
    description: `
      We will be making locus a decentralized platform
    `,
  }, {
    title: 'On-chain Proof of Work',
    description: `
      Each and every user's contribution will be on-chain
    `,
  }, {
    title: 'Identity management',
    description: `
      Every user will have a unique identity across the ecosystem
    `,
  }, {
    title: 'Commmunity Engagement Analytics',
    description: `
      Wouldn't you like to know how your community is doing?
    `,
  },
];

export const ForthSection = function ForthSection() {
  return (
    <section id="upcomingFeatures" className={styles.thirdSectionContainer}>
      <img src={thirdSectionHeader.src} alt="logo" className=" absolute -z-10 w-[1148px] right-0 " />
      <h1
        className={` mt-28  lg:mt-64 lg:mb-0 ${components.gradientHeading}`}
      >
        Big boy moves in the pipeline
      </h1>
      <p
        className={components.bigSubHeading}
        style={{
          marginTop: '2.4rem',
        }}
      >
        We want to become the one place for web3 community buidling
      </p>
      <FeaturesGrid>
        {UpcomingFeatures.map((feature, index) => (
          <div key={index} className={components.feature}>
            <p style={{ marginTop: '2.2rem', textAlign: 'left' }} className={components.bigBlackText}>
              {feature.title}
            </p>
            <p style={{ marginTop: '2.2rem', textAlign: 'left', maxWidth: '270px' }} className={components.smallSubHeading}>
              {feature.description}
            </p>
          </div>
        ))}
      </FeaturesGrid>
    </section>
  );
};

export const ContactSection = function ContactSection() {
  return (
    <section id="chatWithUs" className="flex flex-col lg:items-center ">
      <h1
        className={` mt-28 lg:mt-64 ${components.gradientHeading}`}
        style={{
          marginBottom: '0rem',
        }}
      >
        Chat with us?
      </h1>
      <h1
        className={components.gradientHeading}
        style={{
          marginTop: '1rem',
          marginBottom: '3rem',
        }}
      >
        Could be for anything, we are all ears
      </h1>
      <AddToDiscord
        overrideHeight="5.8rem"
        overrideWidth="21.8rem"
        overrideBackground="#4339F2"
      />
    </section>
  );
};
