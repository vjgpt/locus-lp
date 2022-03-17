import React from 'react';
import styles from '@/styles/Footer.module.scss';
import components from '@/styles/Components.module.scss';
import logo from '@/images/logo.svg';
import superteam from '@/images/superteam.png';

import {
  VerticalSpaceBetween,
  DefaultLink,
} from './Components';

interface LinkTypes {
  [key: string]: {
    [key: string]: string
  }
}

const Links: LinkTypes = {
  'Get Started': {
    Overview: '/#features',
    'What’s up next': '/#upcomingFeatures',
  },
  Resources: {
    'Early Access': '/earlyaccess',
  },
  'Connect with us': {
    Discord: 'https://discord.gg/szdAnhJfqm',
    Twitter: 'https://twitter.com/locus_so',
  },
};

export const Footer = function Footer({ fixed }: {
  fixed?: boolean
}) {
  return (
    <div
      className={styles.footerContainer}
      style={{
        position: fixed ? 'absolute' : 'relative',
        bottom: fixed ? 0 : '',
      }}
    >
      <div className={styles.footerFlex}>
        <VerticalSpaceBetween>
          <img alt="Logo" src={logo.src} className="hidden md:block " />
          <p
            className={components.darkText}
            style={{ maxWidth: '48rem', marginTop: '4rem' }}
          >
            Built & backed by the best
          </p>
          <div className="flex flex-row items-center mt-2 mb-14 md:mb-0 ">
            <img alt="Logo" src={superteam.src} className=" rounded-full" />
            <a
              className={components.mainBoldText}
              style={{ marginLeft: '1rem' }}
              href="https://twitter.com/SuperteamDAO"
              target="_blank"
              rel="noopener noreferrer"
            >
              Superteam
            </a>
          </div>
        </VerticalSpaceBetween>
        {Object.keys(Links).map((key, index) => (
          <div key={index} style={{ paddingTop: '1.25rem' }} className="mb-8 lg:mb-0">
            <VerticalSpaceBetween>
              <h3 className={components.mainBoldText}>{key}</h3>
              <div
                style={{
                  marginTop: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                {Object.keys(Links[key]).map((subKey, subIndex) => (
                  <div key={subIndex} style={{ marginTop: '1rem' }}>
                    <DefaultLink href={Links[key][subKey]}>
                      {[subKey]}
                    </DefaultLink>
                  </div>
                ))}
              </div>
            </VerticalSpaceBetween>
          </div>
        ))}
      </div>
    </div>
  );
};
