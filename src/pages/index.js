import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HeroBanner from '../components/HeroBanner';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Home">
      <main>
        <HeroBanner />
        {/* <HomepageHeader /> */}
      </main>
    </Layout>
  );
}

function HomepageHeader() {
  return (
    <section className={styles.sectionButtons}>
      <div>
        <Link to="/projects" className={styles.fullButton}>Projects</Link>
        <p className={styles.splitDescription}>
          Explore robotics, engineering, and research projects in aquatic, terrestrial, and soft robotics—with interactive 3D models and media.
        </p>
      </div>
      <div>
        <Link to="/about-me" className={styles.fullButton}>About Me</Link>
        <p className={styles.splitDescription}>
          Learn about my background, skills, awards, and experience in robotics, mechanical design, and creative engineering.
        </p>
      </div>
    </section>
  );
}