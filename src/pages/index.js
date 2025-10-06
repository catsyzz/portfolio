import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

import HeroBanner from '../components/HeroBanner';
import HeroBannerFeatures from '../components/HeroBanner.module.css';





// AI version of function


export default function Home() {
  return (
    <Layout title="Home">
      <main>
        <HeroBanner />
        <HomepageHeader />
      </main>
    </Layout>
  );
}


function HomepageHeader() {

  function HomepageHeader() {
  return (
    <section className={styles.splitSection}>
      <div className={styles.splitContainer}>
        <div className={styles.splitBox}>
          <h2 className={styles.splitTitle}>Projects</h2>
          <p className={styles.splitDescription}>
            Explore robotics, engineering, and research projects in aquatic, terrestrial, and soft robotics—with interactive 3D models and media.
          </p>
          <Link to="projects" className={styles.splitButton}>View Projects</Link>
        </div>
        <div className={styles.splitBox}>
          <h2 className={styles.splitTitle}>About Me</h2>
          <p className={styles.splitDescription}>
            Learn about my background, skills, awards, and experience in robotics, mechanical design, and creative engineering.
          </p>
          <Link to="/about-me" className={styles.splitButton}>About Me</Link>
        </div>
      </div>
    </section>
  );
}


}

// export default function Home() {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <Layout
//       title={` ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />"
//     >
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }
