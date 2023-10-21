import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';
import { Signup } from '../components/signup';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <video preload="true" autoPlay={true} loop={true} muted={true} className={styles.heroBannerVideo}>
        <source src="https://fshsrobotics.github.io/file/reel.mp4" type="video/mp4"/>
      </video>
      <div className="container">
        <div className={styles.logoInline}>
          <img src="/img/logo.svg" width="100px"/>
          <h1 className={styles.heroBannerTitle}>{siteConfig.title}</h1>
        </div>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <main>
      <HomepageHeader />
      <Signup />
    </main>
  );
}
