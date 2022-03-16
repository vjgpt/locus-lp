import React from 'react';
import Link from 'next/link';
import homeStyles from '@/styles/Home.module.scss';
import styles from '@/styles/Components.module.scss';
// import discordIcon from '@/images/icons/social/Discord.svg';

export const FirstSectionCircle = function Circle() {
  return <div className={homeStyles.firstSectionCircle} />;
};

export interface DefaultLinkProps {
  href: string,
  children?: React.ReactNode
}

export const DefaultLink = function DefaultLink(props: DefaultLinkProps) {
  return (
    <Link href={props.href}>
      <a className={styles.defaultLink}>
        {props.children}
      </a>
    </Link>
  );
};

export const AddToDiscord = function AddToDiscord({
  overrideHeight,
  overrideWidth,
  overrideBackground,
}: {
  overrideHeight?: string,
  overrideWidth?: string,
  overrideBackground?: string
}) {
  return (
    <a
      className={styles.checkoutBtn}
      style={{
        height: overrideHeight, width: overrideWidth, background: overrideBackground,
      }}
      href={process.env.NEXT_PUBLIC_DISCORD_INVITE ? process.env.NEXT_PUBLIC_DISCORD_INVITE : '/earlyaccess'}
    >
      <span>{process.env.NEXT_PUBLIC_DISCORD_INVITE ? 'Say hi to us' : 'Checkout the app'}</span>
      {/* <img src={discordIcon.src} alt="Add to Discord" /> */}
    </a>
  );
};

export const CheckoutTheApp = function CheckoutTheApp({
  overrideHeight,
  overrideWidth,
  overrideBackground,
}: {
  overrideHeight?: string,
  overrideWidth?: string,
  overrideBackground?: string
}) {
  return (
    <a
      className={styles.checkoutBtn}
      style={{
        height: overrideHeight, width: overrideWidth, background: overrideBackground,
      }}
      href={process.env.NEXT_PUBLIC_APP_LINK ? process.env.NEXT_PUBLIC_APP_LINK : '/earlyaccess'}
    >
      <span>{process.env.NEXT_PUBLIC_APP_LINK ? 'Checkout the app' : 'Add to Discord'}</span>
    </a>
  );
};

export const Body = function Body({ children }: any) {
  return (
    <div className={styles.body}>
      {children}
    </div>
  );
};

export const HorizontalSpaceBetween = function HorizontalSpaceBetween({ children }: any) {
  return (
    <div className={styles.spaceBetweenHorizontal}>
      {children}
    </div>
  );
};

export const VerticalSpaceBetween = function VerticalSpaceBetween({ children }: any) {
  return (
    <div className={styles.spaceBetweenVertical}>
      {children}
    </div>
  );
};

export const FeaturesGrid = function FeaturesGrid({ children }: any) {
  return (
    <div className={styles.featuresGrid}>
      {children}
    </div>
  );
};
