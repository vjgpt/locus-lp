import React from 'react';
import type { NextPage } from 'next';
import { DefaultHead } from '@/layouts/Head';

const EarlyAccess: NextPage = function EarlyAccess() {
  return (
    <>
      <DefaultHead />
      <iframe
        title="Early Access for Locus"
        className="tally-iframe"
        src="https://tally.so/r/3E7rAn?transparentBackground=1"
        style={{
          border: 'none',
          width: '100vw',
          height: '100vh',
          overflow: 'auto',
          display: 'fixed',
          top: 0,
          left: 0,
        }}
      />
      <style>
        {`
          #__next {
            overflow: hidden;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </>
  );
};

export default EarlyAccess;
