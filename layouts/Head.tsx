import React from 'react';
import Head from 'next/head';

export const DefaultHead = function DefaultHead() {
  return (
    <Head>
      <title>Locus</title>
      <meta name="description" content="Organise your community workload seamlessly" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.png" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://locus.so/" />
      <meta property="og:title" content="Locus" />
      <meta property="og:description" content="Organise your community workload seamlessly" />
      <meta property="og:image" content="https://i.imgur.com/5eIDxXU.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://locus.so/" />
      <meta property="twitter:title" content="Locus" />
      <meta property="twitter:description" content="Organise your community workload seamlessly" />
      <meta property="twitter:image" content="https://i.imgur.com/5eIDxXU.png" />
    </Head>
  );
};
